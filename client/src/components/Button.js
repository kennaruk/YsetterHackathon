import React, { Component } from 'react';
import './Button.css';
import FieldGroup from '../components/FieldGroup';

class Login extends Component {
    render() {
        return (
            <div className="button-box">
                <span className="set-center">{this.props.text}</span>
            </div>
        )
    }
}
export default Login;
