import { Route, Routes } from "react-router-dom"
import GettingStarted from "../containers/gettingStarted"
// import Home from "../containers/Home"
import Home from "../containers/home"
import Roles from "../containers/roles"
import Products from "../containers/products"
import SendOrders from "../containers/sendOrders"
import Login from "../auth/login"

const UserRoutes= ()=> {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<GettingStarted />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sendOrders" element={<SendOrders />} />
      <Route path="/login" element={<Login />} />


    </Routes>
    </div>
  )
}
export default UserRoutes