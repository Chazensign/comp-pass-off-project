import React, { Component } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      
        <>
          <a>Sign Up</a>
          <hr />
          <a>Login</a>
          <hr />
          <a>More Info</a>
        </>
      
    );
  }
}
 
export default Dropdown;