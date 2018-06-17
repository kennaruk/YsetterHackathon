import React, { Component } from 'react';
import './Login.css';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';
import logo from '../img/logo.svg';
import BodyClassName from 'react-body-classname';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            err: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount() {

    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
        fetch('/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(res => {
            if(res.success) {
                console.log('res.data:', res.data);
                
                this.props.hasAuthenticated(true, res.data.th_first_name+" "+res.data.th_last_name, res.data.role);
            }
            else
                this.setState({
                    err: true
                });
        });
    }

    render() {
        return (
            <BodyClassName className="login-body">
                <div className="login-box">
                    <div className="img-logo-box">
                        <img className="img-logo" src={logo} />
                    </div>
                    {this.state.err ? <div className="alert-text">รหัสพนักงานหรือรหัสผ่านผิด</div> : ''}
                    <FieldGroup
                        id="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        text="รหัสพนักงาน"
                        type="text"
                        placeholder="กรุณาใส่รหัสพนักงาน"
                    />
                    <FieldGroup
                        id="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        text="รหัสผ่าน"
                        type="password"
                        placeholder="กรุณาใส่รหัสผ่าน"
                    />
                    <div className="forgetpass-text">ลืมรหัสผ่าน</div>

                    <Button
                        handleSubmit={this.handleSubmit}
                        text="เข้าสู่ระบบ"
                    />
                </div>
            </BodyClassName>
        )
    }
}
export default Login;
