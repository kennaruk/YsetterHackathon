import React, { Component } from 'react';
import './Header.css'
import logo2 from '../img/logo2.svg';
import homeheader from '../img/homeheader.svg';
import registerheader from '../img/registerheader.svg';
import listmember from '../img/listmember.svg';
import follow from '../img/follower.svg';
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
                                <img className="img-navbar" src={homeheader} />
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
                                ข้อมูลโครงการ
                            </div>
                        </div>
                        <div className="navbar-each">
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={listmember} />
                            </div>
                            <div className="text-each-navbar">
                                ข้อมูลโครงการ
                            </div>
                        </div>
                        <div className="navbar-each">
                            <div className="img-each-navbar">
                                <img className="img-navbar" src={follow} />
                            </div>
                            <div className="text-each-navbar set-line">
                               ผู้ติดตามทั้งหมด
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
