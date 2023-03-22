import React, { Component } from 'react';
import "./contactUs.css";

class CoutactUs extends Component {
  state = {  } 
  render() { 
    return (
      <div className="contact-us">
        <div className="contact-us-container">
          <div className="contact-us-left">
            <div className="contact-us-left-title">Contact us</div>
            <div className="contact-us-left-subtitle">
              Have an inquiry? We’ll be happy to assist you
            </div>
            <div className="contact-us-left-details">
              <div className="contact-us-left-details-item">
                <img src={process.env.PUBLIC_URL + "assets/icons/Phone.png"} alt="icon" />
                +92 333 6527366
              </div>
              <div className="contact-us-left-details-item">
                <img src={process.env.PUBLIC_URL + "assets/icons/Email.png"} alt="icon" />
                mlinciko2@gmail.com
              </div>
              <div className="contact-us-left-details-item">
                <img src={process.env.PUBLIC_URL + "assets/icons/Location.png"} alt="icon" />
                Plot 252, Block L Phase 2 Johar Town, Lahore, PK
              </div>
            </div>
          </div>
          <div className="contact-us-right">
          </div>
        </div>
      </div>
    );
  }
}
 
export default CoutactUs;