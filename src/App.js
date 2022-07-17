import './App.css';
import Header from "./components/header/header";

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Homepage/home";
import Footer from "./components/footer/footer";
import Detail from "./components/detail/detail";
import {ProductsProvider} from "./components/context/productscontext";
import Slideshow from "./components/slideshow/slideshow";
import Cart from "./components/cart/cart";



function App() {
    return (
        <ProductsProvider>
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/home/:id" element={<Detail/>}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>
        </ProductsProvider>
    );
}

export default App;
