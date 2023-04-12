import {Link} from "react-router-dom"
import NavBar from "../components/header/navBar"
const Home=()=> {
    return (
      <div className="App">
        <NavBar/>
       <Link to="/products">See Products</Link>
       <Link to="/ordersList">See Products</Link>
  
      </div>
    );
  }
  
  export default Home;