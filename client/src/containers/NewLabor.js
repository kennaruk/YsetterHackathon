import React, { Component } from 'react';
import NewLabor1 from './NewLabor1';
import NewLabor2 from './NewLabor2';
import NewLabor3 from './NewLabor3';
import NewLabor4 from './NewLabor4';
import NewLabor5 from './NewLabor5';

class NewLabor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }

    }
    
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    renderForm = (step) => {
        switch(step) {
            case 1:
                return <NewLabor1 nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 2:
                return <NewLabor2 nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 3:
                return <NewLabor3 nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 4:
                return <NewLabor4 nextStep={this.nextStep} handleChange={this.handleChange}/>
            case 5:
                return <NewLabor4 nextStep={this.nextStep} handleChange={this.handleChange}/>
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
