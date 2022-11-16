import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Lego from '../../asset/lego.jpeg'


const EditToy = ({ user }) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [hashtag, setHashtag] = useState("")
  const [reservedBy, setReservedBy] = useState("")
  const [submitter, setSubmitter] = useState("")


  const [errors, setErrors] = useState("")


  const navigate = useNavigate();

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/toy/${id}`, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        setName(res.data.name)
        setPrice(res.data.price)
        setCategory(res.data.category)
        setDescription(res.data.description)
        setImage(res.data.image)
        setHashtag(res.data.hashtag)
        setSubmitter(res.data.submitter)
        setReservedBy(res.data.reservedBy)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/update/${id}`, {
      name, price, category, description, image, hashtag, submitter, reservedBy
    }, { withCredentials: true, credentials: 'include' })
      .then(res => {
        console.log(res)
        console.log(res.data)
        navigate("/allToys")
      }).catch(err => {
        console.log(err)
        setErrors(err.response.data.errors)
      })

  }
  return (
    <div className='h-auto' style={{ backgroundImage: `url(${Lego}`, width: 'auto' }}>
      <div className="mainBody m-1">
        {(user._id) ?
          <>
            <Link className="buttons" to="/allToys">All Toys</Link>
            <h1 className='text-light'> Update Toy</h1>
            <form className="basicForm" onSubmit={submitHandler}>
              <p style={{color:'red'}}>* Can only be updated one time!</p>
              <div className='form-floating w-75'>
                {
                  errors.name ? <div className='form-floating'>
                    <input className="form-control is-invalid" id="floatingInputValue" type="text" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-danger'>* {errors.name.message}</label><br />
                  </div> : <div className='form-floating'>
                    <input value={name} name="name" className="form-control " id="floatingInputValue" type="text" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Name of Toy</label><br />
                  </div>
                }
              </div>
              {/*  */}
              <input type="hidden" onSubmit={(e) => setSubmitter(e.target.value)} value={user._id}></input>
              <input type="hidden" onSubmit={(e) => setReservedBy(e.target.value)} value=""></input>
              {/* here  is the hidden user._id field */}
              <div className='form-floating w-75'>
                {
                  errors.price ? <div className='form-floating'>
                    <input className="form-control is-invalid" id="floatingInputValue" type="number" onChange={(e) => setPrice(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-danger'>* {errors.price.message}</label><br />
                  </div> : <div className='form-floating'>
                    <input value={price} name="price" className="form-control " id="floatingInputValue" type="number" onChange={(e) => setPrice(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span>$ Price</label><br />
                  </div>
                }
              </div>
              <div className='d-flex w-75'>
                <div className='form-floating mb-3 col-12 ml-5 text-start'>
                  <div style={{ color: 'red' }}>
                    {
                      errors.category && <p>{errors.category.message}</p>
                    }
                  </div>
                  <div className='form-floating'>
                    <select value={category} name='category' className='form-select' id='floatingSelect' onChange={(e) => setCategory(e.target.value)}>
                      <option value=""></option>
                      <option value="Action Figures">Action Figure</option>
                      <option value="Animals">Animals</option>
                      <option value="Cars">Cars</option>
                      <option value="Construction Toys">Construction Toys</option>
                      <option value="Creative Toys">Creative Toys</option>
                      <option value="Dolls">Dolls</option>
                      <option value="Educational Toys">Educational Toys</option>
                      <option value="Electronic Toys">Electronic Toys</option>
                      <option value="Puzzle">Puzzle</option>
                      <option value="Games">Games</option>
                    </select>
                    <label className='form-label' htmlFor='floatingSelect'> <span style={{ color: 'red' }}>*</span>Category</label>
                  </div>
                </div>
              </div>
              <div className='form-floating w-75'>
                {
                  errors.description ? <div className='form-floating'>
                    <input className="form-control is-invalid" id="floatingInputValue" type="text" onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-danger'>* {errors.description.message}</label><br />
                  </div> : <div className='form-floating'>
                    <input value={description} className="form-control" name="description" id="floatingInputValue" type={"text"} onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-dark'><span style={{ color: 'red' }}>*</span> Description</label><br />
                  </div>
                }
              </div>
              <div className='form-floating w-75'>
                {
                  errors.image ? <div className='form-floating'>
                    <input className="form-control is-invalid" id="floatingInputValue" type="text" onChange={(e) => setImage(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-danger'>* {errors.image.message}</label><br />
                  </div> : <div className='form-floating'>
                    <input value={image} className="form-control " name="image" id="floatingInputValue" type={"text"} onChange={(e) => setImage(e.target.value)} />
                    <label htmlFor="floatingInputValue" className='text-dark'> Image</label><br />
                  </div>
                }
              </div>
              <div className='form-floating w-75'>
                <div className='form-floating'>
                  <input value={hashtag} className="form-control" name="hashtag" id="floatingInputValue" type={"text"} onChange={(e) => setHashtag(e.target.value)} />
                  <label htmlFor="floatingInputValue" className='text-dark'>Hashtag</label><br />
                </div>
              </div>
              <input className='btn btn-dark' type="submit" value="Update toy"></input>
            </form>
          </>
          :
          <>
          </>
        }
      </div>
    </div>
  )
}
export default EditToy;

