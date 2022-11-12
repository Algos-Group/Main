import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteToyButton from '../DeleteToyButton';

const ToyList = ({user}) => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allToys', {withCredentials:true,credentials:'include'})
        .then(res => setList(res.data))
    } , [])

  return (
    <div className='mainBody'>
        <table className='tableRow'>
            <tbody>
            <tr>
                            <th>Name:</th>
                            <th>Price:</th>
                            <th>Category:</th>
                            <th>Action;</th>                        
            </tr> 
        
                {list.map((toy,index) => {
                    return(
                    <tr key={index}>
                            <td>
                                <Link className="" to={`/toy/${toy._id}`}> {toy.name}'s page</Link>                                
                            </td>
                            <td>
                                <p>$ {toy.price}</p>                             
                            </td>
                            <td>
                                <p>{toy.category}</p>                             
                            </td>
                            <td>
                                <Link className="buttons" to={`/editToy/${toy._id}`}>Edit Toy</Link>
                                <DeleteToyButton toyId={toy._id} />
                            </td>
                    </tr>   )
                })}
        
            </tbody>
            </table>
    </div>
  )
}

export default ToyList