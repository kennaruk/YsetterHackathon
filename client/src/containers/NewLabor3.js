import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor3 extends Component {
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
                    <div className="number-sun">จำนวน
                            <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                        <div className="each-sun-box">
                            <div className="register-input-box">
                            <div className="register-input-labor-text">บุตรคนที่ 1</div>
                                <input className="register-input-form " type="text" placeholder="ชื่อ" />
                            </div>
                            <div className="register-input-box">
                                <input className="register-input-form" type="text" placeholder="นามสกุล" />
                            </div>
                            <div className="register-input-box">
                                <input className="register-input-form" type="text" placeholder="เลขประจำตัวเด็ก" />
                            </div>
                            <div className="register-input-box">
                                <div className="register-input-labor-text">วันเดือนปีเกิด</div>
                                <input className="register-input-form" type="date" placeholder="" />
                            </div>
                            <div className="register-input-box">
                                <input className="register-input-form" type="text" placeholder="สัญชาติ" />
                            </div>

                            <div class="header color_blue">เพศ </div>
                            <div class="floatleft_box">
                                <label class="container margin_right">หญิง
                                     <input type="radio" checked="checked" name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ชาย
                                      <input type="radio" name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>

                            </div>
                            <div class="header color_blue">เคยเข้าโรงเรียนของไทยหรือไม่ </div>
                            <div class="floatleft_box">
                                <label class="container margin_right">เคย
                                     <input type="radio" checked="checked" name="radio2" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ไม่เคย
                                      <input type="radio" name="radio2" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>

                            </div>
                            <div className="number-sun">ระบุชั้น
                            <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div class="header color_blue">เคยรับวัคซีนระหว่าง 0-4 ปีหรือไม่ </div>
                            <div class="floatleft_box">
                                <label class="container margin_right">เคย
                                     <input type="radio" checked="checked" name="radio3" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ไม่เคย
                                      <input type="radio" name="radio3" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>

                            </div></div>


                        <div className="next-btn">
                            <span className="set-center">ถัดไป</span>
                        </div>
                    </div>

                </div>
            </BodyClassName>

        )
    }
}
export default NewLabor3;

