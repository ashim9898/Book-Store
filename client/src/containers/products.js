import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../components/header/navBar"
import { useSelector } from "react-redux";
import "../App.css"
const Products=()=> {

  const productList = [
    {name:'car', price: 30, image:'https://images.unsplash.com/photo-1676288176820-a5a954d81e6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzY4NTc2Mg&ixlib=rb-4.0.3&q=80&w=200'}
  ]
    const {isLoggedIn} = useSelector((state)=>state.user);
    const navigate = useNavigate()

    const handleOrderNavigation=()=>{
      if(isLoggedIn){
        navigate('/orders')
      }else{
        navigate('/login')
      }
    }

    const Products = () =>{
        navigate('/sendOrders');
    }
    return(
     
      <div>
        <NavBar/>
       {
        productList.map((item)=>{
          return(
            <div className="Card">

              <img src={item.image} width={80} height={80}/>
             {item.name}
              {item.price}
            
            <button className="AddToCartButton">Add to Cart</button>
            <button onClick={()=>handleOrderNavigation()}>Buy</button>

          </div>
            
          )
          
        })
        
       }
        
  
      </div>
      
    );
  }
  
  export default Products;