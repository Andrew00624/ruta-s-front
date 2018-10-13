import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SignupContainer from './components/auth/SignupContainer'
import LoginContainer from './components/auth/LoginContainer'
import RouteContainer from './components/routes/RouteContainer'
import Profile from './components/auth/Profile'
import RoutesList from './components/routes/RoutesList'
import RoutesFilter from './components/routes/RoutesFilter'
import RouteDetailContainer from './components/routes/RouteDetailContainer'
import Categories from './components/routes/Categories'
import Home from './components/Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/create-route" component={RouteContainer} />
            <Route path="/profile" component={Profile} />
            <Route path="/routes-list" component={RoutesList} />
            <Route path="/filter-routes" component={RoutesFilter} />
            <Route path="/route" component={RouteDetailContainer} />
        </Switch>
    )
}


export default Routes