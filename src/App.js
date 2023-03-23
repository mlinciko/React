import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import userStore from './components/login/store/store';

class App extends Component {
  state = {  } 
  render() {
    if (!userStore.getState().isAuthorized) {
      return <Navigate to="/login" replace />;
    }

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
