import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import DeleteToyButton from "../DeleteToyButton";


const OneToy = ({user}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [year, setYear] = useState("")
  const [submitter, setSubmitter] = useState("")
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState("")
  const [rating, setRating] = useState("")
  const [available, setAvailable] = useState("")
    const {id} = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([])


    
    useEffect (() => {
        axios.get(`http://localhost:8000/api/Toy/${id}` ,{withCredentials:true,credentials:'include'})
        .then((res) => {
            console.log("this is", res.data);
            setName(res.data.name)
            setYear(res.data.year)
            setPrice(res.data.price)
            setSubmitter(res.data.submitter)
            setRating(res.data.rating)
            setImage(res.data.image)
        }).catch(err=> console.log(err))
    } , [id])

    useEffect(() => {
      axios.get('http://localhost:8000/api/allWheelchairs', {withCredentials:true,credentials:'include'})     
  .then(res => {
      setList(res.data)
  })
  } , [])

  const submitToyHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/updateToy/${id}`, {
      name, price, year, submitter, image, rating, available
    }, {withCredentials:true,credentials:'include'})
    .then(res => {
      console.log(res.data)
      console.log("helllooooooo")
    navigate("/allToys")
  }).catch(err=> {
    console.log( {})
    console.log(err)
    
  })
  }

  return (
    <div className="mainBody">
      <div className="displayForm">
        <Link className="buttons" to="/allToys">All Toys</Link>
        <h2>{name}</h2>
        <h3>Year Manufactured: {year}</h3>
        <h4>Price: ${price}</h4>
        <p>Submitted by: {submitter}</p>
        <p>Rating: {rating}</p>
        <p>Submitter: {submitter}</p>
        <p>Sold?: {available}</p>

        { {available} ?
        <>
        </>
        :
        
        <>        
        <p>Toy sold to: {}</p>
        </>
        }
  
        <Link className="buttons" to={`/editToy/${id}`}>Edit Toy</Link>
        <DeleteToyButton className="warnButton" ToyId={id} />
    </div>
  </div>
  )
}

export default OneToy