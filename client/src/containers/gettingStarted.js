import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
const GettingStarted=()=> {
  // const {age} = useSelector(state => state.count)
  // console.log(counter)
  return (
    <div className="App">
     <Link to="/roles">getting started</Link>
    </div>
  );
}

export default GettingStarted;
