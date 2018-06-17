import React, { Component } from 'react';
import './LaborRegister.css';
import BodyClassName from 'react-body-classname';



class LaborRegister extends Component {
    render() {
        return (
            <BodyClassName className="laborRegister-body">
                <div>
                    <div className="registerlabor-text">
                        ลงทะเบียนพนักงาน
                     </div>

                    <div className="choose-btn margin-top" onClick={() => { this.props.history.push('/NewLabor') }}>
                        <span className="set-center">ลงทะเบียน
                             <br />   แรงงานใหม่</span>
                    </div>
                    <div className="choose-btn" onClick={() => { this.props.history.push('/ScanQrCode') }}>
                        <span className="set-center">ลงทะเบียน
                        <br /> แรงงานเก่า</span>
                    </div>
                </div>

            </BodyClassName>
        )
    }
}
export default LaborRegister;
