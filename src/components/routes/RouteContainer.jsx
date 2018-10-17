import React, {Component} from 'react'
import RouteDisplay from './RouteDisplay'
import toastr from 'toastr'
import axios from 'axios'



class RouteContainer extends Component {

    state = {
        route:{
            stops:[]
        },
        routes:[],
        city: "",
        lugares:[],
        visible: false,
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user})
    }

    saveLocation = (lat, lng, name,url) => {
        const place = {lat,lng,name,url}
        const {lugares} = this.state
        lugares.unshift(place)
        this.setState({lugares})
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    
    createRoute = (e) =>{
    e.preventDefault()
    const stops = this.state.lugares
    console.log(stops)
    const city = localStorage.getItem('city')
    const {route} = this.state
    route.location = city
    route[stops] = stops
    axios.post('http://localhost:3000/create-route',route,{headers:{
        'Authorization': localStorage.getItem('token')
    }})
    .then (route=>{
        console.log (route)
        toastr.success ('Ruta Creada')
        
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
handlePlace=(place)=>{
    console.log(place)
    const {route} = this.state
    const {stops} = route
    const stop = {name:place.name, lat:place.geometry.location.lat(), lng:place.geometry.location.lng(),rating:place.rating,url:place.url}
    stops.push(stop)
    this.setState({route})
    console.log(route)

}
/*onPlaceSelected={(parada) => {
    localStorage.setItem('parada', parada.name)
    console.log(parada);
    saveLocation(parada.geometry.location.lat(),parada.geometry.location.lng(), parada.name)
    }}*/

onSuggestSelect(suggest) {
    console.log(suggest);
  }


    render (){

        console.log(this.state.lugares)

        const {route,lugares,visible,user} = this.state
        console.log(this.state.city)
        return (
            <div>
                <RouteDisplay
                    route={route}
                    lugares={lugares}
                    onSubmit={this.createRoute}
                    onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect}
                    saveLocation={this.saveLocation}
                    handlePlace={this.handlePlace}
                    showModal={this.showModal}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    visible={visible}
                    user={user}
                />   

            </div>
        )
    }
}

export default RouteContainer