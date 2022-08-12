import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Restaurant from "../pages/Restaurant/Restaurant";
import Signup from '../pages/Signup/Signup'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={< Signup />} />
          <Route path="restaurant" element={ <Restaurant />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router
