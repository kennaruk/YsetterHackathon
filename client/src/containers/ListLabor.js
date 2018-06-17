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
                {
                    id: '552872',
                    name: 'อัชราภา สิ่งท้อ',
                    follower: 2
                },
                {
                    id: '557877',
                    name: 'ศรีชาย ม่วงมัน',
                    follower: 1
                },
                {
                    id: '557850',
                    name: 'แก้วตา ขวัญใจ',
                    follower: 0
                },
                {
                    id: '573937',
                    name: 'สมัครใจ ทำงาน',
                    follower: 1
                },
                {
                    id: '458799',
                    name: 'มฤตวงศ์ สมสมร',
                    follower: 1
                }
            ],
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
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
                            <input id="search" onChange={this.handleChange} value={this.state.search} className="search-form" type="text" placeholder="ค้นหา" />
                            <img className="img-search" src={search} />
                        </div>
                        <table id="customers" className="customers2">
                            <tr>
                                <th className="number-labor-each">ไอดี</th>
                                <th>ชื่อแรงงาน</th>
                                <th className="number-follow-each">จำนวนผู้้ติดตาม</th>
                            </tr>
                            { this.state.labors.filter( labor => {
                                return labor.id.includes(this.state.search) || labor.name.includes(this.state.search)
                            }).map( labor => {
                                return (
                                    <tr>
                                        <td>{labor.id}</td>
                                        <td>    {labor.name}
                                            <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/>
                                        </td>
                                        <td>{labor.follower}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor6;

