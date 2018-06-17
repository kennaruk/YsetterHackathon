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
                            <input id="first_name" onChange={this.props.onChange} className="register-input-form " type="text" placeholder="ชื่อ" />
                        </div>
                        <div className="register-input-box">
                            <input id="last_name" onChange={this.props.onChange} className="register-input-form" type="text" placeholder="นามสกุล" />
                        </div>
                        <div className="register-input-box">
                            <input id="phone_number" onChange={this.props.onChange} className="register-input-form" type="text" placeholder="เบอร์ติดต่อ" />
                        </div>
                        <div className="register-input-box">
                            <input id="id_number" onChange={this.props.onChange} className="register-input-form" type="text" placeholder="เลขประจำตัวผู้ใช้แรงงาน" />
                        </div>
                        <div className="register-input-box">
                            <input id="nationality" onChange={this.props.onChange} className="register-input-form" type="text" placeholder="สัญชาติ" />
                        </div>
                        <div className="register-input-box">
                            <input id="type" onChange={this.props.onChange} className="register-input-form" type="text" placeholder="ประเภทแรงงาน" />
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

                            <div class="header color_blue">ผู้ติดตาม </div>
                            <div class="floatleft_box">
                                <label class="container margin_right">มี
                                     <input id="haveFollower" type="radio" onChange={this.props.handleFollowerChange} checked={this.props.haveFollower} name="radio2" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ไม่มี
                                      <input id="!haveFollower" type="radio" onChange={this.props.handleFollowerChange} checked={!this.props.haveFollower} name="radio2" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                            </div>
                            {this.props.haveFollower ? 
                                <div>
                                    <div class="floatleft_box">
                                        <label class="container margin_right">สามี
                                            <input id="status" type="radio" value="HUSBAND" onChange={this.props.handleChange} checked={this.props.status === "HUSBAND"} name="radio3" />
                                            <span class="checkmark checkmark_orange"></span>
                                        </label>
                                        <label class="container">ภรรยา
                                            <input id="status" value="WIFE" onChange={this.props.handleChange} checked={this.props.status === "WIFE"} type="radio" name="radio3" />
                                            <span class="checkmark checkmark_orange"></span>
                                        </label>
                                        <label class="container">บุตร
                                            <input id="status" value="CHILD" onChange={this.props.handleChange} checked={this.props.status === "CHILD"} type="radio" name="radio3" />
                                            <span class="checkmark checkmark_orange"></span>
                                        </label>
                                        <label class="container">อื่นๆ
                                            <input id="status" value="ELSE" onChange={this.props.handleChange} checked={this.props.status === "ELSE"} type="radio" name="radio3" />
                                            <span class="checkmark checkmark_orange"></span>
                                        </label>
                                    </div>
                                    <div className="next-btn" onClick={this.props.nextStep}>
                                        <span className="set-center">ถัดไป</span>
                                    </div>
                                </div>
                                :
                                <div className="next-btn" onClick={this.props.finalStep}>
                                    <span className="set-center">เสร็จสิ้น</span>
                                </div>
                            }
                            
                    </div>

                </div>
            </BodyClassName>

        )
    }
}
export default NewLabor1;

      