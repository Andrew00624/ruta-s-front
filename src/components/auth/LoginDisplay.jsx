import React from 'react'
import {Link} from 'react-router-dom'

const LoginDisplay = ({onChange,onSubmit}) => {
    return (
        <div>
        <div className="home-background">
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
              <div className="hero-content-login uk-container login">
              <form onSubmit={onSubmit}>
                <h2>Iniciar Sesión</h2> 
               <p>
                   <input 
                   
                   className="uk-input "
                   name="email"
                   placeholder="Tu Email"
                   type="email"
                   onChange={onChange} 
                   
                   />
               </p> 
               <p>
                   <input 
                   className="uk-input"
                   name="password"
                   placeholder="Tu Password"
                   type="password"
                   onChange={onChange} 
                   
                   />
               </p> 
               <button className="uk-button uk-button-large uk-button-primary" type="primary" htmlType="submit">Iniciar Sesión</button>
            </form>
              </div>
            </div>
        </div>
    )
}

export default LoginDisplay