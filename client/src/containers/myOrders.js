import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import axios from 'axios';
const MyOrders = (props) => {

const deleteOrder=(id)=>{
  console.log(id)
  const result = axios.delete(`http://localhost:5000/deleteOrder/${id}`)
  if(result){
    props.fetchOrders()
  }
}

  return (
    
   <div>
     <table class="table-container">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Product Name</th>
        <th>Address</th>
        <th>Ordered Date</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
            <tr>
              <td>{props.item.fullName}</td>
              <td>{props.item.productName}</td>
              <td>{props.item.address}</td>
              <td>{props.item.date}</td>
              <td>
                <Button onClick={()=>deleteOrder(props.item._id)}>Delete</Button>
                <Link to={`/updateOrders/${props.item._id}`}>Update</Link></td>
            </tr>
        
          
    </tbody>
  </table>
   </div>
   
  );
};

export default MyOrders;

