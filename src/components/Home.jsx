import React , {Component} from 'react'
import '../../src/home.css';


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
                                      <li><a href="/about">Acerca de Nosotros</a></li>
                                      <li><a href="/create-route">Crear Ruta</a></li>
                                      <li><a href="/login">Login</a></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                </div>
              </div>
              <div className="hero-content uk-container">
                  <h1>Recorridos Gastronomicos</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat earum, doloribus in eos, temporibus dolorum eaque repudiandae ullam explicabo et eveniet rerum at ducimus odit, quibusdam placeat aspernatur quas excepturi.</p>
                <buton className="uk-button uk-button-large uk-button-primary">Registrarse</buton>
              </div>
            </div>

            <section id="about"className="uk-section uk-section-muted">
            <div className="uk-container">
            <div className="uk-grid uk-flex uk-flex-center">
                <div className="uk-width-1-2@m about-content">
                    <h2>Que es Ruta-S</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde fuga distinctio. Blanditiis ipsum perspiciatis quisquam dolorem corrupti saepe iure eligendi cupiditate totam cumque, repellendus fuga minus laborum suscipit voluptatem.</p>
                    <buton className="uk-button uk-button-large uk-button-primary">Registrarse</buton>
                </div>
                <div className="uk-width-1-2@m uk-text-right">
                    <img className="marker" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533427/ruta-s/_Group__copy.png" alt=""/>
                </div>
                </div>
            </div>
            </section>

             <section id="how"className="uk-section uk-section-primary">
                <h2>Como Funciona</h2>
            </section>
            <footer id="footer"className="uk-section uk-section-secondary">
            </footer>
      </div>
    )
  }
}
  
export default Home
