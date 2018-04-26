import React from "react";
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenceDashboardPage from '../components/ExpenceDashboardPage';
import AddExpencePage from '../components/AddExpencePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import { Header } from '../components/Header';

export const history = createHistory(); // creates access to history of browser

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenceDashboardPage} exact={true} />
                <Route path="/create" component={AddExpencePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;