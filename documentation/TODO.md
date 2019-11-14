This sample Web.App solution still needs further development. The following things still need to be done:

- Improve documentation
- Create the creationinfo.txt file in HypernovaComponentServer when building server-bundle and Docker image
- Split creationinfo.txt into two files - building server-bundle and building Docker image
- Make admin endpoints HypernovaComponentServer available through .NET Core web server 
- Configure the .NET Core web server Web.App through environment variables instead of the settings.json files
- Add possibility to render complete "index.html" by HypernovaComponentServer when rendering a 
  SPA (similar to how Hypernova renders AMP pages). This enables the possibility to set title, metadata, JSON-LD etc.
  Scripts and css to include is available in the file ```Web.App\ClientApp\build\asset-manifest.json``` generated by the
  CRA3 build. This file has the following format:
  ```
  {
    "main.css": "/static/css/main.84ec5f91.chunk.css",
    "main.js": "/static/js/main.a64279ed.chunk.js",
    "main.js.map": "/static/js/main.a64279ed.chunk.js.map",
    "static/js/1.33af76f6.chunk.js": "/static/js/1.33af76f6.chunk.js",
    "static/js/1.33af76f6.chunk.js.map": "/static/js/1.33af76f6.chunk.js.map",
    "runtime~main.js": "/static/js/runtime~main.229c360f.js",
    "runtime~main.js.map": "/static/js/runtime~main.229c360f.js.map",
    "static/css/main.84ec5f91.chunk.css.map": "/static/css/main.84ec5f91.chunk.css.map",
    "index.html": "/index.html",
    "precache-manifest.cf51764c53af1674c7cf07135fdb02a8.js": "/precache-manifest.cf51764c53af1674c7cf07135fdb02a8.js",
    "service-worker.js": "/service-worker.js"
  }
  ```
  - Add tests and code coverage in the docker container build (see https://colinsalmcorner.com/post/net-core-multi-stage-dockerfile-with-test-and-code-coverage-in-azure-pipelines)
  - Use NGINX within the Docker container so we can map multiple ports (jsonserver) as a subpath under the .NET Core web app.
    We need a local running Docker containing with a mounted config file for development, so subpath keep working.
    - https://medium.com/shiphp/building-a-custom-nginx-docker-image-with-environment-variables-in-the-config-4a0c36c4a617
    - https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-2.2
    - https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-2.2
