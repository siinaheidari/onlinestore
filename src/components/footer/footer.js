import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={'footer'}>
            <ul>
                <li><Link to="/"> پرداخت سریع</Link></li>
                <li><Link to="/">ثبت شکایات و پیشنهادات</Link></li>
                <li><Link to="/">حفظ حریم خصوصی</Link></li>
                <li><Link to="/">خرید کالا / خدمات درخواستی</Link></li>
            </ul>
            <p> تمام حقوق مادی و معنوی این سایت متعلق به سینا حیدری می باشد. شما می توانید از سایت در صورت پذیرش موافقت نامه کاربری استفاده نمایید </p>
        </div>
    );
};

export default Footer;
