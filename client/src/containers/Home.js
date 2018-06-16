import React, { Component } from 'react';
import './Home.css';
import FieldGroup from '../components/FieldGroup';
import Button from '../components/Button';
import logo from '../img/logo.svg';
import BodyClassName from 'react-body-classname';

class Home extends Component {
    render() {
        return (
            <BodyClassName className="home-body">
                <div className="text-name-project">
                โครงการ เศรษฐสิริ ชัยพฤกษ์-แจ้งวัฒนะ
                </div>
            
            </BodyClassName>

        )
    }
}
export default Home;
