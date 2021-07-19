import React, {useState} from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../common/utils/Utils';
interface PublicRouteProps {

}

export const PublicRoute: React.FC<PublicRouteProps> = ({}) => {
    const [restricted, setRescrited]=  useState<Boolean>(false)
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route render={props => (
            isLogin() && restricted ?
                <Redirect to="/dashboard" />
            : <div>hey</div>
        )} />
    );
}