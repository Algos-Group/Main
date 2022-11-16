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

    const [query, setQuery] = useState("") //for search bar



    return (
        <div className='mainBody bg-light m-1'>
            <input className='m-3 mb-4' placeholder="Search Toys" onChange={e => setQuery(e.target.value)} />
            <table className='tableRow'>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <th>Price:</th>
                        <th>Category:</th>
                        <th>Edit / Delete:</th>
                        <th>Reserved?:</th>
                    </tr>
                    { (user._id) ? 
                    <>
                    {
                        sortToy.filter(toy => {
                            if (query === '') { //filter and below for search bar
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
                                    { (user._id === toy.submitter) ?
                                      <>
                                    <Link className="buttons" to={`/editToy/${toy._id}`}>Edit Toy</Link>
                                      <DeleteToyButton toyId={toy._id}/>
                                      </>
                                      :<>
                                      </>
                                     }
                                </td>
                                {toy.reservedBy ?
                                <>
                                <p style={{color:'red'}}>Yes</p>
                                </>
                                :
                                <>
                                <p>NOPE!</p>

                                </>
                                }
                                <td>

                                </td>
                            </tr>
                        ))}
                        </>
                        :
                        <></>
                                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToyList