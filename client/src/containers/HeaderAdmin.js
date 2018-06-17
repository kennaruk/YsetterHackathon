import React, { Component } from 'react';
import './Header.css'
import logo2 from '../img/logo2.svg';
import homeheader from '../img/homeheader.svg';
import registerheader from '../img/registerheader.svg';
import listmember from '../img/listmember.svg';
import follow from '../img/follower.svg';
import location from '../img/location.svg';
import location2 from '../img/location2.svg';
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
                            <div className="img-each-navbar" onClick={() => { this.props.history.push('/Overview') }}>
                                <img className="img-navbar" src={homeheader} />
                            </div>
                            <div className="text-each-navbar">
                            ภาพรวมโครงการ
                            </div>
                        </div>
                        <div className="navbar-each" onClick={() => { this.props.history.push('/Nationality') }}>
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={location2} />
                            </div>
                            <div className="text-each-navbar2">
                            แรงงานในแต่ละพื้นที่
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
