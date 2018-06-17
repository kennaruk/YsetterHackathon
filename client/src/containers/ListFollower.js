import React, { Component } from 'react';
import './NewLabor.css'
import BodyClassName from 'react-body-classname';
import search from '../img/search.svg';
import profile from '../img/profile.svg';


class NewLabor6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            follower: [
                "นิติพัฒน์ วุฒิศศิวัฒน์",
                "ธนวิทธ์ ธนวิโรจน์",
                "เกวลิน ชาญชนโรจน์",
                "ธนกร ปีติวรภัทร",
                "ณัฐนนท์ ยะนิล",
                "พีรสรณ์ เหมศาสตร์",
                "อายุทธ์ มั่งมีทรัพย์",
                "จีมาย อาโลฮ่า",
                "สหกรณ์ ทองพรมห์",
                "พรพรหม พรมวงษา"
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
                    ข้อมูลผู้ติดตามทั้งหมด
                     </div>

                    <div className="register-box">
                        <div className="search-box">
                            <input className="search-form" id="search" onChange={this.handleChange} value={this.state.search} type="text" placeholder="ค้นหา" />
                            <img className="img-search" src={search} />
                        </div>
                        <table id="customers" className="customers2">
                            {this.state.follower.filter(follow => {
                                return follow.includes(this.state.search);
                            }).map((follow => {
                                return (
                                    <tr>
                                        <td>{follow}
                                        <img className="img-profile" onClick={ () => {this.props.history.push('/Info')} } src={profile}/>
                                        </td>
                                    </tr>
                                )
                            }))}
                        </table>
                    </div>



                </div>


            </BodyClassName>

        )
    }
}
export default NewLabor6;

