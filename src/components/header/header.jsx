import React, { Component } from 'react';
import "./header.css";
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { logoutUser } from '../login/auth';
import userStore from '../login/store/store';

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
              <Link to="/login" onClick={this.handleLogoutClick}>
                <div className="header-logout">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
              </Link>
            </div>
        );
    }

    handleLogoutClick = () => {
      logoutUser();
      console.log(userStore.getState())
    }
}
 
export default Header;