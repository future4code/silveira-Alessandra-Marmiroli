import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Restaurant from '../pages/Restaurant/Restaurant'
import Address from "../pages/Address/Address";
import DetailRestaurant from "../pages/DetailRestaurant/DetailRestaurant";
import EditAddress from "../pages/EditAddress/EditAddress";
import EditProfile from "../pages/EditProfile/EditProfile";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";
import Cart from "../pages/Cart/Cart";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/address" element={ < Address />}/>
          <Route path="/restaurant" element={ < Restaurant />}/>
          <Route path="/detailRestaurant/:id" element={< DetailRestaurant/>}/>
          <Route path="profile" element={<Profile />} />
          <Route path="/editProfile/:id" element={<EditProfile/>}/>
          <Route path="cart" element={<Cart />} />
          <Route path="/editAddress" element={<EditAddress/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router

//Sempre utilizar / em path 
