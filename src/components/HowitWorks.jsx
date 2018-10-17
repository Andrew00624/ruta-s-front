import React from 'react'
import {Link} from 'react-router-dom'

const How = () => {
    return (
        <div>
 <div className="inner-background">
                        <div className="inner-title">
                            <h1>¿Cómo Funciona?</h1>
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
            <section id="how-inner" className="uk-section uk-section-muted">
            <h3>  <strong> Regístrate y sigue los pasos para disfrutar de las mejores recomendaciones <br/>de nuestros usuarios alrededor del mundo</strong></h3>
                <div className="uk-container uk-margin-large-top ">
                <div className="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid="true">
                    <div>
                    <span uk-icon="user"></span>
                        <h3>Regístrate en la plataforma</h3>
                    </div>
                    <div>
                    <span uk-icon="location"></span>
                        <h3>Elije una ciudad del mundo</h3>
                    </div>
                    <div>
                    <span uk-icon="question"></span>
                        <h3>Elije lo que quieres comer</h3>
                    </div>
                    <div>
                    <span uk-icon="happy"></span>
                        <h3>Escoge entre una lista de rutas</h3>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default How