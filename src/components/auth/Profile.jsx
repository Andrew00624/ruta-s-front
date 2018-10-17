import React, {Component} from 'react'
import logo from '../../logo.svg'
import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../services/userService'
import {Link} from 'react-router-dom'


class Profile extends Component{

    state = {
        user:{},
        pics:[],
        routes:[]    
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.getPrivateInfo()
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
            this.setState({userREAL:res.data.user})
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
        const {user, userREAL} = this.state
        console.log(userREAL)
        if(userREAL === undefined) return <p>Loading ...</p>
        return(
            <div>

                <div className="inner-background">
                        <div className="inner-title">
                        <h1>{user.username}</h1>
                        </div>
                    <div className="menu uk-container">
                        <div className="uk-position-relative">
                            <div className="uk-position-top">
                            <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                            <Link to={'/'}><img src="https://res.cloudinary.com/dqdpblijd/image/upload/v1539533431/ruta-s/logo.png" alt="Logo" className="logo"/>  </Link>
                              <div className="uk-navbar-right">
                                  <ul className="uk-navbar-nav">
                                  <li><Link to={"/about"}>Acerca de Nosotros</Link></li>
                                  <li><Link to={"/how"}>Como Funciona?</Link></li>
                                      <li>{user.username}<span uk-icon="user"></span> 
                                      <div uk-dropdown="true pos:bottom-right"  >
                                            <ul className="uk-nav uk-dropdown-nav">
                                                <li><Link  to={"/profile"}>Mi perfil</Link></li>
                                                <li><Link to={"/create-route"}>Crear Ruta</Link></li>
                                                <li><Link to={"#"}>Cerrar Sesion</Link></li>
                                            </ul>
                                        </div>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                         </div>
                    </div>
                </div>
              </div>
              <section className="uk-section uk-section-muted">
              <div className="uk-container">
                <div className="uk-grid-large uk-child-width-expand@s" uk-grid="true">
                    <div className="uk-width-1-2@m about-content">
                          <img style={{borderRadius:'50%'}} src={user.photoURL || ("http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-hi.png")} width="200" alt="user"/>
                <h1>{user.username}</h1>
                <p>{user.about}</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus fugit numquam sequi exercitationem distinctio sint, autem facilis perspiciatis! Quod reprehenderit ullam laudantium dicta numquam soluta minus rerum a error accusamus.</p>
                <p>{user.email}</p>
                <input accept="image/*" onChange={this.onChangeFile} ref="input" hidden type="file" />
                <br/>
                    <Link to={"/create-route"} className="uk-button uk-button-large uk-button-primary"> Crear Ruta </Link>
                    </div>
                    <div className="uk-width-1-2@m ">
                    <div className="uk-background-primary route-stops">
                        <h3 >Lugares de ruta</h3>
                        <ul className="uk-text-left">
                        {userREAL.routes.map((r,i)=>{
                    return <div key={i}>
                    <h4> <Link to={'/route/'+ r._id}> {r.title}</Link></h4>
                    <span>{r.location}</span>
                    </div>
                })}
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Profile


