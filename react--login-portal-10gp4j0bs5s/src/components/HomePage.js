import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../actions';
import { connect } from 'react-redux';

class HomePage extends Component {

    handleLogout(e) {
        e.preventDefault();
        this.props.onLogout(this.props.user.id);
    }

    componentDidUpdate() {
        this.props.history.push({pathname:'/login'});
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>
                <p align="center">
                <Link 
                to="/login" 
                className="btn btn-link"
                onClick = {(evt) => this.handleLogout(evt)}>Logout</Link>
                </p>
            </div>
        );
    }
}


function mapStateToProps(state) { 
    return {
        loggedIn: state.authentication.loggedIn,
        user: state.authentication.user
    }
}

function mapDispatchToProps(dispatch) { 
    return {
        onLogout: (id) => dispatch(userActions.logout(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);