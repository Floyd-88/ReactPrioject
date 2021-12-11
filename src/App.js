import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import NavBar from './Component/NavBar';
import MainContent from './Component/MainContent';


const App = () => {
  return (
    <div className="grid">
      <Header />
      <NavBar />
      <MainContent /> 
    </div >
  );
}

export default App;
