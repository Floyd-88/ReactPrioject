import React from 'react';
import s from "./Myposts.module.css";
import Post from './Post/Post';

const Myposts = () => {

  let postData = [
    { id: 1, message: 'Это мое первое сообщение!!!' },
    { id: 2, message: 'Привет всем!!!' },
    { id: 3, message: 'Как дела?!' }
  ]

  let postElements = postData.map(p => <Post message={p.message} />)

  return (
    <div>
      <div>
        <p className={s.posts}>My post</p>
      </div>

      <div className={s.newPost}>
        <textarea></textarea>
        <input className={s.input} type="submit" value="Отправить" />
      </div>
      {postElements}
    </div>)


}

export default Myposts;