import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';

const Myposts = () => {
  return(
  <div>
    <div>
      <p className={s.posts}>My post</p>
    </div>

    <div className={s.newPost}>
      <textarea></textarea>
      <input className={s.input} type="submit" value="Отправить" />
    </div>
    <Post />
    <Post />
    <Post />
  </div>)


}

export default Myposts;