import React from 'react'
import Autocomplete from 'react-google-autocomplete';
import {Link} from 'react-router-dom'


const RouteDisplay = ({saveLocation, onSubmit,onChange, handlePlace}) =>{

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
                                      <li><Link to={"/login"}>Iniciar Sesion</Link></li>
                                      <li><Link to={"/signup"}>Registrarse</Link></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                </div>
              </div>
              <div className="hero-content-ruta uk-container ruta">
              <h2>Crear Ruta</h2>
            <form onSubmit = {onSubmit} style={{width:1000,margin:'0 auto',padding:20}}>

<div className="uk-width-1-2@s form">

            <p>
                   <input 
                   className="uk-input"
                   name="title"
                   placeholder="Titulo Ruta"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                   <input 
                   className="uk-input"
                   name="description"
                   placeholder="Descripcion"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                <h3>Categoria</h3>



            <label htmlFor="Tradicional">Tradicional
                   <input 
                   name="category"
                   className="uk-radio"
                   id="Tradicional"
                   type="radio"
                   value = "Tradicional"
                   onChange={onChange} 
                   /> </label>
                   <label htmlFor="Callejera">Callejera
                    <input 
                   name="category"
                   className="uk-radio"
                   id="Callejera"
                   type="radio"
                   value = "Callejera"
                   onChange={onChange} 
                   /> </label>
                   <label htmlFor="Autor">Chef
                    <input 
                   name="category"
                   className="uk-radio"
                   id="Autor"
                   type="radio"
                   value = "Autor"
                   onChange={onChange} 
                   /> </label>
                   <label htmlFor="Economico">Economico
                    <input 
                   name="category"
                   className="uk-radio"
                   id="Economico"
                   type="radio"
                   value = "Economico"
                   onChange={onChange} 
                   /> </label>
                   <label htmlFor="Dulce">Dulce
                    <input 
                   name="category"
                   className="uk-radio"
                   id="Dulce"
                   type="radio"
                   value = "Dulce"
                   onChange={onChange} 
                   /> </label>
                   <label htmlFor="Bebidas">Bebidas
                    <input 
                   name="category"
                   className="uk-radio"
                   id="Bebidas"
                   type="radio"
                   value = "Bebidas"
                   onChange={onChange} 
                   /> </label>

            </p> 
            <p>
                   <input 
                   className="uk-input"
                   name="stopsQuantity"
                   placeholder="Numero de paradas"
                   type="number"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                   <input 
                   className="uk-input"
                   name="price"
                   placeholder="Precio"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
            <Autocomplete
              name="location"
                        style={{width: '100%'}}
                        className="uk-input"
                        onChange={onChange} 
                        onPlaceSelected={(place) => {
                        localStorage.setItem('city', place.formatted_address)
                        console.log(place);
                        }}
                        types={['(cities)']}
                        
            />  
            </p> 

</div>

                <div className="uk-width-1-2@s form">
                <p>
            <Autocomplete
                        name="stop1"
                        className="uk-input"
                        placeholder="Lugar #1"
                        
                        onPlaceSelected={handlePlace}
                        types={['establishment']}  
            />  
            </p> 
                
                 <p>
            <Autocomplete
                        name="stop2"
                        className="uk-input"
                        placeholder="Lugar #2"
                        
                        onPlaceSelected={handlePlace}
                        types={['establishment']}  
            />  
            </p> 
               
                    
            <p>
            <Autocomplete
                        name="stop3"
                        className="uk-input"
                        placeholder="Lugar #3"
                        
                        onPlaceSelected={handlePlace}
                        types={['establishment']}  
            />  
            </p> 
                
                 <p>
            <Autocomplete
                        name="stop4"
                        className="uk-input"
                        placeholder="Lugar #4"
                        
                        onPlaceSelected={handlePlace}
                        types={['establishment']}  
            />  
            </p> 
    
                <p>
            <Autocomplete
                        name="stop5"
                        className="uk-input"
                        placeholder="Lugar #5"
                        
                        onPlaceSelected={handlePlace}
                        types={['establishment']}  
            />  
            </p> 
                </div>

            <button className="uk-button uk-button-large uk-button-primary" type="primary" htmlType="submit">Crear Ruta</button>
            </form>

              </div>
            </div>
           
        </div>
    )
}

export default RouteDisplay




