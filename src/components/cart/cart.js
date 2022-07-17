import React, {useContext} from 'react';
import {ProductsContext} from "../context/productscontext";
import "./cart.css"
import CartItems from "./cartitems";
import axios from "axios";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

const Cart = () => {
    const [items, setItems] = useContext(ProductsContext)

    const deleteItems = (id) => {
        setItems(items.filter((items) => items.id !== id))
        Swal.fire({
            icon: 'error',
            title: 'با موفقیت از سبد خرید حذف شد .',
        })
    }
    const totalPrice = items.reduce((prevValue, currValue) => {
        return prevValue + currValue.price
    }, 0)
    return (
        <div className={"full-cart"}>
            <div className={"cart"}>
                <h3> سبد خرید <span>{items.length}</span></h3>
                {
                    items.map(items => {
                            return <CartItems items={items} deleteItems={deleteItems}/>
                        }
                    )
                }
            </div>
            <div className={"factor"}>
                <div className={"factor-item"}>
                    <div className={"factor-money"}>
                        <p className={"p1"}>جمع کل: </p>
                        <p>{totalPrice} تومان</p>
                    </div>
                    <p className={"p2"}> کالاهای موجود در سبد خرید، هنوز ثبت و رزرو نشده اند.
                        برای ثبت سفارش روی دکمه تسویه حساب کلیک کنید.</p>
                    <button>تسویه حساب</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;
