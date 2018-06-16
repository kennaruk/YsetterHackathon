import React, { Component } from 'react';
import NewLabor1 from './NewLabor1';
import NewLabor2 from './NewLabor2';
import NewLabor3 from './NewLabor3';
import NewLabor4 from './NewLabor4';
import NewLabor5 from './NewLabor5';
import RegisterComplete from './RegisterComplete';

class NewLabor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            haveFollower: false,
            status: 'HUSBAND',
            first_name: '',
            last_name: '',
            phone_number: '',
            id_number: '',
            nationality: '',
            type: '',
            fol_first_name: '',
            fol_last_name: '',
            fol_id_number: '',
            fol_birth_date: '',
            fol_nationality: '',
            fol_gender: 'GIRL',
            fol_thai_ed: "false"
            
        }
    }

    componentDidMount() {
        console.log('step:', this.state.step);
    }
    handleFollowerChange = (event) => {
        if(event.target.id === "haveFollower")
            this.setState({
                haveFollower: true
            });
        else
            this.setState({
                haveFollower: false
            });
    }
    
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    }

    finalStep = () => {
        this.setState({
            step: 5
        });
    }
    
    handleChange = (event) => {
        console.log(event.target.id, event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    renderForm = (step) => {
        switch(step) {
            case 1:
                return <NewLabor1 {...this.state} handleFollowerChange={this.handleFollowerChange} finalStep={this.finalStep} nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 2:
                return <NewLabor2 {...this.state} nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 3:
                return <NewLabor3 {...this.state} nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 4:
                return <NewLabor4 {...this.state} nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 5:
                return <RegisterComplete {...this.props} {...this.state} nextStep={this.nextStep} handleChange={this.handleChange}/>
        }
    }
    render() {
        return (
            <div>
                {this.renderForm(this.state.step)}
            </div>
        )
    }
}
export default NewLabor;
