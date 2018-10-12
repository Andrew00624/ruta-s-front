import React from 'react'
import {Input,Button} from 'antd'

const LoginDisplay = ({onChange,onSubmit}) => {
    return (
        <div>
            <form onSubmit={onSubmit} style={{width:600,margin:'0 auto',padding:20}}>
                <h2>Login</h2> 
               <p>
                   <Input 
                   name="email"
                   placeholder="Tu Email"
                   type="email"
                   onChange={onChange} 
                   
                   />
               </p> 
               <p>
                   <Input 
                   name="password"
                   placeholder="Tu Password"
                   type="password"
                   onChange={onChange} 
                   
                   />
               </p> 
               <Button type="primary" htmlType="submit">Iniciar Sesion</Button>
            </form>
        </div>
    )
}

export default LoginDisplay