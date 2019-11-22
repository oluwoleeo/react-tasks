import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {HomePage} from './HomePage';

import { userActions } from '../actions';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        /*this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    handleChange(e, ctrl) {
        switch (ctrl) {
            case 'username':
                // localStorage.setItem('username', e.target.value);
                this.setState({
                    username: e.target.value
                });
                break;
            case 'password':
                    this.setState({
                        password: e.target.value
                    });
                break;
            default:
                break;
        }       
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        this.props.onLoginSubmit(this.state.username, this.state.password);
    }

    componentDidUpdate() {
        if(this.props.loggedIn){
            this.props.history.push({pathname:'/home'});
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        let disp;
        if (submitted && !this.props.loggedIn){
        disp = <div className={`alert ${this.props.alertMmessageType}`}>{this.props.alertMessage}</div>;
        }

        if (this.props.registered){
            disp = <div className={`alert ${this.props.alertMmessageType}`}>{this.props.alertMessage}</div>;
        }
        
        return (
            <div className="col-md-6 col-md-offset-3">
                {disp}
                <h2>Login</h2>
                <form name="form">
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        className="form-control username" 
                        name="username" 
                        onChange = {(evt) => this.handleChange(evt, 'username')}/>
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        onChange = {(evt) => this.handleChange(evt, 'password')} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button
                        className="btn btn-primary" 
                        onClick = {(evt) => this.handleSubmit(evt)} >
                            Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return {
        loggedIn: state.authentication.loggedIn,
        user: state.authentication.user,
        alertMessage: state.alert.message,
        alertMmessageType: state.alert.type,
        registered: state.registration.registered
    }
}

function mapDispatchToProps(dispatch) { 
    return {
        onLoginSubmit: (u, p) => dispatch(userActions.login(u,p))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//export { LoginPage as TestLoginPage };