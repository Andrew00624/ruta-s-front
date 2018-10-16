import React from 'react'
import Rating from "./Rating"
import RestaurantMapContainer from  './RestaurantMapContainer'
import '../../../src/routes.css';
import {Link} from 'react-router-dom'

const RouteDetailDisplay = ({routes,user}) =>{

    
    return (
        <div>
            <div className="inner-background">
                        <div className="inner-title">
                            <h1>Detalle de Ruta</h1>
                        </div>
                    <div className="menu uk-container">
                        <div className="uk-position-relative">
                            <div className="uk-position-top">
                            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                            <Link to={'/'}><img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo"/>  </Link>
                              <div className="uk-navbar-right">
                                  <ul className="uk-navbar-nav">
                                  <li><Link to={"/about"}>Acerca de Nosotros</Link></li>
                                  <li><Link to={"/how"}>Como Funciona?</Link></li>
                                      <li>{user.username}<span uk-icon="user"></span> 
                                      <div uk-dropdown="true pos:bottom-right"  >
                                            <ul class="uk-nav uk-dropdown-nav">
                                                <li><Link  to={"/profile"}>Mi perfil</Link></li>
                                                <li><Link to={"/create-route"}>Crear Ruta</Link></li>
                                                <li><Link to={"#"}>Cerrar Sesion</Link></li>
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
              <div className="uk-container">
                <div className="uk-grid-large uk-child-width-expand@s" uk-grid="true">
                    <div className="uk-width-1-2@m about-content">
                        <h2>{routes.title}</h2>
                        <Rating 
                        />
                        <p>{routes.description}</p>
                        <h5>Numero de paradas: {routes.stopsQuantity}</h5>
                        <h5>Categoria: {routes.category}</h5>
                        <h5>Locacion: {routes.location}</h5>
                        <h5>Precio: {routes.price}</h5>
                        <br/>
                        <buton className="uk-button uk-button-large uk-button-primary" >Guardar Ruta</buton>
                    </div>
                    <div className="uk-width-1-2@m ">
                    <div className="uk-background-primary route-stops">
                        <h3 clasName="uk-text-center">Lugares de ruta</h3>
                        <ul clasName="uk-text-left">
                            <li>{routes.stops}</li>
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
              </section>
                <section className="map-container">
                    <div >
                        <RestaurantMapContainer />
                    </div>
                </section>
              <section className="uk-section-large uk-light uk-background-cover section-image">
                    <div className="uk-container">
                        <h1>Ejemplo</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit alias sapiente tempora obcaecati nisi unde, optio perferendis nostrum odio maiores ex vero. Nesciunt autem quos quidem, esse suscipit alias at.</p>
                        <buton className="uk-button uk-button-large uk-button-primary">Categories</buton>
                    </div>
              </section>
              <section className="uk-section-secondary">
                    <div>Footer</div>
                </section>
        </div>
    )
}

export default RouteDetailDisplay


