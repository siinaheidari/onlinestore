import React, {useState} from 'react';
import "./login.css"
import {Link} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email:email,
            password:password
        }

        axios.post("http://localhost:4000/api/login",user)
            .then(response =>{
                Swal.fire(
                    'با موفقیت ثبت نام شدید' + user.email,
                    'You clicked the button!',
                    'success'
                )
                console.log(response)
            }).catch(err => {

                console.log(err)
        })
        if (!user.fullname || !user.email || !user.password)
            toast.warn("Complete all fields")
    }

    return (
        <div className={'login-form'}>
            <img src={'https://pspro.ir/catalog/view/theme/pspro/image/PS5-login.png'}/>
            <form onSubmit={handleSubmit}>
                <div className={"login-form-items"}>
                    <div className={'login-inputs'}>
                        <div className={'small-input'}>
                            <input type="text" placeholder={"ایمیل"}
                                   value={email}
                                   onChange={e => (setEmail(e.target.value))}/>
                            <p>ایمیل</p>
                        </div>
                        <div className={'small-input'}>
                            <input type="text" placeholder={"رمز عبور"}
                                   value={password}
                                   onChange={e => (setPassword(e.target.value))}/>
                            <p>رمز ورود</p>
                        </div>
                    </div>
                    <div className={"checkbox"}>
                        <input type={"checkbox"}/>
                        <p>تمامی قوانین و مقررات سایت را می پذیرم</p>
                    </div>
                </div>
                <div className={'login-button'}>
                    <button><Link to="/">ورود به سایت</Link></button>
                </div>
                <hr/>
                <div className={'no-account'}>
                    <button><Link to={"/register"}>ثبت نام حساب کاربری</Link></button>
                    <p>کاربر جدید هستید؟</p>
                </div>
            </form>
        </div>
    );
};

export default Login;
