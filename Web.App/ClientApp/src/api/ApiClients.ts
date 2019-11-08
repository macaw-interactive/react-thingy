﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.1.0.0 (NJsonSchema v10.0.24.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export interface IJsonServerClient {
    jsonServer(jsonServerRequest: string | null): Promise<FileResponse | null>;
    jsonServer2(jsonServerRequest: string | null): Promise<FileResponse | null>;
}

export class JsonServerClient implements IJsonServerClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

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

        return this.http.fetch(url_, options_).then((_response: Response) => {
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

        return this.http.fetch(url_, options_).then((_response: Response) => {
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
    hypernova(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null>;
    hypernova2(hypernovaComponentServerRequest: string | null): Promise<FileResponse | null>;
}

export class HypernovaComponentServerClient implements IHypernovaComponentServerClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

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

        return this.http.fetch(url_, options_).then((_response: Response) => {
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

        return this.http.fetch(url_, options_).then((_response: Response) => {
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
    get(animalName?: string | null | undefined): Promise<AnimalLatinName>;
}

export class AnimalLatinNameClient implements IAnimalLatinNameClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

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

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<AnimalLatinName> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = AnimalLatinName.fromJS(resultData200);
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
    getServerRoute(route?: string | null | undefined): Promise<ServerRouteData>;
}

export class ServerRouteClient implements IServerRouteClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

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

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetServerRoute(_response);
        });
    }

    protected processGetServerRoute(response: Response): Promise<ServerRouteData> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ServerRouteData.fromJS(resultData200);
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
    getPeople(): Promise<StarWarsPerson[]>;
}

export class StarWarsClient implements IStarWarsClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getPeople(): Promise<StarWarsPerson[]> {
        let url_ = this.baseUrl + "/api/starwars/people";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetPeople(_response);
        });
    }

    protected processGetPeople(response: Response): Promise<StarWarsPerson[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(StarWarsPerson.fromJS(item));
            }
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

export class AnimalLatinName implements IAnimalLatinName {
    originalName?: string | undefined;
    latinName?: string | undefined;

    constructor(data?: IAnimalLatinName) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.originalName = data["originalName"];
            this.latinName = data["latinName"];
        }
    }

    static fromJS(data: any): AnimalLatinName {
        data = typeof data === 'object' ? data : {};
        let result = new AnimalLatinName();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["originalName"] = this.originalName;
        data["latinName"] = this.latinName;
        return data; 
    }
}

export interface IAnimalLatinName {
    originalName?: string | undefined;
    latinName?: string | undefined;
}

export class ServerRouteData implements IServerRouteData {
    type?: PageType | undefined;
    carData?: Car | undefined;
    animalData?: Animal | undefined;

    constructor(data?: IServerRouteData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.type = data["type"] ? PageType.fromJS(data["type"]) : <any>undefined;
            this.carData = data["carData"] ? Car.fromJS(data["carData"]) : <any>undefined;
            this.animalData = data["animalData"] ? Animal.fromJS(data["animalData"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ServerRouteData {
        data = typeof data === 'object' ? data : {};
        let result = new ServerRouteData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type ? this.type.toJSON() : <any>undefined;
        data["carData"] = this.carData ? this.carData.toJSON() : <any>undefined;
        data["animalData"] = this.animalData ? this.animalData.toJSON() : <any>undefined;
        return data; 
    }
}

export interface IServerRouteData {
    type?: PageType | undefined;
    carData?: Car | undefined;
    animalData?: Animal | undefined;
}

export abstract class Enumeration implements IEnumeration {
    name?: string | undefined;
    id!: number;

    constructor(data?: IEnumeration) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): Enumeration {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'Enumeration' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["id"] = this.id;
        return data; 
    }
}

export interface IEnumeration {
    name?: string | undefined;
    id: number;
}

export class PageType extends Enumeration implements IPageType {

    constructor(data?: IPageType) {
        super(data);
    }

    init(data?: any) {
        super.init(data);
    }

    static fromJS(data: any): PageType {
        data = typeof data === 'object' ? data : {};
        let result = new PageType();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        super.toJSON(data);
        return data; 
    }
}

export interface IPageType extends IEnumeration {
}

export class Car implements ICar {
    year!: number;
    make?: string | undefined;
    speed!: number;

    constructor(data?: ICar) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.year = data["year"];
            this.make = data["make"];
            this.speed = data["speed"];
        }
    }

    static fromJS(data: any): Car {
        data = typeof data === 'object' ? data : {};
        let result = new Car();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["year"] = this.year;
        data["make"] = this.make;
        data["speed"] = this.speed;
        return data; 
    }
}

export interface ICar {
    year: number;
    make?: string | undefined;
    speed: number;
}

export class Animal implements IAnimal {
    name?: string | undefined;
    maxAge!: number;

    constructor(data?: IAnimal) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.maxAge = data["maxAge"];
        }
    }

    static fromJS(data: any): Animal {
        data = typeof data === 'object' ? data : {};
        let result = new Animal();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["maxAge"] = this.maxAge;
        return data; 
    }
}

export interface IAnimal {
    name?: string | undefined;
    maxAge: number;
}

export class StarWarsPerson implements IStarWarsPerson {
    name?: string | undefined;
    weight!: number;
    hairColor?: string | undefined;

    constructor(data?: IStarWarsPerson) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.weight = data["weight"];
            this.hairColor = data["hairColor"];
        }
    }

    static fromJS(data: any): StarWarsPerson {
        data = typeof data === 'object' ? data : {};
        let result = new StarWarsPerson();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["weight"] = this.weight;
        data["hairColor"] = this.hairColor;
        return data; 
    }
}

export interface IStarWarsPerson {
    name?: string | undefined;
    weight: number;
    hairColor?: string | undefined;
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