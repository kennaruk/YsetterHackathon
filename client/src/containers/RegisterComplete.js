import React, { Component } from 'react';
import './RegisterComplete.css'
import BodyClassName from 'react-body-classname';
import complete from '../img/complete.svg';


class RegisterComplete extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BodyClassName className="registerComplete-body">
                <div>
                    <img className="img-complete" src={complete} />
                    <div className="registerlabor-text">
                        ลงทะเบียนเสร็จสิ้น
                     </div>



                    <div className="register-complete-btn"> 
                    <span className="set-center">เสร็จสิ้น</span>
                      </div>
                </div>


            </BodyClassName>

        )
    }
}
export default RegisterComplete;

