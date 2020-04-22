import React from 'react';
import styled from "styled-components";
import FormBox from "./FormBox";

const PeriodicJSON = require('../PeriodicTableJSON.json');
const eleArray = PeriodicJSON.elements



const InputForms = styled.input `
    border-style: inset;
    border-width: 15px;
    border-color: green;
    text-align: center;
    background-color: 336600;
    text-color: white;
`

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        element: '',
        answer: ''
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  async handleChange(event) {
   await this.setState({value: event.target.value});
    let stringing = this.state.value;
    let stringArr = (stringing.replace(/([A-Z])/g, ' $1').trim()).split(" ");
    let ans = [];
    for(let e in eleArray) {
      for(let i = 0 ; i < stringArr.length ; i++) {
        let testString = stringArr[i]
        if(testString.replace(/[0-9]/g, '') === eleArray[e].symbol) {
          let str = stringArr[i]
          let numbArr = [];
            for (var int = 0; int < str.length; int++) {
            let char = str.charAt(int);   
                
            if(char >= '0' && char <= '9') {
              numbArr.push(char);
            }
          }
          if(numbArr.length > 0) {
            console.log(numbArr.join(''))
            ans.push(parseFloat(eleArray[e].atomic_mass)*(parseFloat(numbArr.join(''))-1));
          }
          ans.push(eleArray[e].atomic_mass);
          this.setState({element: ans.reduce((a, b) => a + b, 0)});
        } else {
        }
      }
    }
    }


    
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.answer);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <form>
                <h1>Grams Per Mole Calculator</h1>
                <h5>Now With Numbers!</h5>
                 <InputForms id="InputFormVal" type="text" name="CompoundOrMolecule" value={this.state.value} onChange={this.handleChange} placeholder="Chemical Formula" /> 
                 <FormBox text={this.state.element} />
             </form>
        </div>
        </form>


      );
    }
  }

    



export default InputForm;
