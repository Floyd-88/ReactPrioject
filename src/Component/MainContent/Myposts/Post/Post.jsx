import React from 'react';
import s from "./Post.module.css"

const Post = (props) => {
  console.log(props.massege);
  return (
    <div>
      
      <div className={s.post}>
        {props.message}
      </div>
    </div>)


}

export default Post;