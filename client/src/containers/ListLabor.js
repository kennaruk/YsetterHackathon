import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';
import search from '../img/search.svg';
import profile from '../img/profile.svg';

class NewLabor6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labors: [

            ]
        }
    }
    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                        ข้อมูลพนักงานทั้งหมด
                     </div>

                    <div className="register-box">
                        <div className="search-box">
                            <input className="search-form" type="text" placeholder="ค้นหา" />
                            <img className="img-search" src={search} />
                        </div>
                        <table id="customers" className="customers2">
                            <tr>
                                <th className="number-labor-each">ไอดี</th>
                                <th>ชื่อแรงงาน</th>
                                <th className="number-follow-each">จำนวนผู้้ติดตาม</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>นิติพัฒน์ วุฒิศศิวัตน์
                                <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/>
                                </td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>นิติพัฒน์ วุฒิศศิวัตน์  <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>นิติพัฒน์ วุฒิศศิวัตน์  <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>นิติพัฒน์ วุฒิศศิวัตน์  <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/></td>
                                <td>1</td>
                            </tr> <tr>
                                <td>1</td>
                                <td>นิติพัฒน์ วุฒิศศิวัตน์  <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/></td>
                                <td>1</td>
                            </tr>

                        </table>

                        {/* // <div className="next-btn">
                        //     <span className="set-center">ถัดไป</span>
                        // </div> */}
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor6;

