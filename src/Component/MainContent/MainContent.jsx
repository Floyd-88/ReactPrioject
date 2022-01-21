import React from 'react';
import s from "./MainContent.module.css"
import MypostsContainer from './Myposts/MypostsContainer';
import Myprofile from './Myprofile/Myprofile';

const MainContent = (props) => {
  return(
  <div>
    <Myprofile />  
    <MypostsContainer />
  </div>)
}

export default MainContent;