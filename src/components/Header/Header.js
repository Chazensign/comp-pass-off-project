import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true }
  }
  closeMenu = (event) => {
    console.log(this.dropdownMenu);
    
    if (!this.dropdownMenu.contains(event.target)) {
      this.dropdownMenu.classList.remove("show-menu");
      this.dropdownMenu.classList.add("return-menu")
      setTimeout(() => {
        this.setState({ hidden: true }, () => {
          console.log('hi')
        document.removeEventListener('click', this.closeMenu)
      })
    },400)
      
    
      }
  }
  showMenu = () => {
    this.dropdownMenu.classList.remove("return-menu")
    this.dropdownMenu.classList.add("show-menu");
    this.setState({ hidden: false }, () => {
      document.addEventListener('click', this.closeMenu)
    });
  }

  render() { 
    return (
      <header>
        <div className="title">Title</div>
        <div className="menu" onClick={this.showMenu}>
          Menu
        </div>
        <div
          className="show-menu"
          ref={element => {
            this.dropdownMenu = element;
          }}
          className='show-menu'
          hidden={this.state.hidden}
        >
          <Dropdown />
        </div>
      </header>
    );
  }
}
 
export default Header;