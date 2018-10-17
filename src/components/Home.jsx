import React , {Component} from 'react'
import '../../src/home.css';
import {Link} from 'react-router-dom'


class Home extends Component {
  render (){
    return (
      <div>
            <div className="home-background">
              <div className="menu uk-container">
                <div className="uk-position-relative">
                      <div className="uk-position-top">
                          <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                              <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo"/>  
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
              <div className="hero-content uk-container">
                  <h1>Los mejores lugares para comer alrededor del mundo,<br/>recomendados por nuestros usuarios</h1>
                  <h3>Ruta-s es una plataforma en la que viajeros y personas locales pueden reccomnendar rutas gastronómicas</h3>
                    <br/>
                <Link to={"/signup"} className="uk-button uk-button-large uk-button-primary" >Registrarse</Link>
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

             <section id="how" className="uk-section uk-section-primary">
                <h2>¿Cómo funciona?</h2>
                
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
            {/* <footer id="footer"className="uk-section uk-section-secondary">
            <nav class="uk-navbar-container uk-container" uk-navbar>
            <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo-footer"/>  

                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                        <li><Link to={"/login"}>Iniciar Sesion</Link></li>
                        <li><Link to={"/signup"}>Registrarse</Link></li>
                        </ul>

                    </div>

                </nav>
            </footer> */}
      </div>
    )
  }
}
  
export default Home
