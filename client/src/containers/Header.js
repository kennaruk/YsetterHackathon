import React, { Component } from 'react';
import './Header.css'
import logo2 from '../img/logo2.svg';
import homeheader from '../img/homeheader.svg';
import registerheader from '../img/registerheader.svg';
import listmember from '../img/listmember.svg';
import follow from '../img/follower.svg';

import homeheader2 from '../img/homeheader2.svg';
import registerheader2 from '../img/registerheader2.svg';
import listmember2 from '../img/listmember2.svg';
import follow2 from '../img/follower2.svg';
// import logout from '../img/logout.svg';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handleLogout = () => {
        this.props.hasAuthenticated(false);
    }

    render() {
        return (
            <div className="header-main-box">
                <div className="header-logo" >
                    <img className="img-logo-header" src={logo2} />

                    <div className="right-content-box">
                        <div className="logout-text" onClick={this.handleLogout}> ลงชื่อออก </div>
                        <div className="username-text"> {this.props.name}  </div>
                    </div>
                </div>
                <div className="navbar-box">
                    <div className="navbar-container">
                        <div className="navbar-each">
                            <div className="img-each-navbar" onClick={() => { this.props.history.push('/') }}>
                                <img className="img-navbar" src={homeheader2} />
                            </div>
                            <div className="text-each-navbar">
                                ข้อมูลโครงการ
                            </div>
                        </div>
                        <div className="navbar-each" onClick={() => { this.props.history.push('/laborRegisterLanding') }}>
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={registerheader} />
                            </div>
                            <div className="text-each-navbar">
                                ลงทะเบียน
    พนักงาน
                            </div>
                        </div>
                        <div className="navbar-each" onClick={() => { this.props.history.push('/ListLabor') }}>
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={listmember} />
                            </div>
                            <div className="text-each-navbar">
                                ข้อมูลพนักงานทั้งหมด
                            </div>
                        </div>
                        <div className="navbar-each" onClick={() => { this.props.history.push('/ListFollower') }}>
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={follow} />
                            </div>
                            <div className="text-each-navbar set-line">
                                ข้อมููลผู้ติดตามทั้งหมด
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
