import React, { Component } from 'react';
import './Login.css';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';
import logo from '../img/logo.svg';

class Login extends Component {
    render() {
        return (

            <div className="login-box">
                <div className="img-logo-box">
                    <img className="img-logo" src={logo} />
                </div>
                <div className="alert-text">กรุณาข้อมูลให้ครบถ้วน</div>
                <FieldGroup
                    text="รหัสพนักงาน"
                    type="text"
                    placeholder="กรุณาใส่รหัสพนักงาน"
                />
                <FieldGroup
                    text="รหัสผ่าน"
                    type="password"
                    placeholder="กรุณาใส่รหัสผ่าน"
                />
                <div className="forgetpass-text">ลืมรหัสผ่าน</div>

                <Button
                    text="เข้าสู่ระบบ"
                />
            </div>
        )
    }
}
export default Login;
