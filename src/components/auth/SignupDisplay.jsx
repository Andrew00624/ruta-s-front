import React from 'react'
import {Input,Button} from 'antd'


const SignupDisplay = ({onChange,onSubmit}) => {
    return (
        <div>
            <form onSubmit={onSubmit} style={{width:600,margin:'0 auto',padding:20}}>
                <h2>Sign Up</h2>
               <p>
                   <Input 
                   name="username"
                   placeholder="Tu nombre de usuario"
                   type="text"
                   onChange={onChange} 
                   />
               </p> 
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
               <p>
                   <Input 
                   name="password2"
                   placeholder="Repite tu Password"
                   type="password"
                   onChange={onChange} 
                   />
               </p> 
               <Button type="primary" htmlType="submit">Registrarse</Button>
            </form>
        </div>
    )
}


export default SignupDisplay