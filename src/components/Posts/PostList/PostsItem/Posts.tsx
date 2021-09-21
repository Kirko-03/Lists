import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PostType } from "../../../../App";
import { MyButton } from "../../../UI/Buttons/myButton";
import './../../../../styles/styles.css'
const style = require("./Posts.module.css");


type PostsType = {
  removePost: (post: PostType) => void;
  posts: Array<PostType>;
};
export const Posts: React.FC<PostsType> = (props) => {
  return (
    
      <div>
        <TransitionGroup>
        {props.posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={300} classNames={'post'}>
            <div>
              <div className={style.post}>
                <strong>
                  {index + 1}.{post.title}
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
