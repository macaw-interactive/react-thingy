import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Environment } from '../Environment';
import { RootState } from './RootState';
import { CounterReducer } from '../counter/CounterReducer';
import { UserReducer } from './user/UserReducer';

export const history = !Environment.isServer ? createBrowserHistory() : createMemoryHistory();

const reducer = combineReducers<RootState>({
    router: routerReducer,
    counter: CounterReducer,
    user: UserReducer
});

const middleware = [
    routerMiddleware(history)
];

export function configureStore(initialReduxStoreState: RootState | undefined = undefined): Store<RootState> {
    const store = createStore(
        reducer,
        initialReduxStoreState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
    return store;
}