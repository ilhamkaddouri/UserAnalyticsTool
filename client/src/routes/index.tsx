import React from 'react';
import { Route} from 'react-router-dom';
import {Dashboard} from '../pages/Dashboard/Dashboard';
import {Visitors} from '../pages/Visitors/Visitors';
import {Behavior} from '../pages/Behavior/Behavior'
import {Insights} from '../pages/Insights/Insights'
import {HeatMaps} from '../pages/HeatMaps/HeatMaps'
import {Goals} from '../pages/Goals/Goals'
import {Users} from '../pages/Users/Users'

interface indexProps {

}

export const Router: React.FC<indexProps> = ({}) => {
    return (
        <>
            <Route component={Dashboard} path="/" exact/>
            

            <Route component={Visitors} path="/visitors" exact/>


            <Route component={Behavior} path="/behavior" exact/>

            <Route component={Insights} path="/insights" exact/>


            <Route component={HeatMaps} path="/heatMaps" exact/>


            <Route component={Goals} path="/goals" exact/>

            <Route component={Users} path="/users" exact/>

        </>
    );
}