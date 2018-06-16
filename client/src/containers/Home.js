import React, { Component } from 'react';
import './Home.css';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';
import logo from '../img/logo.svg';
import imgproject from '../img/imgproject.png';
import BodyClassName from 'react-body-classname';

class Home extends Component {
    render() {
        return (
            <BodyClassName className="home-body">
                <div>
                    <div className="text-name-project">
                        โครงการ เศรษฐสิริ ชัยพฤกษ์-แจ้งวัฒนะ
                     </div>
                    <img className="img-project" src={imgproject} />
                    <div className="detail-box">   
                        
                    </div>
                    <div className className="set-color-number">รหัสโครงการ <span className="set-color-text"></span> </div>
                </div>

            </BodyClassName>

        )
    }
}
export default Home;
