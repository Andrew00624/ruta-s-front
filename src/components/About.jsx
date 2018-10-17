import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>



 <div className="inner-background">
                        <div className="inner-title">
                            <h1>Acerca de nosotros</h1>
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
                                  <li><Link to={"/login"}>Iniciar Sesión</Link></li>
                                  <li><Link to={"/signup"}>Registrarse</Link></li>
                                  </ul>
                              </div>
                          </nav>
                         </div>
                    </div>
                </div>
              </div>
            

            <section id="about"className="uk-section uk-section-muted">
            <div className="uk-container">
            <div className="uk-grid uk-flex uk-flex-center">
                <div className="uk-width-1-2@m about-content">
                    <h2>¿Qué es Ruta-S?</h2>
                    <p>Es una plataforma en la que podrás encontrar recorridos gastronómicos recomendados por usuarios alrededor del mundo.</p>
                    <p>En la plataforma podras crear tus propias rutas para recomendar a otro usuarios tus experiencias en diferentes restaurantes de los lugares que visitaste. </p>
                    <br/>
                    <Link to={"/signup"} className="uk-button uk-button-large uk-button-primary" >Registrarse</Link>
                </div>
                <div className="uk-width-1-2@m uk-text-right">
                    <img className="marker" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539615940/iconlogo.png" alt=""/>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default About