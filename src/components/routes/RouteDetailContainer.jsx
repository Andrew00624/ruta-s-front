import React, {Component} from 'react'
import axios from 'axios'
import RouteDetailDisplay from './RouteDetailDisplay'


class RouteDetailContainer extends Component {

    state = {
        routes:{},
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user})
        const {id} = this.props.match.params
        console.log(id)
        this.getRouteInfo(id)
        
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
        return (
            <div>
                <RouteDetailDisplay
                routes={routes} 
                user={user}
                />
            </div>
        )
    }
}

export default RouteDetailContainer