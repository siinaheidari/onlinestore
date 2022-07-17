import React, {useContext, useState} from 'react';
import './header.css'

import {HiOutlineShoppingCart} from 'react-icons/hi';
import {Link} from "react-router-dom";
import {ProductsContext} from "../context/productscontext";

const Header = () => {

    const [isopen, setIsopen] = useState(false);
    const [items, setItems] = useContext(ProductsContext)
    const handleMobile = () => {
        setIsopen(!isopen)
    }
    return (
        <div className={'header'}>
            <div>
                <div className={'header-items'}>
                    <div className={"ul-list"}>
                        <Link to={"/cart"}>
                            <HiOutlineShoppingCart className={"cart-shopping"}/>
                            <span>{items.length}</span>
                        </Link>
                        <span className={"right-span"}>|</span>
                        <ul className={'right-side'}>
                            <Link to={'/login'}>
                                <li>ورود | ثبت نام</li>
                            </Link>
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        </ul>
                    </div>
                    <div className={'center'}>
                        <h1>
                            <i class="fa-regular fa-chess-queen"></i>
                            <Link to={'/'}>
                                <span className={'sina'}>sina</span>
                                <span className={'hr'}>hr</span>
                                <span className={'ir'}>.ir</span>
                            </Link>
                            <i class="fa-regular fa-chess-queen"></i>
                        </h1>
                    </div>
                    <div className={'left-side'}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type={'text'} placeholder={"جستجو ..."}/>
                    </div>
                    <div className={'menu-icon'} onClick={handleMobile}>
                        {isopen ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
                    </div>
                </div>
            </div>

            <div className={"header-two"}>
                <div className={'header2'}>
                    <ul className={isopen ? 'nav-links-open' : "nav-links"} onClick={handleMobile}>
                        <Link to={"/product"}>
                            <li>دیگر کالاها</li>
                        </Link>
                        <Link to={"/product"}>
                            <li>لوازم جانبی</li>
                        </Link>
                        <Link to={"/product"}>
                            <li>مانیتور</li>
                        </Link>
                        <Link to={"/product"}>
                            <li>پی سی گیمینگ</li>
                        </Link>
                        <Link to={"/product"}>
                            <li>کنسول بازی</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
