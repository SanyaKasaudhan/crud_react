import React from 'react'

import { Link , BrowserRouter as Router} from "react-router-dom";
const Home = () => {

    

  return (
    <div className='container'>
        <h2 className='d-flex justify-content-center'>
        Personal Details</h2>
        
        <br/>
        {/* <Router>
            <Link to="/add" className='btn btn-primary'>Add Contact</Link>
        </Router> */}
        <table class="table table-hover">
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
    <tr>
      <th scope="row">1</th>
      <td>Sanya</td>
      <td>san@gmail.com</td>
      <td>98765432</td>
      <td><button className='btn-success'>Edit</button></td>
      <td><button className='btn-danger'>Delete</button></td>
    </tr>

    <tr>
      <th scope="row">1</th>
      <td>Sanya</td>
      <td>san@gmail.com</td>
      <td>98765432</td>
      <td><button className='btn-success'>Edit</button></td>
      <td><button className='btn-danger'>Delete</button></td>
    </tr>
   
  </tbody>
</table>

    </div>
  )
}

export default Home