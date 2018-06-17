import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class Info extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                    ข้อมูลส่วนตัวผู้ติดตาม
                     </div>

                    <div className="register-box">
                         <div className="each-info">
                            <div className="info-head">ชื่อ: <span className="info-content">บุษฑิตา</span></div>
                            <div className="info-head">นามสกุล: <span className="info-content">บุษฑิตา</span></div>
                         </div>
                         <div className="each-info">
                            <div className="info-head">เลขประจำตัว: <span className="info-content">ๆาด่าสหทดฟว</span></div>
                            <div className="info-head">เพศ: <span className="info-content">หญิง</span></div>
                         </div>
                        <div className="each-info">
                            <div className="info-head">วันเดือนปีเกิด: <span className="info-content">ไทย</span></div>
                            <div className="info-head">อายุ: <span className="info-content">บุษฑิตา</span></div>
                         </div>
                         <div className="each-info">
                            <div className="info-head2">สัญชาติ: <span className="info-content">ไทย</span></div>
                           
                         </div>
                         <div className="each-info">
                            <div className="info-head2">เคยเข้าโรงเรียนของไทยหรือไม่: <span className="info-content">เคย/ไม่เคย</span></div>
                          </div>
                         <div className="each-info">
                                <div className="info-head2">ระดับชั้น: <span className="info-content">ป.ฉี่</span></div>
                        </div>
                          <div className="each-info">
                             <div className="info-head2">เคยรับวัคซีนระหว่าง 0-4 ปีหรือไม่: <span className="info-content">เคย/ไม่เคย</span></div>
                            </div>

                        <div className="btn-content-box">
                            <div className="each-content-btn-info margin-right"><span className="set-center">ประวัติวัคซีน</span> </div>
                            <div className="each-content-btn-info"><span className="set-center">ประวัติการศึกษา</span> </div>
                        </div>

                       
                        <div className="next-btn">
                            <span className="set-center">กลับ</span>
                        </div>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default Info;

