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
                <input 
                    id={this.props.id}
                    className="input-form" 
                    type={this.props.type} 
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                >

                </input>

            </div>
        )
    }
}
export default FieldGroup;
