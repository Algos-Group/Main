import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditToy= (props) => {
  const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const[errors, setErrors] = useState("")


  const navigate = useNavigate();
  
  const {id} = useParams()

useEffect(() => {
  axios.get(`http://localhost:8000/api/toy/${id}`, {withCredentials:true,credentials:'include'})
  .then((res) => {
    setName(res.data.name)
    setPrice(res.data.price)
    setCategory(res.data.category)
    setDescription(res.data.description)
    setImage(res.data.image)
    setHashtag(res.data.hashtag)
  }).catch((err) => {
    console.log(err)
  })
} ,[])

const submitHandler = (e) => {
  e.preventDefault()
  axios.put(`http://localhost:8000/api/update/${id}`, {
   name, price, category, description, image, hashtag
  }, {withCredentials:true,credentials:'include'})
.then(res => {
  console.log(res)
  console.log(res.data)
  navigate("/allToys")
}).catch(err=> {
  console.log(err)
  setErrors(err.response.data.errors)
})

}
return (
      <div className="mainBody">
        <Link className="buttons" to="/allToys">All Toys</Link>
        <h1> Update Toy</h1>
        <form className="basicForm" onSubmit={submitHandler}>
                <p><label>Name: 
                    <input type="text" name="name" onChange={ (e)=>setName(e.target.value)} value={name} />
                </label>
                </p>
                { errors.name ? <span className='warning'>{errors.name.message}</span> :null}
                <p><label>Price: 
                <input type="number" name="price" onChange={ (e)=>setPrice(e.target.value)} value={price} />

                </label>
                </p>
                { errors.price ? <span className='warning'>{errors.price.message}</span> :null}

                <p>
                <label>Category: 
                <select name="category"  onChange={ (e)=>setCategory(e.target.value)} value={category}>
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
                </label>
                </p>
                { errors.category ? <span className='warning'>{errors.category.message}</span> :null}
                <p>
                <label>Description:  
                <textarea name="description" onChange={ (e)=>setDescription(e.target.value)} value={description} />
                </label>
                </p>
                { errors.description ? <span className='warning'>{errors.description.message}</span> :null}
                <p>
                <label>Image: 
                <input type="text" name="image" onChange={ (e)=>setImage(e.target.value)} value={image} />
                </label>
                </p>
                <p>
                <label>Hashtag: 
                <input type="text" name="hashtag" onChange={ (e)=>setHashtag(e.target.value)} value={hashtag} />
                </label>
                </p>
                <input type="submit" value="Update toy"></input>
            </form>
      </div>
  )
}
export default EditToy;

