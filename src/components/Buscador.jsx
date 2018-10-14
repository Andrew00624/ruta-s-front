import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import '../../src/buscador.css';


const API_KEY = "AIzaSyB47Cyf6xOIxgFWi8-Y67geGWL6IpkjiDI"

class GoogleSuggest extends React.Component {
  state = {
    search: "",
    value: "",
    location:{},
    category:{}
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
    const {search, value} = this.state
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
            <div className="buscador-content uk-container">
            <h1 className="uk-heading-primary">En que ciudad quieres comer hoy?</h1>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
              <form className="uk-search uk-search-large">
              <span uk-search-icon="true"></span>
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