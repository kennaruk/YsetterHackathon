import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    handleChange = (event) => {
        console.log('event:', event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    renderForm = (no) => {
        const forms = [];
        for(let i = 0; i < no; i++) {
            forms.push(
                <div className="each-sun-box">
                <div className="register-input-box">
                    <div className="register-input-labor-text">บุตรคนที่ {i+1}</div>
                        <input id={"fol_first_name"+(i == 0 ? '' : i)} value={this.props.fol_first_name} onChange={this.props.handleChange} className="register-input-form" type="text" placeholder="ชื่อ" />
                    </div>
                    <div className="register-input-box">
                        <input id={"fol_last_name"+(i == 0 ? '' : i)} value={this.props.fol_last_name} onChange={this.props.handleChange} className="register-input-form" type="text" placeholder="นามสกุล" />
                    </div>
                    <div className="register-input-box">
                        <input id={"fol_id_number"+(i == 0 ? '' : i)} value={this.props.fol_id_number} onChange={this.props.handleChange} className="register-input-form" type="text" placeholder="เลขประจำตัวเด็ก" />
                    </div>
                    <div className="register-input-box">
                        <div className="register-input-labor-text">วันเดือนปีเกิด</div>
                        <input id={"fol_birth_date"+(i == 0 ? '' : i)} value={this.props.fol_birth_date} onChange={this.props.handleChange} className="register-input-form" type="date" placeholder="" />
                    </div>
                    <div className="register-input-box">
                        <input id={"fol_nationality"+(i == 0 ? '' : i)} value={this.props.fol_nationality} onChange={this.props.handleChange} className="register-input-form" type="text" placeholder="สัญชาติ" />
                    </div>

                    <div class="header color_blue">เพศ </div>
                    <div class="floatleft_box">
                        <label class="container margin_right">หญิง
                            <input onChange={this.props.handleChange} id="fol_gender" value="GIRL" type="radio" checked={this.props.fol_gender === "GIRL"} name="radio1" />
                            <span class="checkmark checkmark_orange"></span>
                        </label>
                        <label class="container">ชาย
                            <input onChange={this.props.handleChange} id="fol_gender" value="BOY" type="radio" checked={this.props.fol_gender === "BOY"} name="radio1" />
                            <span class="checkmark checkmark_orange"></span>
                        </label>

                    </div>
                    <div class="header color_blue">เคยเข้าโรงเรียนของไทยหรือไม่ </div>
                    <div class="floatleft_box">
                        <label class="container margin_right">เคย
                            <input id="fol_thai_ed" type="radio" value="true" onChange={this.props.handleChange} checked={this.props.fol_thai_ed === "true"} name={"radio2"+i} />
                            <span class="checkmark checkmark_orange"></span>
                        </label>
                        <label class="container">ไม่เคย
                            <input id="fol_thai_ed" type="radio" value="false" onChange={this.props.handleChange}  checked={this.props.fol_thai_ed !== "true"} name={"radio2"+i} />
                            <span class="checkmark checkmark_orange"></span>
                        </label>
                    </div>
                    {this.props.fol_thai_ed === "true" ?
                        <div className="number-sun">ระบุชั้น
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        :
                        <div>
                        </div>
                    }
                    
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
                    </div>
                </div>
            )
        }
        return forms;
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
                            <select id="number" onChange={this.handleChange} value={this.state.number}>
                                <option selected={this.state.number === "1"} value="1">1</option>
                                <option selected={this.state.number === "2"} value="2">2</option>
                                <option selected={this.state.number === "3"} value="3">3</option>
                                <option selected={this.state.number === "4"} value="4">4</option>
                            </select>
                        </div>

                        {this.renderForm(this.state.number)}

                        <div className="next-btn" onClick={this.props.nextStep}>
                            <span className="set-center">ถัดไป</span>
                        </div>
                    </div>

                </div>
            </BodyClassName>

        )
    }
}
export default NewLabor2;

