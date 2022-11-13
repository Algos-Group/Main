import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import DeleteToyButton from "../DeleteToyButton";


const OneToy = (props) => {
  const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [submitter, setSubmitter] = useState("")
    const[errors, setErrors] = useState("")
    const [reserve,setReserve] = useState(true)
    const {id} = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([])

    const {user} = props


    
    useEffect (() => {
        axios.get(`http://localhost:8000/api/Toy/${id}` ,{withCredentials:true,credentials:'include'})
        .then((res) => {
            console.log("this is", res.data);
            setName(res.data.name)
            setPrice(res.data.price)
            setCategory(res.data.category)
            setDescription(res.data.description)
            setImage(res.data.image)
            setHashtag(res.data.hashtag)
            setReserve(res.data.reserve)
        }).catch(err=> console.log(err))
    } , [id])

  return (
    <div className="mainBody">
      <div className="displayForm">
        <Link className="buttons" to="/allToys">All Toys</Link>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
        <p>Submitted by: {submitter}</p>
        <p>Description: {description}</p>
        <p>Reserved? {reserve?'Is Reserved':'not yet'}</p>
        <img src={image} alt={name}/>
        <br />
        <Link className="buttons" to={`/reserve/${id}`}>Reserve</Link>
        <Link className="buttons" to={`/editToy/${id}`}>Edit Toy</Link>
        <DeleteToyButton list={list} setList={setList} className="warnButton" ToyId={id} />
    </div>
  </div>
  )
}

export default OneToy