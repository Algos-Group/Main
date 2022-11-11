import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register= ({setUser}) => {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState ("")
    const [ password, setPassword ] = useState ("")
    const [ confirmPassword, setConfirmPassword ] = useState ("")
    const [errors,setErrors] = useState("")
    const navigate = useNavigate();


    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/registerUser', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
    }, {withCredentials:true, credentials:"include"})
    .then(res => {
        console.log("HErrreeererrerere")
        console.log(res)
        navigate('/Dashboard')
        setUser(res.response.data)
        // somehow after registration navBar doesnt reload. 
        window.location.reload()
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
                <label>First Name: 
                    <input type="text" name="firstName" onChange={ (e)=>setFirstName(e.target.value)} value={firstName} />
                </label>
                </p>
                { errors.firstName ? <span className='warning'>{errors.firstName.message}</span> :null}
                <p>
                    <label>Last Name: 
                    <input type="text" name="lastName" onChange={ (e)=>setLastName(e.target.value)} value={lastName} />
                    </label>
                </p>
                { errors.lastName ? <span className='warning'>{errors.lastName.message}</span> :null}
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

