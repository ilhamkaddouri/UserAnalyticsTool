import React from 'react';
import { Route} from 'react-router-dom';
import {Dashboard} from '../pages/Dashboard/Dashboard';
import {Visitors} from '../pages/Visitors/Visitors';
import {RealTimeMap} from '../pages/Visitors/RealTimeMap'
import {VisitsLogs} from '../pages/Visitors/VisitsLogs'
import {Locations} from '../pages/Visitors/Locations'
import {VisitsTime} from '../pages/Visitors/VisitsTime'
import {Devices} from '../pages/Visitors/Devices'

import {Behavior} from '../pages/Behavior/Behavior'
import { Pages } from '../pages/Behavior/Pages'
import { EntryPages } from '../pages/Behavior/EntryPages'

import {Insights} from '../pages/Insights/Insights'
import {HeatMaps} from '../pages/HeatMaps/HeatMaps'
import {Goals} from '../pages/Goals/Goals'

import {Users} from '../pages/Users/Users'
import {AddUser} from '../pages/Users/AddUser'

interface indexProps {

}

export const Router: React.FC<indexProps> = ({}) => {
    return (
        <>
            <Route component={Dashboard} path="/dashboard" exact/>
            

            <Route component={Visitors} path="/visitors" exact/>
            <Route component={RealTimeMap} path="/visitors/realtimeMap" exact />
            <Route component={VisitsLogs} path="/visitors/visitsLog" exact />
            <Route component={Locations} path="/visitors/locations" exact />
            <Route component={VisitsTime} path="/visitors/times" exact />
            <Route component={Devices} path="/visitors/devices" exact />


            <Route component={Behavior} path="/behavior" exact/>
            <Route component={Pages} path="/pages" exact/>
            <Route component={EntryPages} path="/entryPages" exact/>

            <Route component={Insights} path="/insights" exact/>


            <Route component={HeatMaps} path="/heatMaps" exact/>


            <Route component={Goals} path="/goals" exact/>

            <Route component={Users} path="/users" exact/>
            <Route component={AddUser} path="/addUser" exact/>

        </>
    );
}