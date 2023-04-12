import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
const MyOrders = (props) => {
  console.log(props.item); // add this line

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
              <td><Link to={`/updateOrders/${props.item._id}`}>Update</Link></td>
            </tr>
        
          
    </tbody>
  </table>
   </div>
   
  );
};

export default MyOrders;

