import React from 'react';
import { StaticRouter, Router } from 'react-router';
import { Environment } from '../Environment';
import { ApplicationContext, ApplicationContextConsumerProps } from '../ApplicationContext';
import Routes from './Routes';
import { ContextHistory } from '../ContextHistory';

export const ApplicationRoutes = () => {
    return (
        <ApplicationContext.Consumer>
            {(applicationContextConsumer: ApplicationContextConsumerProps) => {
                return (
                    Environment.isServer
                        ? (
                            <StaticRouter context={{}} location={applicationContextConsumer.applicationContext.relativeUrl}>
                                <Routes />
                            </StaticRouter>
                        )
                        : (
                            <Router history={new ContextHistory().getHistory()}>
                                <Routes />
                            </Router>
                        )
                );
            }}
        </ApplicationContext.Consumer>
    );
};