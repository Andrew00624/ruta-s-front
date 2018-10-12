import React from 'react'
import {Input,Button} from 'antd'


const RouteDisplay = ({onSubmit,onChange,search,value}) =>{
    return (
        <div>
            <h2>Crear Ruta</h2>
            <form onSubmit = {onSubmit} style={{width:600,margin:'0 auto',padding:20}}>
            <p>
                   <Input 
                   name="title"
                   placeholder="Titulo Ruta"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                   <Input 
                   name="description"
                   placeholder="Descripcion"
                   type="text"
                   onChange={onChange} 
                   />
            </p> 
            <p>
            <label htmlFor="tradicional">Tradicional</label>
                   <Input 
                   name="category"
                   id="tradicional"
                   type="radio"
                   value = "Tradicional"
                   /> <br/>
                   <label htmlFor="callejera">Callejera</label>
                    <Input 
                   name="category"
                   id="callejera"
                   type="radio"
                   value = "Callejera"
                   onChange={onChange} 
                   /> <br/>
                   <label htmlFor="autor">Cocina de autor</label>
                    <Input 
                   name="category"
                   id="autor"
                   type="radio"
                   value = "Cocina de autor"
                   onChange={onChange} 
                   /> <br/>
                   <label htmlFor="economico">Economico</label>
                    <Input 
                   name="category"
                   id="economico"
                   type="radio"
                   value = "Economico"
                   onChange={onChange} 
                   /> <br/>
                   <label htmlFor="dulce">Dulce</label>
                    <Input 
                   name="category"
                   id="dulce"
                   type="radio"
                   value = "Dulce"
                   onChange={onChange} 
                   /> <br/>
                   <label htmlFor="bebidas">Bebidas</label>
                    <Input 
                   name="category"
                   id="bebidas"
                   type="radio"
                   value = "Bebidas"
                   onChange={onChange} 
                   />

            </p> 
            <p>
                   <Input 
                   name="stops"
                   placeholder="# de paradas"
                   type="number"
                   onChange={onChange} 
                   />
            </p> 
            <p>
                   <Input 
                   name="price"
                   placeholder="Precio"
                   type="number"
                   onChange={onChange} 
                   />
            </p> 

            <Button type="primary" htmlType="submit">Crear Ruta</Button>
            </form>
        </div>
    )
}

export default RouteDisplay