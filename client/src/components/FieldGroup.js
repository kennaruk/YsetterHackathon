import React, { Component } from 'react';
import './FieldGroup.css';

class FieldGroup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="input-login">
                {/* <div className="input-text">{this.props.text}</div> */}
                <input className="input-form" type={this.props.type} placeholder={this.props.placeholder}>

                </input>

            </div>
        )
    }
}
export default FieldGroup;
