import React, { Component } from 'react';
import "./header.css";
import Navbar from '../navbar/navbar';

class Header extends Component {
    state = { }
     
    render() { 
        return (
            <div className="header">
              <div className="header-container">
                  <div className="header-logo">
                      Musik.
                  </div>
                  <Navbar></Navbar>
                  <div className="header-button">
                      <button>GET TICKETS</button>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Header;