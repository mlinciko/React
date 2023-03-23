import React, { Component } from 'react';
import CategoryItem from '../category-item/categoryItem';
import "./category.css";
import { CATEGORIES } from "../../models/dictionaries";

class Category extends Component {
  state = { 
    categories: CATEGORIES
   } 
  render() { 
    return (
      <div className="categories">
        {this.state.categories.map(category => 
        <CategoryItem 
          key={category.id} 
          id={category.id} 
          name={category.name}
          desc={category.desc}
          icon={category.icon}
          color={category.color}
          isWhite={category.isWhite}
        ></CategoryItem>)}
      </div>
    );
  }
}
 
export default Category;