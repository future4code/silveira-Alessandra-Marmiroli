import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { goToCart, goToProfile, goToRestaurant } from "../../routes/Coordinator";
import { FFooter } from "./styled";

const HomeFooter = () => {
  const [value, setValue] = useState();
  
  const navigate = useNavigate();
  return (
    <FFooter>
      <Box>
        <BottomNavigation
          value={value}
          // color="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => goToRestaurant(navigate)}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            onClick={() => goToCart(navigate)}
            icon={<ShoppingCartIcon />}
          />
          <BottomNavigationAction
            onClick={() => goToProfile(navigate)}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      </Box>
    </FFooter>
  );
}
 export default HomeFooter;