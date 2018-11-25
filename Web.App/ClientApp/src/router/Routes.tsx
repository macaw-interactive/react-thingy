import * as React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import CounterPage from '../pages/CounterPage';
import UsersPage from '../pages/UsersPage';
import { Error404 } from '../pages/404';

type RoutingParams = {};
type RoutesAllProps = RouteComponentProps<RoutingParams>;

class Routes extends React.Component<RoutesAllProps> {

    public render(): JSX.Element {
        return (
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/counter" exact={true} component={CounterPage} />
                <Route path="/users" exact={true} component={UsersPage} />

                <Route component={Error404} />
            </Switch>
        );
    }
}

export default withRouter(Routes);