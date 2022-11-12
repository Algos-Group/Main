
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

const Update = ({user}) => {
    const {id} = useParams();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState ("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`, {withCredentials:true})
        .then ( res => {
          console.log("this is the response to grab", res)
          setUsername(res.data.username)
          setPassword(res.data.password)
          setEmail(res.data.email)
          console.log(res)
        })
        .catch((err) => console.log(err))
    }, [])

    const submitHandler = (e) => {
      e.preventDefault()
      axios.put(`http://localhost:8000/api/updateUser/${id}`,{username, email, password, confirmPassword}, {withCredentials:true,credentials:'include'})
      .then(res => {
        console.log(res);
        console.log(res.data)
        navigate('/Dashboard')
      })
      .catch(err => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
    }

  return (
    <div>
      <h1>Update your profile, {user.username}</h1>
      <form className="basicForm" onSubmit={submitHandler}>
                <p><label>User Name: 
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
                <p><label>Password: 
                <input type="password" name="password" onChange={ (e)=>setPassword(e.target.value)} value={password} />

                </label>
                </p>
                { errors.password ? <span className='warning'>{errors.password.message}</span> :null}
                <p><label>Confirm Password: 
                <input type="password" name="confirmPassword" onChange={ (e)=>setConfirmPassword(e.target.value)} value={confirmPassword} />

                </label>
                </p>
                { errors.confirmPassword ? <span className='warning'>{errors.confirmPassword.message}</span> :null}
                <p>
                <input type="submit" value="Edit User"></input>
                </p>
            </form>
  </div>
  )
}

export default Update