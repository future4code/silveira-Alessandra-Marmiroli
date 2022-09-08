export const goToSignup = (navigate) => {
    navigate("/signup");
 
}
//página de cadatro leva para a página de endereço Adress

export const goToLogin = (navigate) => {
    navigate("/");
 
}

//página de login para fazer o login o cadastro deve existir e o endereço 
export const goToAddress = (navigate) => {
    navigate("/address");
}

export const goToRestaurant = (navigate) => {
    navigate("/restaurant");
}
//Essa página devera ser construída após Adress!
export const goToDetailRestaurant = (navigate, id) => {
    navigate(`/detailRestaurant/${id}`);
};

export const goToProfile = (navigate) => {
    navigate("/profile")
}

export const goToEditProfile = (navigate, id) => {
    navigate(`/editProfile/${id}`);
};

export const goToCart = (navigate) => {
    navigate(`/cart`)
}

//Rota para página de Address
export const goToEditAddress = (navigate) => {
    navigate("/editAddress");
};


