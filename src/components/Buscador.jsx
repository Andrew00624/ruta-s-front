import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import '../../src/buscador.css';
import {Link} from 'react-router-dom'


const API_KEY = "AIzaSyB47Cyf6xOIxgFWi8-Y67geGWL6IpkjiDI"

class GoogleSuggest extends React.Component {
  state = {
    search: "",
    value: "",
    location:{},
    category:{},
    user:{}
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
}

  handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({search: "", value: suggest.formatted_address})
  }

  redirect = () => {
    const {value} = this.state
    localStorage.setItem('location',JSON.stringify(value))
    this.props.history.push('/categories')
  }


  render() {
    const {search, value,user} = this.state
    return (
   
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={googleMaps =>
          googleMaps && (
            <div className="buscador">
             <div className="home-background">
              <div className="menu uk-container">
                <div className="uk-position-relative">
                      <div className="uk-position-top">
                          <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                              <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo"/>  
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
            <div className="buscador-content uk-container">
            <h1 >En que ciudad quieres comer hoy?</h1>
            <br/>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
              <form className="uk-search uk-search-large">
              
                <input
                className="uk-search-input"
                  type="text"
                  value={value}
                  placeholder="Buscar..."
                  onChange={this.handleInputChange.bind(this)}
                />

                < input
                className="uk-button uk-button-primary uk-button-large uk-margin-top"
                type="submit"
                value="Buscar"
                onClick={this.redirect}
                />
              </form>
              </ReactGooglePlacesSuggest>
              </div>

          
            </div>
          )
        }
      />
      
    )
  }
}

GoogleSuggest.propTypes = {
  googleMaps: PropTypes.object,
}

export default GoogleSuggest