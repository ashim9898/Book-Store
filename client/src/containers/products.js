import { Navigate, useNavigate } from "react-router-dom";
const Products=()=> {
    const navigate = useNavigate()

    const sendOrders = () =>{
        navigate('/sendOrders');
    }
    return (
      <div className="App">
       Products
       <button>Add to Cart</button>
       <button onClick={()=>sendOrders()}>Buy</button>
  
      </div>
    );
  }
  
  export default Products;