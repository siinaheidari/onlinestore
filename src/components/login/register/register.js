import React, {useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"
import {toast} from "react-toastify";

const Register = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            fullname: fullname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post("http://localhost:4000/api/register", user)
            .then(response => {
                console.log(response.data)
                Swal.fire(
                    'با موفقیت ثبت نام شدید',
                    'You clicked the button!',
                    'success'
                )
            }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: '!!!خطا',
                text: ':( مشکلی پیش آمده ',
            })
        })
        reset()
        if (!user.fullname || !user.email || !user.password)
            toast.warn("Complete all fields")
        if (user.confirmPassword !== confirmPassword)
            toast.warn("confirmPassword should be same as password")
    }
    const reset = () => {
            setFullname('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
    }

    return (
        <div className={'form'}>
            <img src={'https://pspro.ir/catalog/view/theme/pspro/image/PS5-login.png'}/>
            <form onSubmit={handleSubmit}>
                <div className={"form-items"}>
                    <div className={'inputs'}>
                        <div>
                            <input type="text" placeholder={'نام و نام خانوادگی'}
                                   value={fullname}
                                   onChange={e => setFullname(e.target.value)} />
                        </div>
                        <div>
                            <input type="text" placeholder={"ایمیل"}
                                   value={email}
                                   onChange={e => (setEmail(e.target.value))}/>
                        </div>
                        <div>
                            <input type="text" placeholder={"رمز عبور"}
                                   value={password}
                                   onChange={e => (setPassword(e.target.value))}/>
                        </div>
                        <div>
                            <input type="text" placeholder={"تکرار رمز عبور"}
                                   value={confirmPassword}
                                   onChange={e => (setConfirmPassword(e.target.value))}/>
                        </div>
                    </div>
                    <div className={'text'}>
                        <p>نام و نام خانوادگی</p>
                        <p>ایمیل</p>
                        <p>رمز ورود</p>
                        <p>تکرار رمز عبور</p>
                    </div>
                    </div>
                <div className={'button'}>
                    <button> ثبت نام</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
