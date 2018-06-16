import React, { Component } from 'react';
import './Register.css';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';
import logoblue from '../img/logoblue.svg';
import BodyClassName from 'react-body-classname';

class Register extends Component {
    render() {
        return (
            <BodyClassName className="register-body">
                <div>
                    <div className="header-logo" >
                        <img className="img-logo-header" src={logoblue} />
                    </div>

                    <div className="register-box">

                        <div className="register-input-box">
                            <div className="register-input-text">ชื่อ(ภาษาไทย)</div>
                            <input className="register-input-form" type="text" placeholder="กรุณรากรอกชื่อภาษไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">นามสกุล(ภาษาไทย)</div>
                            <input className="register-input-form" type="text" placeholder="กรุณรากรอกนามสกุลภาษไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">ชื่อ(ภาษาอังกฤษ)</div>
                            <input className="register-input-form" type="text" placeholder="กรุณรากรอกนามสกุลภาษไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">นามสกุล(ภาษาอังกฤษ)</div>
                            <input className="register-input-form" type="text" placeholder="กรุณรากรอกนามสกุลภาษไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">อีเมล</div>
                            <input className="register-input-form" type="text" placeholder="กรุณรากรอกอีเมล"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">รหัสผ่าน</div>
                            <input className="register-input-form" type="password" placeholder="กรุณากรอกรหัสผ่าน"/>
                        </div>

                        <div className="register-btn">
                            <span className="set-center">สมัครสมาชิก</span>
                        </div>
                    </div>
                </div>

            </BodyClassName>

        )
    }
}
export default Register;
