import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PostType } from "../../Posts";
import { MyButton } from "../../../UI/Buttons/myButton";
import './../../../../styles/styles.css'
const style = require("./PostsItem.module.css");


type PostsType = {
  removePost: (post: PostType) => void;
  posts: Array<PostType>;
};
export const PostsItem: React.FC<PostsType> = (props) => {
  return (
    
      <div>
        <TransitionGroup>
        {props.posts.map((post) => (
          <CSSTransition key={post.id} timeout={300} classNames={'post'}>
            <div>
              <div className={style.post}>
                <strong>
                  {post.id}.{post.title}
                </strong>
                {post.body}
              </div>
              <MyButton onClick={() => props.removePost(post)}>
                Удалить
              </MyButton>
            </div>
            </CSSTransition>
        ))}
        </TransitionGroup>
      </div>
  );
};
