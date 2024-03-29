import React from 'react';
import { Router, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';
import HomePage  from './components/HomePage';
import LoginPage  from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <BrowserRouter>
                <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      <Route path = "/login" component = {LoginPage} />
                      <Route path = "/register" exact component = {RegisterPage} />
                      <Route path = "/home" exact component = {HomePage} />
                      <Redirect from = "/" to = "/login" />
                  </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}