import React from 'react'
import Rating from "./Rating"
import RestaurantMapContainer from  './RestaurantMapContainer'
import '../../../src/routes.css';

const RouteDetailDisplay = ({routes}) =>{
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
              </div>
              <section className="uk-section uk-section-muted">
              <div className="uk-container">
                <div className="uk-grid-large uk-child-width-expand@s" uk-grid="true">
                    <div className="uk-width-1-2@m about-content">
                        <h2>{routes.title}</h2>
                        <Rating 
                        />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde fuga distinctio. Blanditiis ipsum perspiciatis quisquam dolorem corrupti saepe iure eligendi cupiditate totam cumque, repellendus fuga minus laborum suscipit voluptatem.</p>
                        <buton className="uk-button uk-button-large uk-button-primary">Crear Ruta</buton>
                    </div>
                    <div className="uk-width-1-2@m uk-text-center">
                    <div className="uk-background-primary route-stops">
                        <h3>ksdhfdk</h3>
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
