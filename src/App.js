import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import MainContent from './Component/MainContent/MainContent';
import Dialogs from './Component/Dialogs/Dialogs';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Frends from './Component/Frends/Frends';
const App = (props) => {

  return (
    <BrowserRouter>
      <div className="grid">
        <Header />
        <NavBar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/mainContent' element={<MainContent 
            variable={props.variable.postPage} 
            dispatch = {props.dispatch} 
            />} />
            
            <Route path='/dialogs/*' element={<Dialogs 
            variable={props.variable.dialogsPage} 
            dispatch={props.dispatch} />} />
            
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/frends' element={<Frends variable={props.variable.sidebar}/>} />
          </Routes>
        </div>

      </div >
    </BrowserRouter>
  );
}

export default App;
