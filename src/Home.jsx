import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { Link , BrowserRouter as Router} from "react-router-dom";
const Home = () => {

    const [user, setUser]=useState();

    useEffect(()=>{
        axios.get(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube`)
        .then((response) => {
            console.log("res",response.data);
            setUser(response.data);
        })
    })

function deleteUser(){

}    

  return (
    <div className='container'>
        <h2 className='d-flex justify-content-center'>
        Personal Details</h2>
        
        <br/>
            <Link to="/add" className='btn btn-primary'>Add Contact</Link>
       
        <table className="table table-hover">
        <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone No</th>
      <th>Edit </th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

        
    {user.map((person)=>{
    
    return(
        <>
         
        //   <td key={person.id}></td>
         <td>{person.name}</td>
         <td>{person.email}</td>
         <td>{person.phone}</td>
         <td><button className='btn-success'>Edit</button></td>
         <td><button className='btn-danger'>Delete</button></td> 
       </>)
    })}
  
    <tr>
      <th scope="row">1</th>
      <td>Sanya</td>
      <td>san@gmail.com</td>
      <td>98765432</td>
      <td><button className='btn-success'>Edit</button></td>
      <td><button className='btn-danger' onClick={() => deleteUser}>Delete</button></td>
    </tr>
   
  </tbody>
</table>

    </div>
  )
}

export default Home