import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUnprotectedPage = () => {

    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            navigate("/listRestaurant")
        }
    }, [])
}

export default useUnprotectedPage;