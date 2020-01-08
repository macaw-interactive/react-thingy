import { useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/RootState';
import { AsyncData } from '../store/AsyncData';
import { IServerRouteClient } from '../api/WebAppClients';
import { ServerRouteData } from './ServerRouteData';
import { ApplicationContext } from '../ApplicationContext';
import { Environment } from '../Environment';
import { reduxDataLoader } from '../BaseRedux/ReduxDataLoader';
import { TypeKeysBaseName } from './ServerRouteDataActions';
import { resolve, TYPE } from '../services/container';

export const useServerRouteData = (): AsyncData<ServerRouteData> => {
    const applicationContext = useContext(ApplicationContext).applicationContext;
    
    // for managing correct rerendering both server-side and client-side
    const firstClientSideRenderWithData = useRef(true);
    const isHydrated = useSelector((state: RootState) => state.page.isHydrated);
    
    const dispatch = useDispatch();
    const location = useLocation();
    

    const serverRouteClient = resolve<IServerRouteClient>(TYPE.ServerRouteDataClient);

    const serverRouteData: AsyncData<ServerRouteData> = useSelector((state: RootState) => state.serverRouteData.serverRouteData);

    const serverRouteDataFetch = async (): Promise<ServerRouteData> => {
        const path = location.pathname.substring(1); // no leading '/'
        var serverRouteDataPromise = serverRouteClient().getServerRoute(path);
        if (process.env.NODE_ENV !== 'production') {
            console.log(`useServerRouteData with path '${path}'`);
        }
        return serverRouteDataPromise;
    };

    const loadServerRouteReduxData = () => {
        reduxDataLoader<ServerRouteData>(serverRouteDataFetch, applicationContext, dispatch, TypeKeysBaseName);
    };

    if (Environment.isServer) {
        loadServerRouteReduxData();
    }

    useEffect(() => {
        if ((!firstClientSideRenderWithData.current || !serverRouteData.data) || !isHydrated) {
            loadServerRouteReduxData();
        } else {
            firstClientSideRenderWithData.current = false;
        }
    }, [location.pathname, location.search]); // eslint-disable-line react-hooks/exhaustive-deps

    return serverRouteData;
};