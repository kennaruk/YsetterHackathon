import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haveFollower: true
        }
    }
    onChange 
    handleFollowerChange = (event) => {
        if(event.target.id === "haveFollower")
            this.setState({
                haveFollower: true
            });
        else
            this.setState({
                haveFollower: false
            });
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
                                     <input id="haveFollower" type="radio" onChange={this.handleFollowerChange} checked={this.state.haveFollower} name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>
                                <label class="container">ไม่มี
                                      <input id="!haveFollower" type="radio" onChange={this.handleFollowerChange} checked={!this.state.haveFollower} name="radio1" />
                                    <span class="checkmark checkmark_orange"></span>
                                </label>

                            </div>
                       
                        { this.state.haveFollower ? 
                            <div className="next-btn">
                            <span className="set-center">ถัดไป</span>
                            </div>
                            :
                            <div className="next-btn">
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

      