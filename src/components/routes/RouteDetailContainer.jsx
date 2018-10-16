import React, {Component} from 'react'
import axios from 'axios'
import RouteDetailDisplay from './RouteDetailDisplay'
import toastr from 'toastr'



class RouteDetailContainer extends Component {

    state = {
        routes:{},
        user:{},
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user})
        const {id} = this.props.match.params
        console.log(id)
        this.getRouteInfo(id)
    }

    
    saveRoute = () => {
        const {id} = this.props.match.params
        axios.post('http://localhost:3000/add-route',{routeid:id},{
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        }).then(res=>{
            toastr.success('Ruta Guardada')
            console.log (res)
        }).catch (e=>{
            console.log (e)
        })
    }
  


    getRouteInfo = (id) =>{
        axios.get('http://localhost:3000/route/'+ id , {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        }).then(res=>{
            console.log(res)
            this.setState({routes:res.data})
        }).catch(e=>{
            console.log(e)
        })
    }


    render (){
        const {routes,user} = this.state
        console.log (this.props)
        return (
            <div>
                <RouteDetailDisplay
                routes={routes} 
                user={user}
                saveRoute = {this.saveRoute}
                />
            </div>
        )
    }
}

export default RouteDetailContainer