import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register= ({setUser}) => {
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ password, setPassword ] = useState ("")
    const [ confirmPassword, setConfirmPassword ] = useState ("")
    const [errors,setErrors] = useState("")
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', {
            username,
            email,
            password,
            confirmPassword,
    }, {withCredentials:true, credentials:"include"})
    .then(res => {
        console.log("HErrreeererrerere")
        console.log(res)
        navigate('/Dashboard')
        setUser(res.data.user)
        // somehow after registration navBar doesnt reload. 
    }).catch((err)=> {
        console.log(err)
        setErrors(err.response.data.errors)
    })
    }

return (
        <div className="mainBody">
            <h1>User Registration</h1>
            <form className="basicForm" onSubmit={onSubmitHandler}>
                <p>
                <label>User Name: 
                    <input type="text" name="username" onChange={ (e)=>setUsername(e.target.value)} value={username} />
                </label>
                </p>
                { errors.username ? <span className='warning'>{errors.username.message}</span> :null}
                <p>
                    <label>Email:  
                        <input type="text" name="email" onChange={ (e)=>setEmail(e.target.value)} value={email} />
                    </label>
                </p>
                { errors.email ? <span className='warning'>{errors.email.message}</span> :null}
                <p>
                    <label>Password: 
                    <input type="password" onChange={ (e)=>setPassword(e.target.value)} name="password" value={password} />
                    </label>
                </p>
                    { errors.password ? <span className='warning'>{errors.password.message}</span> :null}
                <p>
                     <label>Confirm Password: 
                    <input type="password" onChange={ (e)=>setConfirmPassword(e.target.value)} name="confirmPassword" value={confirmPassword} />
                    </label>
                </p>
                    {errors.confirmPassword ? <span className="warning">{errors.confirmPassword.message}</span>: null}
                <input type="submit" value="Create"></input>
            </form>
            
        </div>
    )
}
export default Register;

