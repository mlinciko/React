import React, { Component } from 'react';
import "./categoryItem.css";
import { Link } from "react-router-dom";

class CategoryItem extends Component {
  state = {  } 
  render() { 
    return (
      <Link to={"category/" + this.props.id}>
        <div className="category" style={{backgroundColor: this.props.color}}>
            <div className="category-container">
              <img className="category-image" src={require(`/src/${this.props.icon}`)} alt="icon" />
              <div className={`category-name ${this.props.isWhite ? "white" : ""}`}>{this.props.name}</div>
              <div className={`category-desc ${this.props.isWhite ? "white" : ""}`}>{this.props.desc}</div>
            </div>
        </div>
      </Link>
    );
  }
}
 
export default CategoryItem;