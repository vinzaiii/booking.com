import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { FaRegEye } from "react-icons/fa";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./register.scss"

const Register = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const API = 'https://bob-fst-jwt.onrender.com/'
    
    const RegisterForm = (e) => {
        e.preventDefault()
        axios.post(`${API}api/sign-up`,{
            email: e.target[0].value,
            username: e.target[1].value,
            password: e.target[2].value,
        }).then((res) => {
            if(res.status === 201) {
                navigate('/')
            }
        }).catch((err) => {
            alert(err.res.data.message)
        })
    }

  return (
    <>
    <Nav/>
    <div className="container">
    <div className="register">
    <form className='formr' onSubmit={RegisterForm}>
            <input type="email" placeholder='email ...' required />
            <input type="text" placeholder='name ...' required />
            <div className="password">
            <input type={show ? 'text' : 'password'} placeholder='password ...' required />
            <button type='button' onClick={() => setShow(!show)}><FaRegEye /></button>
            </div>
            <button className='btnr' type='submit'>Регистрация</button>
            <p>Если у вас нету аккаунта , пожалуйста <br /> нажмите на <Link to={'/login'}>LOGIN</Link>!</p>
        </form>
       
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register