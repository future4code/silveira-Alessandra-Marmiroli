import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { goToRestaurant } from "../../routes/Coordinator";


export default function Footer (){ 
    const [value, setValue] = useState();
    const navigate = useNavigate()
    return (

    <Footer>
       <Box> 
        <BottomNavigation
        value={value}
        color='primary'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction onClick={() => goToRestaurant(navigate)} icon={<HomeIcon />} />
        {/* <BottomNavigationAction onClick={() => goToCartPage(navigate)}  icon={<ShoppingCartIcon />} />
        <BottomNavigationAction onClick={() => goToProfilePage(navigate)} icon={<PersonIcon />} /> */}
      </BottomNavigation>
      </Box>
    </Footer>
       
);
}