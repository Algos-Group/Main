import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const DeleteWheelchairButton = (props) => {
    const { successCallback,list,setList } = props
    const {id} = useParams()
    const navigate = useNavigate();
    const deleteWheelchair = (e) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`, {withCredentials:true,credentials:'include'})
        .then (res => {
            navigate('/allToys');
            setList(list.filter(list => list._id !== id))
        })
    }
    return (
        <button className='warnButton' onClick = {deleteWheelchair}>Delete</button>
    )
}

export default DeleteWheelchairButton