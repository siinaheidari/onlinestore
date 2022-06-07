import React from 'react';
import "./home.css"

const SuggestItems = ({Items}) => {
    return (
        <div className={"items-offer"}>
            <div className={"items-offer-list"}>
                {
                    Items.map(Item => {
                        return <div key={Item._id} className={"items-offer-list"}>
                            <img src={Item.images} className={"img-offer"} alt={""}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default SuggestItems;
