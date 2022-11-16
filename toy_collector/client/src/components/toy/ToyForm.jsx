import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Lego from '../../asset/lego_city.jpeg'

const ToyForm = ({ user, setUser}) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [submitter, setSubmitter] = useState("")
    const [reservedBy, setReservedBy] = useState("")
    const [errors, setErrors] = useState("")

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(user._id)
        axios.post('http://localhost:8000/api/addToy', {
            name,
            price,
            category,
            description,
            image,
            hashtag,
            submitter: user._id,
            reservedBy
        }, { withCredentials: true, credentials: "include" })
            .then(res => {
                console.log(res)
                navigate("/Dashboard")
            }).catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className='h-auto' style={{ backgroundImage: `url(${Lego}`, width: 'auto' }}>
            <div className='mainBody m-1'>
                <h1 className='text-light'>Hi {user.username} </h1>
                <h3 className='text-light'> Add a Toy</h3>
                <form className="basicForm" onSubmit={onSubmitHandler}>
                    <div className='form-floating w-75'>
                        {
                            errors.name ? <div className='form-floating'>
                                <input className="form-control is-invalid" id="floatingInputValue" type="text" onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='text-danger'>* {errors.name.message}</label><br />
                            </div> : <div className='form-floating'>
                                <input name="name" className="form-control " id="floatingInputValue" type="text" onChange={(e) => setName(e.target.value)} />
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
                                <input name="price" className="form-control " id="floatingInputValue" type="number" onChange={(e) => setPrice(e.target.value)} />
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
                                <select name='category' className='form-select' id='floatingSelect' onChange={(e) => setCategory(e.target.value)}>
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
                                <input className="form-control" name="description" id="floatingInputValue" type={"text"} onChange={(e) => setDescription(e.target.value)} />
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
                                <input className="form-control " name="image" id="floatingInputValue" type={"text"} onChange={(e) => setImage(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='text-dark'> Image</label><br />
                            </div>
                        }
                    </div>
                    <div className='form-floating w-75'>
                        <div className='form-floating'>
                            <input className="form-control" name="hashtag" id="floatingInputValue" type={"text"} onChange={(e) => setHashtag(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-dark'>Hashtag</label><br />
                        </div>
                    </div>
                    <input className='btn btn-dark' type="submit" value="Add Toy"></input>
                </form>
            </div>
        </div>
    )
}
export default ToyForm;
