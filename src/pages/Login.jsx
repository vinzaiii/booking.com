import React from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.scss'

const Login = () => {
    const API = 'https://bob-fst-jwt.onrender.com/'
    const back = useNavigate()

    const LoginForm = (e) => {
        e.preventDefault()
        axios.post(`${API}api/sign-in`,{
            email: e.target[0].value,
            password: e.target[1].value,
        })
        .then((res) =>{
            if(res.status === 200) {
                localStorage.setItem('Acces', res.data.token)
                // router.push('./')
                back('/')
                
            }
        }).catch((err) => {
            alert(err.respponse.data.message)
        })
    }
  return (
    <>
    <Nav/>
    <div className="container">
   <div className="login">
   <form className='forml' onSubmit={LoginForm}>
        <input type="email" placeholder='email ...' required />
        <input type="password" placeholder='password ...' required />
        <button type='submit'>Login</button>
        <p>Если у вас есть аккаунта , пожалуйста <br /> нажмите на <Link to={'/register'}>REGISTER</Link>!</p>
    </form>
   </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login