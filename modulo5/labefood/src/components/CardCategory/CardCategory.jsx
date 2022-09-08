import React from "react";
import { CardStyleCategory } from "./styled";

const CardCategory = (props) =>{

    // const onClick = () => {

    // }
    
    return(
        <CardStyleCategory>
            <p>{props.category}</p>
        </CardStyleCategory>
    );
};

export default CardCategory;