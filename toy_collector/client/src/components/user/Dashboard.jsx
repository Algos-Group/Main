import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import people from '../../asset/people.png'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toyBg from '../../asset/robots.jpeg'
const Dashboard = ({ user }) => {
  return (
    <div className='d-flex w-100 h-100 justify-content-center' style={{backgroundImage: `url(${toyBg}`}}>
    <div className="mainBody">
      { (user._id) ?
      <>
      <h1 className='text-start text-dark ms-5'>Hello, {user.username}</h1>
      <div className="d-flex flex-wrap justify-content-center mt-5">
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/addToy"><Button variant="dark">Add a Toy</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">All Toys</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">Available Toys (not done yet)</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">Reserved Toys (not done yet)</Button></Link>
          </Card.Body>
        </Card>
      </div>
      </>
      :
      <>
      </>
    }
    </div>
    </div>
  )
}


export default Dashboard