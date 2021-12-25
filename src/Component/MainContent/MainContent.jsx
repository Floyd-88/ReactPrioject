import React from 'react';
import s from "./MainContent.module.css"
import Myposts from './Myposts/Myposts';
import Myprofile from './Myprofile/Myprofile';

const MainContent = () => {
  return(
  <div>
    <Myprofile />  
    <Myposts />
  </div>)
}

export default MainContent;