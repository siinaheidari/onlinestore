import React, {useContext, useState} from 'react';
import "./detail.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import {ProductsContext} from "../context/productscontext";
import Swal from "sweetalert2";



const DetailList = ({products}) => {
    const [items, setItems] = useContext(ProductsContext)


    const addToCart = () => {
        setItems((currState) => {
            return [...currState, products]
        })
        Swal.fire({
            icon: 'success',
            text: '. با موفقیت به سبد خرید اضافه شد ',
        })
    }

    return (
        <div className={"detail-list"}>
            <div className={"img"}>
                <img src={products.images} alt={""}/>
            </div>
            <div className={"detail-items"}>
                <h2> {products.title} خرید </h2>
                <h3> مدل: {products.description}</h3>
                <h3> تولیدکننده: {products.company}</h3>
                {
                    products.options.map((option, index) =>
                        <div className={"option"}>
                            <VerifiedIcon color={"success"} size={"20px"}/>
                            <p>{option}</p>
                        </div>
                    )
                }
                {products.garanty.map((garanty, index) =>
                    <div className={"garanty"}>
                        <p>{garanty}</p>
                        <Checkbox color="success"/>
                    </div>
                )
                }

                <div className={"item-footer"}>
                    <div className={"item-button"}>
                            <Button variant="contained"
                                    onClick={addToCart}
                                    endIcon={<AddShoppingCartIcon/>}>
                                <p>{products.price} تومان </p>
                            </Button>
                    </div>
                </div>
            </div>
            <div className={"footer-icons"}>
                <div className={"icons"}>
                    <span><p>ارسال سریع</p></span>
                    <LocalShippingOutlinedIcon/>
                </div>
                <div className={"icons"}>
                    <span><p>پرداخت امن</p></span>
                    <SecurityOutlinedIcon/>
                </div>
                <div className={"icons"}>
                    <span><p>ضمانت بازگشت وجه</p></span>
                    <CurrencyExchangeOutlinedIcon/>
                </div>
            </div>
        </div>
    );
};

export default DetailList;
