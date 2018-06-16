import React, { Component } from 'react';
import './Button.css';
import FieldGroup from '../components/FieldGroup';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="button-box" onClick={this.props.handleSubmit}>
                <span className="set-center">{this.props.text}</span>
            </div>
        )
    }
}
export default Login;
