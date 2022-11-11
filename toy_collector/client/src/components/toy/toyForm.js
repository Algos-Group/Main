import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ToyForm= ({user,setUser}) => {
    
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [errors, setErrors] = useState("")

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addToy', {
           name,
           category,
           description,
           image,
           hashtag
    }, {withCredentials:true, credentials:"include"})
    .then(res => {
        console.log(res)
        navigate("/Dashboard")
    }).catch((err)=> {
        console.log(err)
        setErrors(err.response.data.errors)
})
}

return (
        <div className='mainBody'>
            <h1>Hi {user.firstName} </h1>
            <h3> Add a Toy</h3>

            <form className="basicForm" onSubmit={onSubmitHandler}>
                <p><label>Name of Toy: 
                    <input type="text" name="name" onChange={ (e)=>setName(e.target.value)} value={name} />
                </label>
                </p>
                { errors.name ? <span className='warning'>{errors.name.message}</span> :null}
                <p>
                <label>Category: 
                <select name="category"  onChange={ (e)=>setCategory(e.target.value)} value={category}>
                        <option value=""></option>
                        <option value="Action Figure">Action Figure</option>
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
                <input type="submit" value="Add Toy"></input>
            </form>
        </div>
    )
}
export default ToyForm;
