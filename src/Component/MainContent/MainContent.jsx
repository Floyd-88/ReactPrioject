import React from 'react';
import s from "./MainContent.module.css"
import Myposts from './Myposts/Myposts';
import Myprofile from './Myprofile/Myprofile';

const MainContent = (props) => {
  return(
  <div>
    <Myprofile />  
    <Myposts posts={props.variable.postData} 
    dispatch = {props.dispatch} 
    postTextPage = {props.variable.postTextPage} />
  </div>)
}

export default MainContent;