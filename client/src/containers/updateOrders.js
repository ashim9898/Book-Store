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
import axios from 'axios';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useParams,useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  productName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const UpdateOrders = () => {
//   const [fullName, setFullName] = React.useState('');
//   const [productname, setProductName] = React.useState('')
//   const [address, setAddress] = React.useState('')
//   const [phonenumber, setPhoneNumber] = React.useState('')
//   const [date, setDate] = React.useState('')

  const params = useParams();
  const navigate = useNavigate();
  const fetchOrders = async () => {
    try {
      const res = await fetch(`http://localhost:5000/order/${params.id}`);
    const data = await res.json()
    formik.setValues({
        fullName: data.result.fullName,
        productName: data.result.productName,
        address:data.result.address,
        phoneNumber:data.result.phoneNumber,
        date:data.result.date
      });
    } catch (e) {
      console.log('Error:', e);
    }
  };

  React.useEffect(() => {
    fetchOrders();
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      productName: '',
      address:'',
      phoneNumber:'',
      date:'',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
     const result=await fetch(`http://localhost:5000/order/${params.id}`,{
        method:'Put',
        body:JSON.stringify(values),
        headers:{
            'Content-Type':'Application/json'
        }
     })
     const res = await result.json()
     console.log(res)
     navigate('/ordersList')
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="fullName"
              label="Full Name"
              type="fullName"
              id="fullName"
              autoComplete="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
         
          <TextField
              margin="normal"
              required
              fullWidth
              name="productName"
              label="Product Name"
              type="productName"
              id="productName"
              autoComplete="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.productName && Boolean(formik.errors.productName)}
              helperText={formik.touched.productName && formik.errors.productName}
            />
            
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              id="address"
              autoComplete="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
              <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="phone Number"
              type="phoneNumber"
              id="phoneNumber"
              autoComplete="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
             
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              label=""
              type="date"
              id="date"
              autoComplete="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Update Product</Button>
            
              
          
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default UpdateOrders
