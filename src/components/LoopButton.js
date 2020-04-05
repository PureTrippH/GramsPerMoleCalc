import React from 'react';
import styled from "styled-components";
const PeriodicJSON = require('../PeriodicTableJSON.json');
const eleArray = PeriodicJSON.elements


class TestLoop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
    };
}
  
goThroughEle() {
    for(let e in eleArray) {
        console.log(eleArray[e].name);
    }
  }

  test() {
      console.log("hello World");
  }

render() {
    return (
        <div>
            <button onClick={this.goThroughEle}></button>
        </div>
    );
  }

}

export default TestLoop;