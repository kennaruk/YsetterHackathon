import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor5_new extends Component {
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
                    <div className="input-grade">เข้าโรงเรียนในระบบการศึกษาของประเทศไทย </div>
                       
                        <div className="input-grade">กรณีเข้าโรงเรียนในระบบการศึกษาของประเทศไทย
                                    ปัจจุบัน อยู่ระดับชั้น xxxxx</div>
                        <table id="customers">
                            <tr>
                                <th>ประวัติการศึกษา</th>
                                <th>ชื่อโรงเรียน</th>
                                <th>ปีการศึกษา</th>

                            </tr>
                            <tr>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>

                            </tr>
                            <tr>
                                <td>ระดับประถมศึกษา</td>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>

                            </tr>
                            <tr>
                                <td>ระดับมัธยมศึกษาตอนต้น</td>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>

                            </tr>
                            <tr>
                                <td>ระดับมัธยมศึกษาตอนปลาย</td>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>

                            </tr>
                            <tr>
                                <td>อื่นๆ ak;fak; </td>
                                <td>ระดับอนุบาล</td>
                                <td>ระดับอนุบาล</td>

                            </tr>


                        </table>
                        <div className="next-btn">
                            <span className="set-center">กลับ</span>
                        </div>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor5_new;

