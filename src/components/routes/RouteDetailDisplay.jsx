import React from 'react'
import Rating from "./Rating"
import RestaurantMapContainer from  './RestaurantMapContainer'
import '../../../src/routes.css';
import {Link} from 'react-router-dom'
import { Modal, Button } from 'antd';

const RouteDetailDisplay = ({visible,handleOk,handleCancel,showModal,title, description, stops=[],price,stopsQuantity,category,location ,user,saveRoute}) =>{
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
                                            <ul className="uk-nav uk-dropdown-nav">
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
                        <h2>{title}</h2>
                        <Rating 
                        />
                        <p>{description}</p>
                        <h5>Numero de paradas: {stopsQuantity}</h5>
                        <h5>Categoria: {category}</h5>
                        <h5>Locacion: {location}</h5>
                        <h5>Precio: {price}</h5>
                        <br/>
                        <button className="uk-button uk-button-large uk-button-primary" onClick={saveRoute} >Guardar Ruta</button>
                    </div>
                    <div className="uk-width-1-2@m ">
                    <div className="uk-background-primary route-stops">
                        <h3 >Lugares de la Ruta</h3>
                        <ul className="uk-text-left">
                            <div>{stops.map((r,key)=>(<div key ={key}> 
                            <h4>{r.name}</h4>
                            <p>Rating: {r.rating}</p>
                            
                            </div>
                            ))}      
                            </div>
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
                        <button className="uk-button uk-button-large uk-button-primary">Categories</button>
                    </div>
              </section>
              <section className="uk-section-secondary">
                    <div>Footer</div>
                </section>
        </div>
    )
}

export default RouteDetailDisplay


