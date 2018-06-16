import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                        ประวัติการศึกษา
                     </div>

                    <div className="register-box">

                        <div class="floatleft_box2">
                            <label class="container margin_right">เข้าโรงเรียนในระบบการศึกษาของประเทศไทย
                                     <input type="radio" checked="checked" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>
                            <label class="container ">ไม่ได้เข้าโรงเรียนในระบบการศึกษาของประเทศไทย
                                <input type="radio" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>
                            <label class="container ">ได้เข้าโรงเรียนในประเทศของตนเอง ระบุประเทศ
                                <input type="radio" name="radio3" />
                                <span class="checkmark checkmark_orange">
                                </span>
                            </label>
                            
                            <input className="input-school3" type="text" />
                            <label class="container">เข้าเรียนกับพื้นที่ปลอดภัยสำหรับเด็กของแสนสิริ
                                      <input type="radio" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>
                            <label class="container">ไม่ได้เข้าเรียนกับพื้นที่ปลอดภัยสำหรับเด็กของแสนสิริ
                                      <input type="radio" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>
            

                        </div>
                        <div className="input-grade">กรณีเข้าโรงเรียนในระบบการศึกษาของประเทศไทย
                                    ปัจจุบัน อยู่ระดับชั้น <input className="input-school2" type="text" /></div>
                        <table id="customers">
                            <tr>
                                <th>ประวัติการศึกษา</th>
                                <th>ชื่อโรงเรียน</th>
                                <th>ปีการศึกษา</th>

                            </tr>
                            <tr>
                                <td>ระดับอนุบาล</td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>

                            </tr>
                            <tr>
                                <td>ระดับประถมศึกษา</td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>

                            </tr>
                            <tr>
                                <td>ระดับมัธยมศึกษาตอนต้น</td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>

                            </tr>
                            <tr>
                                <td>ระดับมัธยมศึกษาตอนปลาย</td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>

                            </tr>
                            <tr>
                                <td>อื่นๆ <input className="other-school" type="text" /></td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>
                                <td>
                                    <input className="input-school" type="text" />
                                </td>

                            </tr>


                        </table>
                        <div className="next-btn" onClick={this.props.nextStep}>
                            <span className="set-center">ถัดไป</span>
                        </div>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor5;

