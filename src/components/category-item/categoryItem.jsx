import React, { Component } from 'react';
import "./categoryItem.css";

class CategoryItem extends Component {
  state = {  } 
  render() { 
    console.log(this.props, process.env.PUBLIC_URL);
    return (
      <div className="category" style={{backgroundColor: this.props.color}}>
        <div className="category-container">
          <img className="category-image" src={process.env.PUBLIC_URL + this.props.icon} alt="icon" />
          <div className={`category-name ${this.props.isWhite ? "white" : ""}`}>{this.props.name}</div>
          <div className={`category-desc ${this.props.isWhite ? "white" : ""}`}>{this.props.desc}</div>
        </div>
      </div>
    );
  }
}
 
export default CategoryItem;