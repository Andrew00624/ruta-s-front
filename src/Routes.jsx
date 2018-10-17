import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SignupContainer from './components/auth/SignupContainer'
import LoginContainer from './components/auth/LoginContainer'
import RouteContainer from './components/routes/RouteContainer'
import Profile from './components/auth/Profile'
import RoutesList from './components/routes/RoutesList'
import RoutesFilter from './components/routes/RoutesFilter'
import RestaurantMapContainer from './components/routes/RestaurantMapContainer'
import RouteDetailContainer from './components/routes/RouteDetailContainer'
import Categories from './components/routes/Categories'
import Home from './components/Home'
import Buscador from './components/Buscador'
import About from './components/About'
import HowitWorks from './components/HowitWorks'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/buscador" component={Buscador} />
            <Route path="/about" component={About} />
            <Route path="/how" component={HowitWorks} />
            <Route path="/categories" component={Categories} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/create-route" component={RouteContainer} />
            <Route path="/profile" component={Profile} />
            <Route path="/routes-list" component={RoutesList} />
            <Route path="/filter-routes" component={RoutesFilter} />
            <Route path="/route/:id" component={RouteDetailContainer} />
            <Route path="/map" component={RestaurantMapContainer} />
        </Switch>
    )
}


export default Routes