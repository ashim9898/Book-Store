import React , {useState,useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';

import { useSelector, useDispatch } from 'react-redux';
import { resetAlertMessages } from '../../redux/reducers/notifySlice';


export default function CustomSnackbar(props) {
  const dispatch = useDispatch()
  const {isApiSuccessMsgOpen, apiSuccessMessage} = useSelector(state=>state.notify)
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  useEffect(()=>{
    if(isApiSuccessMsgOpen){
      toggleOpen(true)
     setTimeout(()=>{
      dispatch(resetAlertMessages())
      toggleOpen(false)
     }, 6000)
     
    }
  },[isApiSuccessMsgOpen])

  const toggleOpen = (isOpen) => {
    setState({
      ...state,
      open: isOpen,
    });
  };



  return (
    <div>
      
      <Snackbar
        open={state.open}
        TransitionComponent={state.Transition}
        message={apiSuccessMessage}
        key={state.Transition.name}
      />
    </div>
  );
}
