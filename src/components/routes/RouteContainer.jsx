import React, {Component} from 'react'
import RouteDisplay from './RouteDisplay'
import toastr from 'toastr'
import axios from 'axios'


class RouteContainer extends Component {

    state = {
        route:{},
        routes:[],
        city: "",
        lugares:[]
    }

    
    
    createRoute = (e) =>{
    e.preventDefault()
    const city = localStorage.getItem('city')
    const {route} = this.state
    route.location = city
    axios.post('http://localhost:3000/create-route',route,{headers:{
        'Authorization': localStorage.getItem('token')
    }})
    .then (route=>{
        console.log (route)
        toastr.success ('Ruta Creada')
        this.props.history.push('/routes-list')
    })
    .catch(e=>toastr.error('Error'))
}

onChange = (e) =>{
    const field = e.target.name 
    const value = e.target.value 
    const {route} = this.state
    route[field] = value 
    this.setState({route})
    console.log(route)
}

onSuggestSelect(suggest) {
    console.log(suggest);
  }


    render (){
        const {route,lugares} = this.state
        console.log(this.state.city)
        return (
            <div>
                <RouteDisplay
                    route={route}
                    lugares={lugares}
                    onSubmit={this.createRoute}
                    onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect}
                   
                />   
            </div>
        )
    }
}

export default RouteContainer