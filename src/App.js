import React, { useState, useEffect } from 'react';
import axios from "axios"
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = ()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      setUsers(res.data);
      setLoading(false)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home users={users} loading={loading} />}/>
      <Route path="/users/:id" element={<UserDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
