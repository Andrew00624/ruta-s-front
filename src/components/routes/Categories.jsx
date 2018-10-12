import React, {Component} from 'react'

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
                <h1>Que quieres comer?</h1>
                <div className="categories-buttons">
                    <div><button onClick={()=>this.redirect('Tradicional')} name="tradicional" value="tradicional"> Tradicional </button></div>
                    <div><button onClick={()=>this.redirect('Chef')} name="chef" value="chef"> Chef  </button>  </div>
                    <div><button onClick={()=>this.redirect('Economico')} name="economico" value="economico">  Economico  </button>  </div>
                    <div><button onClick={()=>this.redirect('Dulce')} name="dulce" value="dulce">   Dulce </button>  </div>
                    <div><button onClick={()=>this.redirect('Bebidas')} name="bebidas" value="bebidas">   Bebidas </button>  </div>
                    <div><button onClick={()=>this.redirect('Callejera')} name="callejera" value="callejera">  Callejera  </button>  </div>
                </div>
             </div>
         )
     }
  
}

export default Categories

