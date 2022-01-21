import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import MainContent from './Component/MainContent/MainContent';
import News from './Component/News/News';
import Music from './Component/Music/Music';
import Settings from './Component/Settings/Settings';
import { Routes, Route } from 'react-router-dom';
import UsersConteiner from './Component/Users/UsersContainer';
import DialogsContainer from './Component/Dialogs/DialogsContainer';
const App = (props) => {

  return (
      <div className="grid">
        <Header />
        <NavBar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/mainContent' element={<MainContent />} />
            
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersConteiner />} />
          </Routes>
        </div>

      </div >
  );
}

export default App;
