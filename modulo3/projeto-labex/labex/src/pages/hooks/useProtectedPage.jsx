import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
 const navigate = useNavigate ()

 useEffect(() => {
     const token = localStorage.getItem ('token');

     if (token ===null) {
         console.log ('Não esta logado')
         navigate('/loginPage')
     }
 }, [navigate])
}