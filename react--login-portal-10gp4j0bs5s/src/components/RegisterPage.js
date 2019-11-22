import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        /*this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }

    handleChange(event, control) {
        // handle input change and dispatch register
        switch (control) {
            case 'username':
                this.setState({
                    user: {
                        ...this.state.user,
                        username: event.target.value
                    }
                });
                break;
            case 'password':
                    this.setState({
                        user: {
                            ...this.state.user,
                            password: event.target.value
                        }
                    });
                break;
            default:
                break;
        }   
    }

    handleSubmit(event) {
        // handle button click and dispatch register
        event.preventDefault();
        this.setState({
            submitted: true
        });
        this.props.onRegisterSubmit({username: this.state.user.username, password: this.state.user.password});
    }

    componentDidUpdate() {
        if(this.props.registered){
            this.props.history.push({pathname:'/login'});
        }
    }

    render() {
        const { user, submitted } = this.state;
        let disp;
        if (submitted && !this.props.registered){
            disp = <div className={`alert ${this.props.alertMmessageType}`}>{this.props.alertMessage}</div>;
        }
        
        return (
            <div className="col-md-6 col-md-offset-3">
                {disp}
                <h2>Register</h2>
                <form name="form">
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        className="form-control username" 
                        name="username" 
                        onChange = {(evt) => this.handleChange(evt, 'username')}/>
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        onChange = {(evt) => this.handleChange(evt, 'password')}/>
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button 
                        className="btn btn-primary"
                        onClick = {(evt) => this.handleSubmit(evt)}>
                            Register</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

// complete the below function
function mapStateToProps(state) {
    return {
        registered: state.registration.registered,
        alertMessage: state.alert.message,
        alertMmessageType: state.alert.type
    }
}

function mapDispatchToProps(dispatch) { 
    return {
        onRegisterSubmit: (u) => dispatch(userActions.register(u)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
//export { RegisterPage as TestRegisterPage };
