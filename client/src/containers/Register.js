import React, { Component } from 'react';
import './Register.css';
import logoblue from '../img/logoblue.svg';
import BodyClassName from 'react-body-classname';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            th_first_name: '',
            th_lastname: '',
            en_first_name: '',
            en_last_name: '',
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleRegister = (event) => {
        const user = {
            th_first_name: this.state.th_first_name,
            th_lastname: this.state.th_lastname,
            en_first_name: this.state.en_first_name,
            en_last_name: this.state.en_last_name,
            username: this.state.username,
            password: this.state.password
        }

        fetch('/user', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(res => {
            if(res.success)
                this.props.history.push('/');
            else
                alert('ลงทะเบียนผิดพลาด');
        });
    }

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
                            <input id="th_first_name" onChange={this.handleChange} className="register-input-form" type="text" placeholder="กรุณากรอกชื่อภาษาไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">นามสกุล(ภาษาไทย)</div>
                            <input id="th_last_name" onChange={this.handleChange} className="register-input-form" type="text" placeholder="กรุณากรอกนามสกุลภาษาไทย"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">ชื่อ(ภาษาอังกฤษ)</div>
                            <input id="en_first_name" onChange={this.handleChange} className="register-input-form" type="text" placeholder="กรุณากรอกนามสกุลภาษาอังกฤษ"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">นามสกุล(ภาษาอังกฤษ)</div>
                            <input id="en_last_name" onChange={this.handleChange} className="register-input-form" type="text" placeholder="กรุณากรอกนามสกุลภาษาอังกฤษ"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">อีเมล</div>
                            <input id="username" onChange={this.handleChange} className="register-input-form" type="text" placeholder="กรุณากรอกอีเมล"/>
                        </div>
                        <div className="register-input-box">
                            <div className="register-input-text">รหัสผ่าน</div>
                            <input id="password" onChange={this.handleChange} className="register-input-form" type="password" placeholder="กรุณากรอกรหัสผ่าน"/>
                        </div>

                        <div className="register-btn" onClick={this.handleRegister}>
                            <span className="set-center">สมัครสมาชิก</span>
                        </div>
                    </div>
                </div>

            </BodyClassName>

        )
    }
}
export default Register;
