import React, { Component } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { 
        navBarElements: [
            {
                id: 1,
                text: "HOME",
                path: "/",
                children: [],
            },
            {
                id: 2,
                text: "SPEAKERS",
                path: "/",
                children: [
                    {
                        id: 2_1,
                        text: "SPEAKER 1",
                        path: "/",
                        children: [],
                    },
                    {
                        id: 2_2,
                        text: "SPEAKER 2",
                        path: "/",
                        children: [],
                    },
                    {
                        id: 2_3,
                        text: "SPEAKER 3",
                        path: "/",
                        children: [],
                    },
                ],
            },
            {
                id: 3,
                text: "SCHEDULE",
                path: "/",
                children: [
                    {
                        id: 3_1,
                        text: "WEEK",
                        path: "/",
                        children: [],
                    },
                    {
                        id: 3_2,
                        text: "MONTH",
                        path: "/",
                        children: [],
                    },
                ]
            },
            {
                id: 4,
                text: "CONTACT US",
                path: "contact-us",
                children: [],
            }
        ],
        showChildren: null,
        currentOpenedElem: null,
    } 
    render() { 
        return (
            <ul className="navbar">
                { this.getMenu() }
            </ul>
        );
    }

    getMenu() {
        return this.state.navBarElements.map( elem => {
            if (elem.children.length > 0) {
                return (
                    <li key={elem.id} onClick={() => this.handleMenuItemClick(elem)}>
                        {elem.text} {this.getArrowStyle(elem.id)}
                        <ul className={`${this.getCurrentChildrenVisibility(elem.id)} sub-list`}> 
                            {elem.children.map( child => <li key={child.id}><Link to={child.path}>{child.text}</Link></li>)}
                        </ul>
                    </li>
                );
            } else {
                return (
                    <li key={elem.id}><Link to={elem.path}>{ elem.text }</Link></li>
                )
            }
        })
    }

    getCurrentChildrenVisibility(id) {
      return this.state.showChildren === id ? 'show' : 'hide';
    }

    handleMenuItemClick = (elem) => {
      if (elem.children.length > 0) {
        if (this.state.currentOpenedElem === elem.id) {
          this.setState({showChildren: null, currentOpenedElem: null})
        }
        else this.setState({showChildren: elem.id, currentOpenedElem: elem.id})
      }
    } 

    getArrowStyle(id) {
      if (this.state.currentOpenedElem === id) {
        return <FontAwesomeIcon icon={faChevronUp} />;
      }
      else return <FontAwesomeIcon icon={faChevronDown} />;
    }
}
 
export default Navbar;