import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SignupContainer from './components/auth/SignupContainer'
import LoginContainer from './components/auth/LoginContainer'
import RouteContainer from './components/routes/RouteContainer'
import Profile from './components/auth/Profile'
import RoutesList from './components/routes/RoutesList'
import Home from './components/Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/create-route" component={RouteContainer} />
            <Route path="/profile" component={Profile} />
            <Route path="/routes-list" component={RoutesList} />
        </Switch>
    )
}


export default Routes