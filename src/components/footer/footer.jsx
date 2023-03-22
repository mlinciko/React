import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import "./footer.css";
import Facebook from "../../assets/icons/Facebook.png";
import Instagram from "../../assets/icons/Instagram.png";
import Linkedin from "../../assets/icons/Linkedin.png";
import Twitter from "../../assets/icons/Twitter.png";

class Footer extends Component {
  state = { 
    icons: [
      {
        name: "Facebook",
        src: Facebook,
      },
      {
        name: "Instagram",
        src: Instagram
      },
      {
        name: "Linkedin",
        src: Linkedin
      },
      {
        name: "Twitter",
        src: Twitter
      }
    ]
   } 
  render() { 
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            Musik.
          </div>
          <div className="footer-info">
            <Navbar></Navbar>
            <div className="footer-icons">
              {this.state.icons.map( icon => <img src={icon.src} alt={icon.name} key={icon.name}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Footer;