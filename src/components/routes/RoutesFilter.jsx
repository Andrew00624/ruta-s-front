import React, {Component} from 'react'
import axios from 'axios'
import '../../../src/routes.css';
import {Link} from 'react-router-dom'
import Rating from "./Rating"


class RoutesFilter extends Component {
    state = {
        routes:[],
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({user})
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
        const {routes,user} = this.state
        return (
            <div>
                <div className="inner-background">
                        <div className="inner-title">
                            <h1>Rutas Disponibles</h1>
                        </div>
                    <div className="menu uk-container">
                        <div className="uk-position-relative">
                            <div className="uk-position-top">
                            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                              <Link to={'/'}><img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo"/>  </Link>
                              <div className="uk-navbar-right">
                                  <ul className="uk-navbar-nav">
                                  <li><Link to={"/about"}>Acerca de Nosotros</Link></li>
                                  <li><Link to={"/how"}>¿Cómo Funciona?</Link></li>
                                      <li>{user.username}<span uk-icon="user"></span> 
                                      <div uk-dropdown="true pos:bottom-right"  >
                                            <ul class="uk-nav uk-dropdown-nav">
                                                <li><Link  to={"/profile"}>Mi perfil</Link></li>
                                                <li><Link to={"/create-route"}>Crear Ruta</Link></li>
                                                <li><Link to={"#"}>Cerrar Sesión</Link></li>
                                            </ul>
                                        </div>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                         </div>
                    </div>
                </div>
              </div>
              <section className="uk-section uk-section-muted">
              <div className="uk-container routes-cards">
              <div className="uk-grid">
              {routes.map((r,key)=>(<div key={key}> 
                    <div class="uk-card uk-card-default uk-width-1-2@m">
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                </div>
                                <div class="uk-width-expand">
                                <h2 className="uk-card-title uk-margin-remove-bottom">{r.title}</h2>
                                <Rating/>
                                <span>{r.category}</span>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body">
                        <p>{r.description}</p>
                        </div>
                        <div class="uk-card-footer">
                            <Link to={'/route/'+ r._id} >Ver Detalle</Link>
                        </div>
                    </div>
              </div>))}
              
                </div>
                </div>
                </section>

                <section className="uk-section-large uk-light uk-background-cover section-image">
                <div className="uk-container">
                    <h1>Más opciones recomendadas por nuestros usuarios</h1>
                    <h4>Consulta las diferentes categorias que tenemos para ofrecerte</h4>
                    <buton className="uk-button uk-button-large uk-button-primary">  <Link to={'/categories'} > Categorias </Link></buton>
                    </div>
                </section>
            </div>


        )
    }
}



export default RoutesFilter