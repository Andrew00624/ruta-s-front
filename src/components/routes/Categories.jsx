import React, {Component} from 'react';
import '../../../src/categories.css';

 class Categories extends Component {

    state = {
        name:{},
        categories:{},
        value:""
    }

    redirect = (val) => {
       // const {value} = this.state
        localStorage.setItem('categories',JSON.stringify(val))
        this.props.history.push('/filter-routes')
      }

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
            </div>
              <div className="category-content uk-container">
                <h1>Elije Una Categoria</h1>
                <div className="categories-buttons">
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button6_gray.png" onClick={()=>this.redirect('Tradicional')} name="tradicional" value="tradicional" alt=""/>
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button6.png" onClick={()=>this.redirect('Tradicional')} alt=""/>
                        <h3>Tradicional</h3>
                    </div>
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533429/ruta-s/button5_gray.png" onClick={()=>this.redirect('Chef')} name="chef" value="chef" alt=""/>  
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button5.png" onClick={()=>this.redirect('Chef')} alt=""/>
                        <h3>Chef</h3>
                    </div >
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533429/ruta-s/button4_gray.png" onClick={()=>this.redirect('Economico')} name="economico" value="economico" alt=""/>  
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button4.png" onClick={()=>this.redirect('Economico')} alt=""/>
                        <h3>Economico</h3>
                     </div>
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533427/ruta-s/button3_gray.png" onClick={()=>this.redirect('Dulce')} name="dulce" value="dulce" alt=""/>  
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button3.png" onClick={()=>this.redirect('Dulce')} name="dulce" value="dulce" alt=""/>
                        <h3> Dulce</h3>
                      </div>
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533427/ruta-s/button2_gray.png" onClick={()=>this.redirect('Bebidas')} name="bebidas" value="bebidas" alt=""/> 
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button2.png" onClick={()=>this.redirect('Bebidas')} name="bebidas" value="bebidas" alt=""/>
                        <h3>Bebidas</h3>
                     </div>
                    <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                        <img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533427/ruta-s/button1_gray.png" onClick={()=>this.redirect('Callejera')} name="callejera" value="callejera" alt="" /> 
                        <img className="uk-transition-fade uk-position-cover" src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533430/ruta-s/button1.png" onClick={()=>this.redirect('Callejera')} name="callejera" value="callejera" alt=""/>
                        <h3>Callejera</h3>
                      </div>
                </div>
            </div>
        </div>
         )
     }
  
}

export default Categories

