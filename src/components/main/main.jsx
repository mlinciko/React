import React, { Component } from 'react';
import main from "../../assets/images/main.svg";
import "./main.css";
import Category from '../category/category';

class Main extends Component {
  state = {  } 
  render() { 
    return (
      <div className="main">
        <div className="main-first">
          <div className="main-title">
            The Best experience of <span className="pink">Music</span> in 2021
          </div>
          <div className="main-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
          </div>
        </div>
        <Category></Category>
      </div>
    );
  }
}
 
export default Main;