import React from 'react'
import Rating from "./Rating"
import RestaurantMapContainer from  './RestaurantMapContainer'
import '../../../src/routes.css';
import {Link} from 'react-router-dom'

const RouteDetailDisplay = ({title, description, stops=[],price,stopsQuantity,category,location ,user,saveRoute}) =>{
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
                                  <li><Link to={"/how"}>¿Cómo Funciona?</Link></li>
                                      <li>{user.username}<span uk-icon="user"></span> 
                                      <div uk-dropdown="true pos:bottom-right"  >
                                            <ul className="uk-nav uk-dropdown-nav">
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
              <div className="uk-container">
                <div className="uk-grid-large uk-child-width-expand@s" uk-grid="true">
                    <div className="uk-width-1-2@m about-content">
                        <h2>{title}</h2>
                        <Rating 
                        />
                        <h5>Descripción</h5>
                        <p>{description}</p>
                        <h5>Número de paradas: {stopsQuantity}</h5>
                        <h5>Categoría: {category}</h5>
                        <h5>Locación: {location}</h5>
                        <h5>Precio: {price}</h5>
                        <br/>
                        <button className="uk-button uk-button-large uk-button-primary" onClick={saveRoute} >Guardar Ruta</button>
                    </div>
                    <div className="uk-width-1-2@m ">
                    <div className="uk-background-primary route-stops">
                        <h3 >Lugares de la Ruta</h3>
                        <ul className="uk-text-left">
                            <div className="lugares-div">{stops.map((r,key)=>(<div key ={key}> 
                            <h4> Lugar: {r.name}</h4>
                            <span>Rating: {r.rating}</span>
                            <p><a href={r.url} target="blank" >Más Información</a><span uk-icon="chevron-right"></span></p>
                            
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
                    <h1>Más opciones recomendadas por nuestros usuarios</h1>
                    <h4>Consulta las diferentes categorias que tenemos para ofrecerte</h4>
                    <buton className="uk-button uk-button-large uk-button-primary">  <Link to={'/categories'} > Categorias </Link></buton>
                    </div>
                </section>

        </div>
    )
}

export default RouteDetailDisplay


