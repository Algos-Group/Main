
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Update = ({ user }) => {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  const [errors, setErrors] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`, { withCredentials: true, credentials: 'include' })
      .then(res => {
        console.log("this is the response to grab", res)
        setUsername(res.data.username)
        setPassword(res.data.password)
        setEmail(res.data.email)
        setConfirmPassword(res.data.confirmPassword)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/updateUser/${id}`, { username, email, password, confirmPassword }, { withCredentials: true, credentials: 'include' })
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
        <p style={{ color: 'red' }}>* required</p>
        <div className='form-floating'>
          {
            errors.username ? <div className='form-floating'>
              <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="floatingInputValue" className='text-danger'>* {errors.username.message}</label><br />
            </div> : <div className='form-floating'>
              <input value={username} className="form-control " id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUsername(e.target.value)} />
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
              <input value={email} className="form-control " id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
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
              <input value={password} className="form-control " id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
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
              <input value={confirmPassword} className="form-control " id="floatingInputValue" placeholder="Confirm Password" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
              <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Confirm Password</label><br />
            </div>
          }
        </div>
        <input className="clicker" type="submit" value="Create"></input>
      </form>
    </div>
  )
}

export default Update