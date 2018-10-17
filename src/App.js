import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Routes/>


        <footer id="footer"className="uk-section uk-section-secondary">
            <nav class="uk-navbar-container uk-container" uk-navbar>
            <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo-footer"/>  

                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                        <li><Link to={"/login"}>Iniciar Sesion</Link></li>
                        <li><Link to={"/signup"}>Registrarse</Link></li>
                        </ul>

                    </div>

                </nav>
            </footer>
      </div>
    );
  }
}

export default App;
