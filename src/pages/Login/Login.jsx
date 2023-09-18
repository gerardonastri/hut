import React, {useState} from 'react'
import './Login.css'
import whiteLogo from '../../images/logo-white.png'
import {axiosReq} from '../../utils/apiCalls'
import {useDispatch} from 'react-redux'
import {loginStart, loginSuccess, loginFailure} from '../../redux/UserSlice'
import {useNavigate} from 'react-router-dom'

const Login = ({type, setType}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try {
            const res = await axiosReq.post('/auth/login', {
                email,
                password
            })
            dispatch(loginSuccess(res.data))
            navigate('/')
        } catch (error) {
            dispatch(loginFailure())
        }
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosReq.post('/auth/register', {
                name,
                lastName,
                email,
                password
            })
            dispatch(loginSuccess(res.data))
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='login'>
        <div className="logoImg-white">
            <img src={whiteLogo} alt="" />
        </div>
        <div className="login__form">
            <h1>{type === 'login' ? "ACCEDI" : "REGISTRATI"}</h1>
            <div className="login__inputContainer">
                <input className={type === 'register' ? "registerInput show" : 'registerInput'} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                <input className={type === 'register' ? "registerInput show" : 'registerInput'}  type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}placeholder="Cognome" />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="login__form-btn">
                <button onClick={type === 'login' ? handleLogin : handleRegister}>{type === 'login' ? "Accedi" : "Registrati"}</button>
            </div>
            {type === 'login' ? (
                <p className="login__change">Non hai un account? <span onClick={() => setType("register")}>Registrati</span></p>
            ) : (
                <p className="login__change">Hai già un account? <span onClick={() => setType("login")}>Accedi</span></p>
            )}
        </div>
    </div>
  )
}

export default Login