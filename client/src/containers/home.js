import {Link} from "react-router-dom"

const Home=()=> {
    return (
      <div className="App">
       <Link to="/products">See Products</Link>
       <button>View Orders</button>
  
      </div>
    );
  }
  
  export default Home;