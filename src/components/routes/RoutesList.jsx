import React, {Component} from 'react'
import axios from 'axios'



class RoutesList extends Component {
    state = {
        routes:[]
    }

    componentWillMount(){
        axios.get('http://localhost:3000/routes-list', {
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
                <h2>las rutas</h2>
                {routes?routes.map((r, key)=>(
                    <p key={key}>{r.title}</p>
                )):''}
            </div>

           
        )
    }
}



export default RoutesList