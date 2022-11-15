import React, {useState} from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import NavBar from './components/site/NavBar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Dashboard from './components/user/Dashboard';
import Update from './components/user/Update';
import ToyList from './components/toy/ToyList'
import OneToy from './components/toy/OneToy';
import EditToy from './components/toy/EditToy';
import ToyForm from './components/toy/ToyForm'
import ReserveToy from './components/toy/ReserveToy';



function App() {

  const [user, setUser] = useState({})

  const [reserve,setReserve] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        
        <Route path = "/"  element={<Login setUser={setUser}/>}></Route>
        <Route path = "/login"  element={<Login setUser={setUser}/>}></Route>


        <Route path = "/userRegister"  element={<Register setUser={setUser}/>}></Route>
        <Route path = "/Dashboard"  element={<Dashboard user={user}/>}></Route>
        <Route path = "/updateUser/:id"  element={<Update user={user} setUser={setUser}/>}></Route>


        <Route path = "/addToy"   element={<ToyForm reserve={reserve} setReserve={setReserve} user={user}/>}></Route>
        <Route path = "/allToys"   element={<ToyList user={user}/>}></Route>
        <Route path = "/Toy/:id"  element={<OneToy reserve={reserve} setReserve={setReserve} user={user}/>}></Route>
        <Route path = "/editToy/:id"   element={<EditToy user={user}/>}></Route>
        <Route path = "/reserve/:id"   element={<ReserveToy reserve={reserve} setReserve={setReserve} user={user}/>}></Route>

        
        </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;