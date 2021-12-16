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



const App = () => {
  return (
    <BrowserRouter>
      <div className="grid">
        <Header />
        <NavBar />
        <div className="wrapper-content">
          <Routes>
            <Route path='/mainContent' element={<MainContent />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>

      </div >
    </BrowserRouter>
  );
}

export default App;
