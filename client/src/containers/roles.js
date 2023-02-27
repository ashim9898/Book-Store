import { useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"
import { assignUserRole } from "../redux/reducers/userSlice"

const Roles=()=> {

const navigate = useNavigate()
const dispatch = useDispatch()
const assignRole = (role) =>{

    navigate('/')

    dispatch(assignUserRole(role))

}
const {userRole} = useSelector(state => state.user)



    return (
      <div className="App">
      
       <button onClick={()=>assignRole('user')}>User</button>
       <button onClick={()=>assignRole('admin')}>Admin</button>
  
      </div>
    );
  }
  
  export default Roles;



