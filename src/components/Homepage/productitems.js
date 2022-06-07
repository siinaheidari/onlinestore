import React from 'react';
import "./home.css"

const Productitems = ({Products}) => {
    return (
        <div className={"list"}><h3>محصولات پرفروش</h3>
            <div className={"list-group"}>
                {
                    Products.map(products => {
                        return <div key={products._id} className={"productslist"}>
                            <img src={products.images} className={"img"} alt={""}/>
                            <div className={"products-info"}>
                                <h4>{products.title}</h4>
                                <p>{products.description}</p>
                                <button>{products.price}</button>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Productitems;
