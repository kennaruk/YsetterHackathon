import React, { Component } from 'react';
import './Overview.css';
import imgproject from '../img/imgproject.png';
import BodyClassName from 'react-body-classname';

class Overview extends Component {
    render() {
        return (
            <BodyClassName className="home-body">
                <div>
                    <div className="text-name-project">
                        ภาพรวมของโครงการ
                     </div>

                    <div className="detail-box">
                        <div className="detail-head-text">สัดส่วนสัญชาติต่อปี (%)</div>
                        <div className="graph-box"></div>
                        <div className="detail-head-text">สถานะการส่งทะเบียนแต่ละโครงการ</div>
                        <div className="graph-box"></div>

                    </div>

                </div>

            </BodyClassName>

        )
    }
}
export default Overview;
