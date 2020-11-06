import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {
checkUser(){
    if (localStorage.getItem('profileObj')){
        return true
    }  else {
        return false
    }
}
    render() {
        const Component = this.props.component;
        const isAuthenticated = this.checkUser();
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;