import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';



class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            id_number: '',
            gender: '',
            birth_date: '',
            age: '',
            nationality: '',
            wasInSchool: '',
            grade: '',
            wasVaccine: ''
        }
    }
    
    componentDidMount() {
        var id = this.props.match.params.id;
        var url = "/info/"+id;
        console.log('url:', url);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                ...res.data
            })
        });
    }

    render() {
        return (
            <BodyClassName className="newlabor-body">
                <div>
                    <div className="registerlabor-text">
                    ข้อมูลส่วนตัวผู้ติดตาม {this.props.match.params.id}
                     </div>

                    <div className="register-box">
                         <div className="each-info">
                            <div className="info-head">ชื่อ: <span className="info-content">{this.state.first_name}</span></div>
                            <div className="info-head">นามสกุล: <span className="info-content">{this.state.last_name}</span></div>
                         </div>
                         <div className="each-info">
                            <div className="info-head">เลขประจำตัว: <span className="info-content">{this.state.id_number}</span></div>
                            <div className="info-head">เพศ: <span className="info-content">{this.state.gender}</span></div>
                         </div>
                        <div className="each-info">
                            <div className="info-head">วันเดือนปีเกิด: <span className="info-content">{this.state.birth_date}</span></div>
                            <div className="info-head">อายุ: <span className="info-content">{this.state.age}</span></div>
                         </div>
                         <div className="each-info">
                            <div className="info-head2">สัญชาติ: <span className="info-content">{this.state.nationality}</span></div>
                           
                         </div>
                         <div className="each-info">
                            <div className="info-head2">เคยเข้าโรงเรียนของไทยหรือไม่: <span className="info-content">{this.state.wasInSchool}</span></div>
                          </div>
                         <div className="each-info">
                                <div className="info-head2">ระดับชั้น: <span className="info-content">{this.state.grade}</span></div>
                        </div>
                          <div className="each-info">
                             <div className="info-head2">เคยรับวัคซีนระหว่าง 0-4 ปีหรือไม่: <span className="info-content">{this.state.wasVaccine}</span></div>
                            </div>

                        <div className="btn-content-box">
                            <div className="each-content-btn-info margin-right" onClick={ () => {this.props.history.push('/NewLabor4_new')} } ><span className="set-center">ประวัติวัคซีน</span> </div>
                            <div className="each-content-btn-info"><span className="set-center" onClick={ () => {this.props.history.push('/NewLabor5_new')} } >ประวัติการศึกษา</span> </div>
                        </div>

                       
                        <div className="next-btn" onClick={ () => {this.props.history.goBack()} }>
                            <span className="set-center">กลับ</span>
                        </div>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default Info;

