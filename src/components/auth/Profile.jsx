import React, {Component} from 'react'
import logo from '../../logo.svg'
import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../services/userService'


class Profile extends Component{

    state = {
        user:{},
        pics:[]
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }

    getPrivateInfo = () => {
        axios.get('http://localhost:3000/my-profile', {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>toastr.error("algo falló", e.message))
    }

    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
        .then(pic=>console.log(pic))
        .catch(e=>toastr.error('Error'))
    }

    render(){
        const {user} = this.state
        return(
            <div>
                <img style={{borderRadius:'50%'}} src={user.photoURL || logo} width="200" alt="user"/>
                <h1>{user.username}</h1>
                <p>{user.about}</p>
                <p>{user.email}</p>
                <input accept="image/*" onChange={this.onChangeFile} ref="input" hidden type="file" />
                <br/>
                <img style={{cursor:"pointer"}} width="100" onClick={this.uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" />

            </div>
        )
    }
}

export default Profile


