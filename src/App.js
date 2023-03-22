import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import React, { Component } from 'react';
import { Outlet } from "react-router-dom";

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Header></Header>
        <Outlet /> 
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
 
export default App;
