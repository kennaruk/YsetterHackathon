import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class NewLabor4_new extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                        ประวัติวัคซีน
                     </div>

                    <div className="register-box">


                        <table id="customers">
                            <tr>
                                <th>อายุ</th>
                                <th>ชื่อวัคซีน</th>
                                <th>นัดวันที่</th>
                                <th>รับวัคซีนวันที่</th>
                            </tr>
                            <tr>
                                <td>แรกเกิด - 1 เดือน</td>
                                <td>BCG HB1</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>2 เดือน</td>
                                <td>OPV1DTP-HB</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>4 เดือน</td>
                                <td>OPV2 IPV1 DTP-HB2</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>6 เดือน</td>
                                <td>OPV3 DTP-HB3</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>9 เดือน</td>
                                <td>MMR1</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>1 ปี</td>
                                <td>LAJE1</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>1 ปี 6 เดือน</td>
                                <td>OPV4DTP4</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>2 ปี  6 เดือน</td>
                                <td>MMR2 LAJE2</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>
                            <tr>
                                <td>4 ปี</td>
                                <td>OPV5 DTP5</td>
                                <td>  12/02/2018</td>
                                <td>  12/02/2018</td>
                            </tr>

                        </table>
                        <div class="header color_blue">ประวัติการศึกษา</div>
                        <div class="floatleft_box">
                            <label class="container margin_right">มี
                                     <input type="radio" checked="checked" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>
                            <label class="container">ไม่มี
                                      <input type="radio" name="radio3" />
                                <span class="checkmark checkmark_orange"></span>
                            </label>

                        </div></div>


                    <div className="next-btn set-width-nextbtn" onClick={ () => {this.props.history.goBack()} }>
                        <span className="set-center">กลับ</span>
                    </div>
                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor4_new;

