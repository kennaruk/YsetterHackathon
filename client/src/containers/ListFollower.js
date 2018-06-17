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
                {
                    name:  "นิติพัฒน์ วุฒิศศิวัฒน์",
                    id: "1111"
                }
            ],
            search: ''
        }
    }

    componentDidMount() {
        fetch('/children')
        .then(res => res.json())
        .then(res => {
            let follower = [];
            res.data.forEach(datum => {
                follower.push({
                    name: datum.follower[0].first_name + " " + datum.follower[0].last_name,
                    id: datum.id_number
                });
            });

            this.setState({
                follower: follower
            });
        });
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
                                return follow.name.includes(this.state.search);
                            }).map((follow => {
                                return (
                                    <tr>
                                        <td>{follow.name}
                                        <img className="img-profile" onClick={ () => {this.props.history.push('/Info/'+follow.id)} } src={profile}/>
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

