import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPage';
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage';
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage/>} />
            <Route path="ListTripsPage" element={<ListTripsPage />}/>
            <Route path="ApplicationFormPage" element={<ApplicationFormPage />}/>
            <Route path="LoginPage" element={<LoginPage />}/>
            <Route path="AdminHomePage" element={<AdminHomePage />}/>
            <Route path="CreateTripPage" element={<CreateTripPage/>}/>
            <Route path="TripDetailsPage" element={<TripDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    )
}