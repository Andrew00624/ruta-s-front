import React, {Component} from 'react'
import axios from 'axios'
import RouteDetailDisplay from './RouteDetailDisplay'


class RouteDetailContainer extends Component {

    state = {
        routes:{}
    }

    componentWillMount(){
        const {id} = this.props.match.params
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
        const {routes} = this.state
        return (
            <div>
                <RouteDetailDisplay
                
                routes={routes} 
                />
            </div>
        )
    }
}

export default RouteDetailContainer