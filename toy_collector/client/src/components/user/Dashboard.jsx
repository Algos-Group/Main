import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import people from '../../asset/people.png'
import { Link } from 'react-router-dom'

const Dashboard = ({user}) => {
    return (
      <div className="mainBody">
              <h1>Hiiii, {user.username}</h1>
              <div className="centered">
                <table className='basicTable'>
                  <tbody>
                    <tr>
                      <td>
                        <img className="categoryImg" src={people} alt='wheelchair'></img>
                        <Link  className="buttons" to="/allToys">All Toys</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className="categoryImg" src={people} alt='wheelchair'></img>
                        <Link className="buttons" to="/allToys">Toys Available </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className="categoryImg" src={people} alt='wheelchair'></img>
                        <Link className="buttons" to="/allToys">Toys sold. </Link>               
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img className="categoryImg" src={people} alt='wheelchair'></img>
                        <Link className="buttons" to="/addToy">Add a toy. </Link>               
                      </td>
                    </tr>
                </tbody>
                </table>
              </div>
    </div>    
        
    )
  }


export default Dashboard