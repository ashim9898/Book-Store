import { useNavigate } from "react-router-dom";
const Home=()=> {

const navigate = useNavigate()
const assignRole = () =>{

    navigate('/home')
}
    return (
      <div className="App">
       <button onClick={()=>assignRole('user')}>User</button>
       <button onClick={()=>assignRole('admin')}>Admin</button>
  
      </div>
    );
  }
  
  export default Home;