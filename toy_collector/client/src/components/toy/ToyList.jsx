import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteToyButton from '../DeleteToyButton';

const ToyList = ({ user }) => {
    const [list, setList] = useState([])
    const { id } = useParams()


    const sortToy = [...list].sort((a, b) =>
        a.name > b.name ? 1 : -1
    );


    useEffect(() => {
        axios.get('http://localhost:8000/api/allToys', { withCredentials: true, credentials: 'include' })
            .then(res => setList(res.data))
    }, [])

    const [query, setQuery] = useState("")



    return (
        <div className='mainBody'>
            <input className='m-3 mb-4' placeholder="Search Toys" onChange={e => setQuery(e.target.value)} />
            <table className='tableRow'>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <th>Price:</th>
                        <th>Category:</th>
                        <th>Action;</th>
                    </tr>
                    {
                        sortToy.filter(toy => {
                            if (query === '') {
                                return toy;
                            } else if (toy.name.toLowerCase().includes(query.toLowerCase())) {
                                return toy;
                            }
                        }).map((toy, index) => (
                                <tr className="box" key={index}>
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
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToyList