import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const ReserveToy = ({user}) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [submitter, setSubmitter] = useState("")
    const [reservedBy, setReservedBy] = useState("")

    const {id} = useParams();
    const navigate = useNavigate();


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
            setSubmitter(res.data.submitter)
            setReservedBy(res.data.reservedBy)
        }).catch(err=> console.log(err))
    } , [])

    const reserveSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            name, price, category, description, image, hashtag, submitter, reservedBy
        }, {withCredentials:true,credentials:'include'})
        .then(res => {
          console.log(res.data)
        navigate("/allToys")
      }).catch(err=> {
        console.log( {})
        console.log(err)
        
      })
    }
    const navBack = ()=>{
        navigate('/allToys')
    }

    return (
        <div className="bg-light m-1">
            <h1>Are you sure you want to reserve {name}?</h1>
            <br></br>
            <form onSubmit={reserveSubmit} >
            <button className="buttons" value={user._id} onClick={(e)=>setReservedBy(e.target.value)}>Yes</button>
            <button className="buttons" onClick={()=>navBack()}>No</button>
            </form>
        </div>
    )
}

export default ReserveToy