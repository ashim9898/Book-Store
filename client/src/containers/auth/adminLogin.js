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
import { setUserName } from '../../redux/reducers/userDetailsSlice';

import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import SnackBar from "../../components/alerts/snackBar"
const theme = createTheme();

const loginSchema = Yup.object().shape({
  loginKey: Yup.string()
  .required('Required'),
password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

const AdminLogin = () => {
  const {userRole} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let {state} = useLocation();
 
  const triggerLogin = async (values)=>{
    
    const res = await axios.post(`http://localhost:5000/login`,{...values, userRole})
    if(res.status==200){
      dispatch(setLoginDetails({id: res.data.id,token: res.data.token}))     
      dispatch(setAlertMessages(res.data.message))

  
    }
  }

  const formik = useFormik({
    initialValues: {
      loginKey: '',
      password: '',
    },

    

    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values)
      triggerLogin(values)
      
    
        navigate('/')
    
    
// 9862193337
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
              id="loginKey"
              label="loginKey"
              name="loginKey"
              autoComplete="loginKey"
              placeholder="Enter No. or Email or User Name"
              value={formik.values.loginKey}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.loginKey && Boolean(formik.errors.loginKey)}
              helperText={formik.touched.loginKey && formik.errors.loginKey}
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
export default AdminLogin