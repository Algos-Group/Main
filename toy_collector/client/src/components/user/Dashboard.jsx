import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toy from '../../asset/addtoy.webp'
import sold from '../../asset/nfs.gif'
import reserve from '../../asset/clawmachine.gif'
import shelf from '../../asset/shelf.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dashboard = ({ user }) => {
  return (
    
    <div className="mainBody bg-light">
      { (user._id) ?
      <>
      <h1>Hiiii, {user.username}</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={toy} alt='wheelchair' />
          <Card.Body>
            <Link to="/addToy"><Button variant="dark">Add a Toy</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={shelf} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">All Toys</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={reserve} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">Available Toys (not done yet)</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <Card.Img className="categoryImg" src={sold} alt='wheelchair' />
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

  )
}


export default Dashboard