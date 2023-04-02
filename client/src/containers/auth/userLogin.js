import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setLoginDetails } from '../../redux/reducers/userSlice';
import { setAlertMessages } from '../../redux/reducers/notifySlice';

import {useDispatch} from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import SnackBar from "../../components/alerts/snackBar"
const theme = createTheme();

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

const UserLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let {state} = useLocation();
 
  const triggerLogin = async (values)=>{
    
    const res = await axios.post(`http://localhost:5000/login`,values)
    if(res.status==200){
      dispatch(setLoginDetails(res.data.token))     
      dispatch(setAlertMessages(res.data.messge))
  
    }
  }

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
    },

    

    validationSchema: loginSchema,
    onSubmit: async (values) => {
      triggerLogin(values)
      
      if(state?.onSuccessNavigation==='/orders'){
        navigate('/orders')
      }else{
        navigate('/')
      }
      

    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              autoComplete="phoneNumber"
              placeholder="Enter No. or Email or User Name"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your Password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Submit</Button>
            
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          
          </Box>
        </Box>


      </Container>
    </ThemeProvider>
  
 
  );
}
export default UserLogin