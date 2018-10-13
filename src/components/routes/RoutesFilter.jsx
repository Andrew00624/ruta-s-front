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
                <div className="uk-container">
                <h1>Rutas Disponibles</h1>

                <div className="uk-card uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid='true'>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{routes.map((r, key)=>(<span key={key}>{r.title}</span>))}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">{routes.map((r, key)=>(<span key={key}>{r.category}</span>))}</p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <p>{routes.map((r, key)=>(<span key={key}>{r.description}</span>))}</p>
                    </div>
                    <div className="uk-card-footer">
                    <p>{routes.map((r, key)=>(<span key={key}>{r.creador}</span>))}</p>
                        <a href="#" className="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
                </div>
            </div>


        )
    }
}



export default RoutesFilter