import React, { Component } from 'react';
import './ScanQrCode.css'
import BodyClassName from 'react-body-classname';
import search from '../img/search.svg';
import QrReader from 'react-qr-reader';

class ScanQrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 300,
            result: 'No result',
        }
    }

    handleScan = (data) => {
        if(data) {
            let url = "/labour/"+data;
            console.log('url:', url);

            fetch(url)
            .then(res => res.json())
            .then(res => {
                alert(JSON.stringify('พบข้อมูลแรงงาน!'));
                this.setState({
                    result: JSON.stringify(res.data)
                });
            });
            
        }
    }

    render() {
        return (
            <BodyClassName className="Scan-body">
                <div>
                    <div className="registerlabor-text">
                        สแกนบัตรเพื่อเพิ่มรายชื่อแรงงาน
                     </div>

                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                    />
                    <p>{this.state.result}</p>
                </div>

            </BodyClassName>

        )
    }
}
export default ScanQrCode;

