import React, {useContext} from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ProductsContext} from "../context/productscontext";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";

const CartItems = ({items,deleteItems}) => {

    return (
            <div className={"cart-list"}>
                <div className={"img"}>
                    <img src={items.images} alt={""} height={"150px"}/>
                </div>
                <div className={"items-disc"}>
                    <h2>{items.title}</h2>
                    <p>{items.description}</p>
                    <p>{items.company}</p>
                </div>
                <div className={"items-price"}>
                    <p>{items.price}  تومان</p>
                </div>
                <div className={"remove-items"}>
                    <HighlightOffIcon
                        color={"error"} onClick={()=>deleteItems(items.id)}/>
                </div>
            </div>
    );
};

export default CartItems;
