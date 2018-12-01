using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;

namespace Web.App.Hypernova
{
    /// <summary>
    /// Hypernova client.
    /// </summary>
    public class HypernovaClient
    {
        public readonly ILogger Logger;
        public readonly IHostingEnvironment Env;
        public readonly IHttpClientFactory HttpClientFactory;
        public readonly IOptions<HypernovaSettings> Options;
        public readonly HypernovaSettings Settings;

        public HypernovaClient(ILogger logger, IHostingEnvironment env, IHttpClientFactory httpClientFactory, IOptions<HypernovaSettings> options)
        {
            Logger = logger ?? throw new ArgumentNullException(nameof(logger));
            Env = env ?? throw new ArgumentNullException(nameof(env));
            HttpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
            Options = options;
            Settings = options.Value;
        }

        /// <summary>
        /// Render a React component server-side given the props serialized in <paramref name="jsonSerializedProps"/>.
        /// </summary>
        /// <param name="componentName">The name of the React component.</param>
        /// <param name="jsonSerializedProps">Serialized component props.</param>
        /// <returns></returns>
        public async Task<IHtmlContent> React(
            string componentName,
            string jsonSerializedProps
        )
        {
            if (String.IsNullOrWhiteSpace(jsonSerializedProps))
            {
                jsonSerializedProps = "{}";
            }

            var postBody = $"{{ \"{componentName}\": {{ \"name\": \"{componentName}\", \"data\": {jsonSerializedProps} }} }}";

            var result = await RenderHypernovaComponents(componentName, postBody);
            return result;
        }

        /// <summary>
        /// Render a React component server-side with an initial Redux state and support for async calls using the Hypernova Component Server.
        /// This function is especially useful to server-side render a complete SPA React application.
        /// </summary>
        /// <param name="componentName">The name of the React component.</param>
        /// <param name="relativeUrl">The relative url, useful in case of rendering a SPA React application with routing.</param>
        /// <param name="jsonSerializedReduxState">The initial Redux state to start with.</param>
        /// <param name="baseUrl">The base url of the website for prefixing relative ajax calls. If not
        /// explicitly specified it can be configured with the <c>ComponentServerBaseUrlOverride</c> appsetting.</param>
        /// <returns>The resulting server-side rendered HTML.</returns>
        public async Task<IHtmlContent> ReactAsyncRedux(
            string componentName,
            string relativeUrl = "",
            string jsonSerializedReduxState = null,
            string baseUrl = null
        )
        {
            if (String.IsNullOrWhiteSpace(jsonSerializedReduxState))
            {
                jsonSerializedReduxState = "{}";
            }

            baseUrl = ResolveBaseUrl(baseUrl);

            var postBody = $"{{ \"{componentName}\": {{ \"name\": \"{componentName}\", \"data\": {jsonSerializedReduxState}, \"metadata\": {{ \"strategy\": \"asyncRedux\", \"baseUrl\": \"{baseUrl}\", \"timeout\": {Settings.TimeoutInMilliseconds}, \"applicationContextServer\": {{ \"relativeUrl\": \"{relativeUrl}\", \"isAmp\": false }} }} }} }}";

            var result = await RenderHypernovaComponents(componentName, postBody);
            return result;
        }

        private string ResolveBaseUrl(string baseUrl)
        {
            if (String.IsNullOrWhiteSpace(baseUrl))
            {
                var hypernovaComponentServerBaseUrlOverride = Settings.ComponentServerBaseUrlOverride;
                if (!string.IsNullOrWhiteSpace(Settings.ComponentServerBaseUrlOverride))
                {
                    baseUrl = Settings.ComponentServerBaseUrlOverride;
                    if (baseUrl.Contains("[local-ip]"))
                    {
                        baseUrl = baseUrl.Replace("[local-ip]", GetLocalIpAddress());
                    }
                }
            }

            return baseUrl;
        }

        private async Task<IHtmlContent> RenderHypernovaComponents(string componentName, string postBody)
        {
            string hypernovaServerUrl = Settings.ComponentServerUrl;

            if (!Uri.TryCreate(Settings.ComponentServerUrl, UriKind.Absolute, out Uri _))
            {
                throw new HypernovaException($"Hypernova Component Server url '{hypernovaServerUrl}' as specified in appsetting 'Hypernova.' is not an absolute url");
            }

            var client = HttpClientFactory.CreateClient();
            var response = await client.PostAsync($"{hypernovaServerUrl}/batch", new StringContent(postBody, System.Text.Encoding.UTF8, "application/json"));
            var responseString = await response.Content.ReadAsStringAsync();
            var hypernovaResult = JsonConvert.DeserializeObject<HypernovaResult>(responseString);

            if (hypernovaResult.Succes == false && hypernovaResult.Error != null)
            {
                throw new HypernovaException($"Call to Hypernova Component Server at '{hypernovaServerUrl}' failed. Error: {hypernovaResult.Error.Message}");
            }

            var componentResult = hypernovaResult.Results[componentName];

            if (componentResult.StatusCode != 200)
            {
                throw new HypernovaException($"Failed to render component '{componentName}' using the Hypernova Component Server at '{hypernovaServerUrl}'. Error: {componentResult.Error.Message}, Stacktrace: {string.Join("\r\n", componentResult.Error.Stack)}");
            }

            return new HtmlString(hypernovaResult.Results[componentName].Html);
        }

        // https://stackoverflow.com/questions/6803073/get-local-ip-address (rodcesar.santos)
        private static string GetLocalIpAddress()
        {
            UnicastIPAddressInformation mostSuitableIp = null;

            var networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();

            foreach (var network in networkInterfaces)
            {
                if (network.OperationalStatus != OperationalStatus.Up)
                    continue;

                var properties = network.GetIPProperties();

                if (properties.GatewayAddresses.Count == 0)
                    continue;

                foreach (var address in properties.UnicastAddresses)
                {
                    if (address.Address.AddressFamily != AddressFamily.InterNetwork)
                        continue;

                    if (IPAddress.IsLoopback(address.Address))
                        continue;

                    if (!address.IsDnsEligible)
                    {
                        if (mostSuitableIp == null)
                            mostSuitableIp = address;
                        continue;
                    }

                    // The best IP is the IP got from DHCP server
                    if (address.PrefixOrigin != PrefixOrigin.Dhcp)
                    {
                        if (mostSuitableIp == null || !mostSuitableIp.IsDnsEligible)
                            mostSuitableIp = address;
                        continue;
                    }

                    return address.Address.ToString();
                }
            }

            return mostSuitableIp != null
                ? mostSuitableIp.Address.ToString()
                : "";
        }
    }
}