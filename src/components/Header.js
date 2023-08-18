import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: MenuItems
    }
  }

  handleClick = (navItem) => {
    const updatedNavItems = [...this.state.navItems];
    for (let i = 0; i < updatedNavItems.length; i++) {
      const item = updatedNavItems[i];
      item.active = false;
      if (item.id === navItem.id) {
        item.active = true;
      }    
    }  
    this.setState({ navItems: updatedNavItems });
  }

  linkClassProps(navItem) {
    const baseText = 'flex-sm-fill text-sm-center nav-link active'    
    if (navItem.active) {
      return `"${baseText} reverse" aria-current="page"`;
    } else {
      return `"${baseText}"`;
    }    
  }

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills flex-column flex-sm-row">
              {/* <li class="nav-item">
                <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/">Home</Link>  
              </li>
              <li class="nav-item">
                <Link class="flex-sm-fill text-sm-center nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="flex-sm-fill text-sm-center nav-link" to="/contact">Contact</Link>
              </li> */}
              {/* {this.state.navItems.map(navItem => ( */}
              {this.state.navItems.filter(navItem => navItem.visible).map(navItem => (
                <li className="nav-item" key={navItem.id}>
                  <Link
                    className={this.linkClassProps(navItem)}
                    to={navItem.href}
                    onClick={() => this.handleClick(navItem)}
                  >
                    {navItem.linkText}
                  </Link>
                </li>
              ))}
            </ul>            
          </div>
        </div>
      </nav>

    );
  }
}

export default Header;