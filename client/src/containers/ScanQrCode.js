import React, { Component } from 'react';
import './ScanQrCode.css'
import BodyClassName from 'react-body-classname';
import search from '../img/search.svg';


class ScanQrCode extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="Scan-body">
                <div>
                    <div className="registerlabor-text">
                    สแกนบัตรเพื่อเพิ่มรายชื่อแรงงาน
                     </div>

                <div className="camera-box"></div>
                    



                </div>


            </BodyClassName>

        )
    }
}
export default ScanQrCode;

