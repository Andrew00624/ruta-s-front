import React, {Component} from 'react'
import axios from 'axios'



class RoutesFilter extends Component {
    state = {
        routes:[]
    }

    componentWillMount(){
        const cat = JSON.parse(localStorage.getItem('categories'))
        const location = JSON.parse(localStorage.getItem('location'))
        axios.get(`http://localhost:3000/filter-routes/?category=${cat}&location=${location}`, {
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
                <h2>Rutas Disponibles</h2>
                {routes.map((r, key)=>(<p key={key}>{r.title}</p>))}
                {routes.map((r, key)=>(<p key={key}>{r.category}</p>))}
            </div>

           
        )
    }
}



export default RoutesFilter