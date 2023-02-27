import { Route, Routes } from "react-router-dom";
import GettingStarted from "../containers/gettingStarted";
import Home from "../containers/home";
import Roles from "../containers/roles";
import Products from "../containers/products";
import SendOrders from "../containers/sendOrders";
import AdminHome from "../containers/admin/adminHome";  // import the component as default export
import { useSelector } from "react-redux";
import UserLogin from "../containers/auth/userLogin";
import UserRegister from "../containers/auth/userRegister";
import AdminLogin from "../containers/auth/adminLogin";
import AdminRegister from "../containers/auth/adminRegister";

const ConditionalRoute = () => {
  const { userRole,firstTimeUser } = useSelector(state => state.user);

  if (userRole === 'user') {
    return <UserRoutes />;
  } else if(userRole === 'admin'){
    return <AdminRoutes />;
  }else if(firstTimeUser){
    return <FirstUserRoutes/>
  }
  return <DefaultRoutes/>
};

const FirstUserRoutes = ()=> {
  return(
    <Routes>
    <Route path="/" element={<GettingStarted />} />
    </Routes>
  )
}

const DefaultRoutes = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Roles />} />
    </Routes>
  )
}

const UserRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sendOrders" element={<SendOrders />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<AdminHome />} /> 
      <Route path="/" element={<AdminLogin />} />
      <Route path="/register" element={<AdminRegister />} />
    </Routes>
  );
};

export default ConditionalRoute;