import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={< Signup />} />
          {/* <Route path="registerpage" element={}/>
          <Route path="listRestaurant" element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router
