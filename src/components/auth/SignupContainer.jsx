import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import SignupDisplay from './SignupDisplay'


class SignupContainer extends Component {

    state = {
        signup:{username:'Andrew'},
        loading:false
    }

onChange = (e) =>{
    const field = e.target.name 
    const value = e.target.value 
    const {signup} = this.state
    signup[field] = value 
    this.setState({signup})
}

createUser = (e) =>{
    e.preventDefault()
    const {signup} = this.state
    if (signup.password !== signup.password2){
        return toastr.error ('Password no coincide')
    }
    axios.post('http://localhost:3000/signup',signup)
    .then (user=>{
        console.log (user)
        toastr.success ('Usuario Creado')
    })
    .catch(e=>toastr.error('Error'))
}

    render (){
        const {signup} = this.state
        return (
            <div>
                 <SignupDisplay
                    signup={signup}
                    onSubmit={this.createUser}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}


export default SignupContainer