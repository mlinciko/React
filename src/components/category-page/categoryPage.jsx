import "./categoryPage.css";
import React from 'react';
import { useParams } from 'react-router-dom';
import { CATEGORIES } from "../../models/dictionaries";

const CategoryPage = () => {
  const { id } = useParams();
  const category = CATEGORIES.find((item) => item.id === Number(id));
  return (
    <div className="category-wrapper">
      <div className="category" style={{backgroundColor: category.color}}>
        <div className="category-container">
          <img className="category-image" src={require(`/src/${category.icon}`)} alt="icon" />
          <div className={`category-name ${category.isWhite ? "white" : ""}`}>{category.name}</div>
          <div className={`category-desc ${category.isWhite ? "white" : ""}`}>{category.desc}</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;