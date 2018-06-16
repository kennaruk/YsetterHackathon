import React, { Component } from 'react';
import './Nationality.css';
import imgproject from '../img/imgproject.png';
import BodyClassName from 'react-body-classname';

class Nationality extends Component {
    render() {
        return (
            <BodyClassName className="home-body">
                <div>
                    <div className="text-name-project">
                    สัญชาติของแรงงานในแต่ละพื้นที่
                     </div>
                        <select className="select-nation">
                            <option>ไทย</option>

                        </select>
                   
                    <div className="map-box"></div>

                </div>

            </BodyClassName>

        )
    }
}
export default Nationality;
