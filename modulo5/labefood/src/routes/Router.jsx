import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Restaurant from '../pages/Restaurant/Restaurant'
import Address from "../pages/Address/Address";
import DetailRestaurant from "../pages/DetailRestaurant/DetailRestaurant";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router

//Sempre utilizar / em path 
