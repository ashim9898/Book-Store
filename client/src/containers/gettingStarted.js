import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { setIsFirstTimeUser } from "../redux/reducers/userSlice";
const GettingStarted=()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignVisitor = ()=>{
    navigate('/')
    dispatch(setIsFirstTimeUser())
  }
  
  // const {age} = useSelector(state => state.count)
  // console.log(counter)
  return (
    <div className="App">
     <button onClick={()=>assignVisitor()}>getting started</button>
    </div>
  );
}

export default GettingStarted;
