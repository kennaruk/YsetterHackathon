import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                        ลงทะเบียนแรงงานใหม่
                     </div>
                    <div className="register-box">
                        <div className="register-input-box">
                            <input className="register-input-form " type="text" placeholder="ชื่อ" />
                        </div>
                        <div className="register-input-box">
                            <input className="register-input-form" type="text" placeholder="นามสกุล" />
                        </div>
                        <div className="register-input-box">
                            <input className="register-input-form" type="text" placeholder="เบอร์ติดต่อ" />
                        </div>
                        <div className="register-input-box">
                            <input className="register-input-form" type="text" placeholder="เลขประจำตัวผู้ใช้แรงงาน" />
                        </div>
                        <div className="register-input-box">
                            <input className="register-input-form" type="text" placeholder="สัญชาติ" />
                        </div>

                            <div class="header color_blue">ผู้ติดตาม </div>
                            <div class="floatleft_box">
                                <label class="container margin_right">มี
                                     <input type="radio" checked="checked" name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ไม่มี
                                      <input type="radio" name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>

                            </div>
                       
                        <div className="next-btn">
                           <span className="set-center">ถัดไป</span>
                        </div>
                    </div>

                </div>
            </BodyClassName>

        )
    }
}
export default NewLabor1;

      