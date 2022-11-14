import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReserveToy = (props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [errors, setErrors] = useState("")

    const { reserve, setReserve } = props

    const { id } = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([])

    const { user } = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Toy/${id}`, { withCredentials: true, credentials: 'include' })
            .then((res) => {
                console.log("this is", res.data);
                setName(res.data.name)
                setPrice(res.data.price)
                setCategory(res.data.category)
                setDescription(res.data.description)
                setImage(res.data.image)
                setHashtag(res.data.hashtag)
            }).catch(err => console.log(err))
    }, [])

    const reserveSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {
            reserve
        }, { withCredentials: true, credentials: "include" })
            .then(res => {
                setReserve(true)
                console.log(reserve)
                navigate("/allToys")
            }).catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }
    const navBack = () => {
        navigate('/allToys')
    }

    return (
        <div>
            <h1>Are you sure you want to reserve {name}?</h1>
            <br></br>
            <form onSubmit={reserveSubmit} >
                <button className="buttons" onClick={(e) => setReserve(true)}>Yes</button>
            </form>
            <button className="buttons" onClick={navBack}>No</button>
        </div>
    )
}

export default ReserveToy