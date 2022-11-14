import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const DeleteToyButton = (props) => {
    const {toyId} = props
    const navigate = useNavigate();
    const deleteToy = (e) => {
        axios.delete("http://localhost:8000/api/delete/"+ toyId, {withCredentials:true,credentials:'include'})
        .then (res => {
            navigate('/Dashboard');
        })
    }
    return (
        <button className='warnButton' onClick = {deleteToy}>Delete Toy</button>
    )
}

export default DeleteToyButton