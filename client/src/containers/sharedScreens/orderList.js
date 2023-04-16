import React, {useState, useEffect} from 'react'
import NavBar from "../../components/header/navBar"
import { useSelector } from 'react-redux'
import axios from 'axios'
import MyOrders from '../myOrders'
const OrderList = () => {
    const {id} = useSelector(state=>state.user)
    const [orderList, setOrderList] = useState([])
    const fetchOrders = async() =>{
        const res = await axios.get(`http://localhost:5000/orders/${id}`)
        setOrderList(res.data.ordersList)
        
    }
    useEffect(() =>{
        fetchOrders()
    },[])
    console.log(orderList); 
  return (
    <div className="App">
    <NavBar/>

    {orderList.map((item, id) => {
      return <MyOrders item={item} fetchOrders={fetchOrders}/>
    })}
    </div>
  )
}

export default OrderList
