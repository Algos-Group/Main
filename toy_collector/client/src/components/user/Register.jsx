import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = ({ setUser }) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', {
            username,
            email,
            password,
            confirmPassword,
        })
            .then((res) => {
                console.log("HErrreeererrerere",res.data.user)
                setUser(res.data.user)
                navigate('/Dashboard')
            }).catch((err) => {
                console.log("Oh OH!!!!!",err)
                setErrors(err.response.data.errors)
            },{withCredentials:true, credentials:"include"})
    }

    return (
        <div className="mainBody bg-light m-1">
            <h1>User Registration</h1>
            <form className="basicForm" onSubmit={onSubmitHandler}>
                {/* below classnames are from bootstrap */}
                <p style={{color:'red'}}>* required</p>
                <div className='form-floating'>
                    {
                        errors.username ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-danger'>* {errors.username.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> User Name</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating'>
                    {
                        errors.email ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-danger'>* {errors.email.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Email</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating'>
                    {
                        errors.password ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-danger'>* {errors.password.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Password</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating'>
                    {
                        errors.confirmPassword ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Confirm Password" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-danger'>* {errors.confirmPassword.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Confirm Password" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Confirm Password</label><br />
                        </div>
                    }
                </div>
                <input className="clicker" type="submit" value="Create"></input>
            </form>
        </div>
    )
}
export default Register;

