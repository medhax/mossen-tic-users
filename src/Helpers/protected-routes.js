import React, {useEffect, useState} from "react";
import {Route, Redirect} from 'react-router-dom';
import {isLoggedIn} from './Components/Helpers/Auth-Helper';



export const ProtectedRoute = ({ component: Component, ...rest}) => {
    const [userBool, setUserBool] = useState(this.props.isValid)

    console.log(userBool)
    return (
        <Route {...rest}
        render={props => {
            if (userBool === true){
                return <Component {...props} />
            } else if (userBool === false) {
    return <Redirect to={ {
    pathname: "/"} }/>
            }
            
        }}
        />
    )
}