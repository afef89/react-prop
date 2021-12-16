import React, { Component } from 'react';
class Handlename extends Component {
    Handlename = () => {
      alert(`${this.props.FullName}`);
    };
  
    render() {
      return (
        <button onClick={this.Handlename}>Click on me</button>
      );
    }
  }
  
  export default Handlename;