import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Login = ({ setUser, user }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false) // added for validations below errors.email didnt work

    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email,
            password,
        }, { withCredentials: true, credentials: "include" })
            .then((res) => {
                console.log("logged in success")
                console.log(res.data.user)
                setUser(res.data.user)
                navigate('/Dashboard')
            }).catch((err) => {
                console.log(err)
                setEmailErr("Invalid Email")
                setPasswordErr("Incorrect Password")
                setErrors(err.response.data.errors)
            })
    }



    return (
        <div className="mainBody bg-light">
                {/* some below classnames are from bootstrap */}
                <br />
            <div className='m-3'>
                <p className="details">If you have not registered, please register: <a href="/userRegister">here</a> </p>
            </div>
            <h3 className='display-5'>Welcome back! Please login:</h3>
            <form className="basicForm" onSubmit={onSubmitHandler}>
                <p style={{color:'red'}}>* required</p>
                {
                    emailErr ?
                        <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-danger'>* {emailErr}</label><br />
                        </div>
                        :
                        <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Email</label><br />
                        </div>
                }
                {
                    passwordErr ?
                        <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue2" className='text-danger'>* {passwordErr}</label><br />
                        </div>
                        :
                        <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue2" className='text-dark'><span style={{ color: 'red' }}>*</span> Password</label><br />
                        </div>
                }
                <input className="clicker" type="submit" value="Log in"></input>
            </form>
        </div>
    )
}
export default Login;

