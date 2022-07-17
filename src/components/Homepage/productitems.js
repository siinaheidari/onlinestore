import React from 'react';
import "./home.css"
import {Link} from "react-router-dom";

const Productitems = ({products}) => {
    return (
        <div className={"list"}><h3>محصولات پرفروش</h3>
            <div className={"list-group"}>
                {
                    products.map(products => {
                        return <div key={products.id} className={"productslist"}>
                            <Link to={`/home/${products.id}`}>
                                <img src={products.images} className={"img"} alt={""}/>
                            </Link>
                            <div className={"products-info"}>
                                <Link to={`/home/${products.id}`}>
                                    <h4>{products.title}</h4>
                                    <p>{products.description}</p>
                                    <button>تومان {products.price}</button>
                                </Link>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Productitems;
