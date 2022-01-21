import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, updatePostActionCreater } from '../../variable/postPage-reducer';
import Myposts from './Myposts';

// const MypostsContainer = (props) => {
// let state = props.store.getState();

// let addPost = () => {
//     props.store.dispatch( addPostActionCreater() );
//   };

//   let updatePost = (text) => {
//     let action = updatePostActionCreater(text);
//     props.store.dispatch(action);
//   }

//   return < Myposts updateNewPostText = {updatePost} 
//                    addPost = {addPost} 
//                    posts={state.postPage.postData} 
//                    postTextPage = {state.postPage.postTextPage} />
// }

const mapStateToProps = (variable) => {
  return {
    posts: variable.postPage.postData,
    postTextPage: variable.postPage.postTextPage,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updatePostActionCreater(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    }
  }

}

const MypostsContainer = connect(mapStateToProps, mapDispathToProps)(Myposts);

export default MypostsContainer;