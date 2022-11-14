import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import people from '../../asset/people.png'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dashboard = ({ user }) => {
  return (
    <div className="mainBody bg-light">
      <h1>Hiiii, {user.username}</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/addToy"><Button variant="dark">Add a Toy</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">All Toys</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">Available Toys (not done yet)</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={people} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">Reserved Toys (not done yet)</Button></Link>
          </Card.Body>
        </Card>
      </div>
    </div>

  )
}


export default Dashboard