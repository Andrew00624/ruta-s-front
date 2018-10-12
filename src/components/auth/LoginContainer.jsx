import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import LoginDisplay from './LoginDisplay'


const url = 'http://localhost:3000/login'

class LoginContainer extends Component {

    state = {
        auth:{},
        loading:false
    }

    login = (e) =>{
        e.preventDefault ()
        const {auth} = this.state
        axios.post (url,auth)
        .then (res=> {
            console.log (res)
            toastr.success('Estas Logueado')
            localStorage.setItem('user',JSON.stringify(res.data.user))
            localStorage.setItem('token',res.data.token)
            this.setState({loading:false})
            this.props.history.push('/profile')
        })
        .catch (e=>toastr.error ('Error'))
        this.setState({loading:false})
    }

    onChange = (e) => {
        const field = e.target.name 
        const value = e.target.value 
        const {auth} = this.state
        auth[field] = value 
        this.setState({auth})
    }

    render (){
        const {auth} = this.state
        return (
            <div>
                 <LoginDisplay
                    auth={auth}
                    onSubmit={this.login}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}


export default LoginContainer