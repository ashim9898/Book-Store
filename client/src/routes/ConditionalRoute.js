import { Route, Routes } from "react-router-dom";
import GettingStarted from "../containers/gettingStarted";
import Home from "../containers/home";
import Roles from "../containers/roles";
import Products from "../containers/products";
import SendOrders from "../containers/sendOrders";
import AdminHome from "../containers/admin/adminHome";  // import the component as default export
import { useSelector } from "react-redux";
import Login from "../containers/auth/login";
import Register from "../containers/auth/register";

const ConditionalRoute = () => {
  const { userRole } = useSelector(state => state.user);

  if (userRole === 'user') {
    return <UserRoutes />;
  } else if(userRole === 'admin'){
    return <AdminRoutes />;
  }else{
    return <DefaultRoutes />;
  }
};

const DefaultRoutes = ()=>{
  return(
    <Routes>
        <Route path="/" element={<GettingStarted />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

const UserRoutes = () => {
  return (
    <Routes>
      
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sendOrders" element={<SendOrders />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<AdminHome />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default ConditionalRoute;