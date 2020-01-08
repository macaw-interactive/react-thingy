import { AsyncData } from '../store/AsyncData';
import { ServerRouteData } from './ServerRouteData';

export type ServerRouteDataState = {
    serverRouteData: AsyncData<ServerRouteData>;
};