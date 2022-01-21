import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';



const Myposts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let updatePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <div>
        <p className={s.posts}>My post</p>
      </div>

      <div className={s.newPost}>
        <textarea ref={newPostElement} onChange={updatePost} value={props.postTextPage} />
        <input className={s.input} onClick={onAddPost} type="submit" value="Отправить" />
      </div>
      {postElements}
    </div>)


}

export default Myposts;