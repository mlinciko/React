import React, { Component } from 'react';
import CategoryItem from '../category-item/categoryItem';
import "./category.css";

class Category extends Component {
  state = { 
    categories: [
      {
        id: 1,
        name: "Pop",
        desc: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
        icon: "assets/icons/pop.png",
        color: "#FAF3E8",
        isWhilte: false,
      },
      {
        id: 2,
        name: "Folk",
        desc: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
        icon: "assets/icons/folk.png",
        color: "#FFEDED",
        isWhilte: false,
      },
      {
        id: 3,
        name: "Instrumental",
        desc: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
        icon: "assets/icons/instrumental.png",
        color: "#381DDB",
        isWhilte: true,
      },
      {
        id: 4,
        name: "Rock",
        desc: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
        icon: "assets/icons/rock.png",
        color: "#F8E4F5",
        isWhilte: false,
      },
      {
        id: 5,
        name: "Jazz",
        desc: "Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae",
        icon: "assets/icons/jazz.png",
        color: "#F3F9FF",
        isWhilte: false,
      },
    ]
   } 
  render() { 
    return (
      <div className="categories">
        {this.state.categories.map(category => 
        <CategoryItem 
          key={category.id} 
          name={category.name}
          desc={category.desc}
          icon={category.icon}
          color={category.color}
          isWhite={category.isWhilte}
        ></CategoryItem>)}
      </div>
    );
  }
}
 
export default Category;