import React, { Component } from 'react';
import './Home.css';
import imgproject from '../img/imgproject.png';
import BodyClassName from 'react-body-classname';

class Home extends Component {
    render() {
        return (
            <BodyClassName className="home-body">
                <div>
                    <div className="text-name-project">
                        โครงการ เศรษฐสิริ ชัยพฤกษ์-แจ้งวัฒนะ
                     </div>
                    <img className="img-project" src={imgproject} />
                    <div className="detail-box">
                        <div className className="set-color-number">รหัสโครงการ: <span className="set-color-text">SR12002</span> </div>
                        <div className className="set-color-number">ชื่อโครงการ: <span className="set-color-text">เศรษฐสิริ ชัยพฤกษ์-แจ้งวัฒนะ</span> </div>
                        <div className className="set-color-number">จังหวัด: <span className="set-color-text">นนทบุรี</span> </div>
                        <div className className="set-color-number">ระยะเวลาสัญญาก่อสร้าง : <span className="set-color-text">ถึง ธันวาคม 2019</span> </div>
                        <div className className="set-color-number">ชื่อผู้ประสานงาน : <span className="set-color-text">นิติพัฒน์ </span> </div>

                    </div>

                </div>

            </BodyClassName>

        )
    }
}
export default Home;
