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
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg w-auto m-3" src={toy} alt='wheelchair' />
          <Card.Body>
            <Link to="/addToy"><Button variant="dark">Add a Toy</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg w-auto m-2" src={shelf} alt='wheelchair' />
          <Card.Body>
            <Link to="/allToys"><Button variant="dark">All Toys</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg w-auto" src={reserve} alt='wheelchair' />
          <Card.Body>
            <Link to="/availableToys"><Button variant="dark">Available Toys</Button></Link>
          </Card.Body>
        </Card>
        <Card className='m-2 d-flex align-self' style={{ width: '12rem' }}>
          <Card.Img className="categoryImg w-auto m-4" src={sold} alt='wheelchair' />
          <Card.Body>
            <Link to="/reservedToys"><Button className='mt-5' variant="dark">Reserved Toys</Button></Link>
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