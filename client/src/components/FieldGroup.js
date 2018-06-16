import React, { Component } from 'react';
import './FieldGroup.css';

class FieldGroup extends Component {
    render() {
        return (
            <div className="input-login">
                <div className="input-text">รหัสพนักงาน</div>
                <input type="text" placeholder="รหัสประจำตัวอะไรก็ว่าไป">

                </input>
            
            </div>
        )
    }
}
export default FieldGroup;
