import React from "react";
import { MyButton } from "../../../UI/myButtons/myButton";

const style = require("./Post.module.css");

type PostsType = {
  id: number;
  name: string;
  description: string;
};

type PostType = {
  posts: Array<PostsType>;
};
export const Posts: React.FC<PostType> = (props) => {
    const deletePost = () =>{
        props.posts.filter(post=>post.id===1)
    }
  return (
    <div>
      {props.posts.map(post => (
          <div>
        <div className={style.post}>
          <strong>
            {post.id}.{post.name} 
          </strong>
          {post.description}
        </div>
        <MyButton onClick={deletePost}>Удалить</MyButton>
        </div>
      ))}
    </div>
  );
};
