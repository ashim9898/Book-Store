import './App.css';
import ConditionalRoute from './routes/ConditionalRoute';
import SnackBar from "./components/alerts/snackBar"
const App=()=> {
  return (
    <div className="App">
      <ConditionalRoute/>
     

      <SnackBar/>

    </div>
  );
}

export default App;
