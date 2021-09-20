import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { MyButton } from "../../../UI/Buttons/myButton";
import './../../../../styles/styles.css'
const style = require("./Posts.module.css");

type PostsType = {
  id: string;
  name: string;
  description: string;
};

type PostType = {
  removePost: (post: PostsType) => void;
  posts: Array<PostsType>;
};
export const Posts: React.FC<PostType> = (props) => {
  return (
    
      <div>
        <TransitionGroup>
        {props.posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={300} classNames={'post'}>
            <div>
              <div className={style.post}>
                <strong>
                  {index + 1}.{post.name}
                </strong>
                {post.description}
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
