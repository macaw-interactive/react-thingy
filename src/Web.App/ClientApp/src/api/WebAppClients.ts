﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.1.0.0 (NJsonSchema v10.0.24.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class ApiConfiguration {
    public getBearerToken?: () => string;
}

export class NSwagGeneratedApiBase {
    constructor(private configuration: ApiConfiguration) {}

    protected transformOptions(options: RequestInit): Promise<RequestInit> {
        if (options && options.headers && this.configuration.getBearerToken) {
            if (!options.headers) {
                options.headers = new Headers();
            }
            (options.headers as any).Authorization = `Bearer ${this.configuration.getBearerToken()}`;
        }
        return Promise.resolve(options);
    }
}

export interface IJsonServerClient {
    /**
     * Execute an JsonServer query.
     * @return The response from jsonserver.
     */
    jsonServer(jsonServerRequest: string | null): Promise<FileResponse | null>;
    /**
     * Execute an JsonServer query.
     * @return The response from jsonserver.
     */
    jsonServer2(jsonServerRequest: string | null): Promise<FileResponse | null>;
}

export class JsonServerClient extends NSwagGeneratedApiBase implements IJsonServerClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ApiConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Execute an JsonServer query.
     * @return The response from jsonserver.
     */
    jsonServer(jsonServerRequest: string | null): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/mockapi/{jsonServerRequest}";
        if (jsonServerRequest === undefined || jsonServerRequest === null)
            throw new Error("The parameter 'jsonServerRequest' must be defined.");
        url_ = url_.replace("{jsonServerRequest}", encodeURIComponent("" + jsonServerRequest)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processJsonServer(_response);
        });
    }

    protected processJsonServer(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse | null>(<any>null);
    }

    /**
     * Execute an JsonServer query.
     * @return The response from jsonserver.
     */
    jsonServer2(jsonServerRequest: string | null): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/mockapi/{jsonServerRequest}";
        if (jsonServerRequest === undefined || jsonServerRequest === null)
            throw new Error("The parameter 'jsonServerRequest' must be defined.");
        url_ = url_.replace("{jsonServerRequest}", encodeURIComponent("" + jsonServerRequest)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processJsonServer2(_response);
        });
    }

    protected processJsonServer2(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse | null>(<any>null);
    }
}

export interface IHypernovaComponentServerClient {
    /**
     * Execute a HypernovaComponentServer action.
     * @return The response from HypernovaComponentServer.
     */
    hypernova(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null>;
    /**
     * Execute a HypernovaComponentServer action.
     * @return The response from HypernovaComponentServer.
     */
    hypernova2(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null>;
}

export class HypernovaComponentServerClient extends NSwagGeneratedApiBase implements IHypernovaComponentServerClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ApiConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Execute a HypernovaComponentServer action.
     * @return The response from HypernovaComponentServer.
     */
    hypernova(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/componentserver/{hypernovaComponentServerRequest}";
        if (hypernovaComponentServerRequest === undefined || hypernovaComponentServerRequest === null)
            throw new Error("The parameter 'hypernovaComponentServerRequest' must be defined.");
        url_ = url_.replace("{hypernovaComponentServerRequest}", encodeURIComponent("" + hypernovaComponentServerRequest)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processHypernova(_response);
        });
    }

    protected processHypernova(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse | null>(<any>null);
    }

    /**
     * Execute a HypernovaComponentServer action.
     * @return The response from HypernovaComponentServer.
     */
    hypernova2(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null> {
        let url_ = this.baseUrl + "/componentserver/{hypernovaComponentServerRequest}";
        if (hypernovaComponentServerRequest === undefined || hypernovaComponentServerRequest === null)
            throw new Error("The parameter 'hypernovaComponentServerRequest' must be defined.");
        url_ = url_.replace("{hypernovaComponentServerRequest}", encodeURIComponent("" + hypernovaComponentServerRequest)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/octet-stream"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processHypernova2(_response);
        });
    }

    protected processHypernova2(response: Response): Promise<FileResponse | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return response.blob().then(blob => { return { fileName: fileName, data: blob, status: status, headers: _headers }; });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<FileResponse | null>(<any>null);
    }
}

export interface IAnimalLatinNameClient {
    /**
     * Translate animal name to Latin.
     * @param animalName (optional) The English animal name.
     * @return The Latin translation object AnimalLatinName.
     */
    get(animalName?: string | null | undefined): Promise<AnimalLatinName>;
}

export class AnimalLatinNameClient extends NSwagGeneratedApiBase implements IAnimalLatinNameClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ApiConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Translate animal name to Latin.
     * @param animalName (optional) The English animal name.
     * @return The Latin translation object AnimalLatinName.
     */
    get(animalName?: string | null | undefined): Promise<AnimalLatinName> {
        let url_ = this.baseUrl + "/api/animallatinname?";
        if (animalName !== undefined)
            url_ += "animalName=" + encodeURIComponent("" + animalName) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<AnimalLatinName> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <AnimalLatinName>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AnimalLatinName>(<any>null);
    }
}

export interface IServerRouteClient {
    /**
     * Get routing information based on the Uri.
     * @param route (optional) The route path to resolve.
     * @return The server determined routing information of type ServerRouteData.
     */
    getServerRoute(route?: string | null | undefined): Promise<ServerRouteData>;
}

export class ServerRouteClient extends NSwagGeneratedApiBase implements IServerRouteClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ApiConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * Get routing information based on the Uri.
     * @param route (optional) The route path to resolve.
     * @return The server determined routing information of type ServerRouteData.
     */
    getServerRoute(route?: string | null | undefined): Promise<ServerRouteData> {
        let url_ = this.baseUrl + "/api/serverroute?";
        if (route !== undefined)
            url_ += "route=" + encodeURIComponent("" + route) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetServerRoute(_response);
        });
    }

    protected processGetServerRoute(response: Response): Promise<ServerRouteData> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <ServerRouteData>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status === 500) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status === 404) {
            return response.text().then((_responseText) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ServerRouteData>(<any>null);
    }
}

export interface IStarWarsClient {
    getPeople(query?: string | null | undefined): Promise<StarWarsPerson[]>;
}

export class StarWarsClient extends NSwagGeneratedApiBase implements IStarWarsClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: ApiConfiguration, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getPeople(query?: string | null | undefined): Promise<StarWarsPerson[]> {
        let url_ = this.baseUrl + "/api/starwars/people?";
        if (query !== undefined)
            url_ += "query=" + encodeURIComponent("" + query) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGetPeople(_response);
        });
    }

    protected processGetPeople(response: Response): Promise<StarWarsPerson[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : <StarWarsPerson[]>JSON.parse(_responseText, this.jsonParseReviver);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<StarWarsPerson[]>(<any>null);
    }
}

export interface AnimalLatinName {
    originalName: string | undefined;
    latinName: string | undefined;
}

export interface ServerRouteData {
    type: PageType | undefined;
    carData: Car | undefined;
    animalData: Animal | undefined;
}

/** Enumeration base class as described in https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/enumeration-classes-over-enum-types. */
export interface EnumByEnumeration {
    name: string | undefined;
    id: number;
}

export interface PageType extends EnumByEnumeration {
}

export interface Car {
    year: number;
    make: string | undefined;
    speed: number;
}

export interface Animal {
    name: string | undefined;
    maxAge: number;
}

export interface StarWarsPerson {
    name: string | undefined;
    weight: number;
    hairColor: string | undefined;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

// This code is included "as is" at the top of NSwag generated API clients