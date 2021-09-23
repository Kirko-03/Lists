import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PostType } from "../../Posts";
import { MyButton } from "../../../UI/Buttons/myButton";
import './../../../../styles/styles.css'
import { useHistory, useParams } from "react-router-dom";
const style = require("./PostsItem.module.css");


type PostsType = {
  removePost: (post: PostType) => void;
  posts: Array<PostType>;
};
export const PostsItem: React.FC<PostsType> = (props) => {
  let history = useHistory()
  console.log(history)
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
              <div className={style.buttons}>
              <MyButton onClick={()=> history.push(`/postPage/${post.id}`)}>Открыть пост</MyButton>
              <MyButton onClick={() => props.removePost(post)}>
                Удалить
              </MyButton>
              </div>
            </div>
            </CSSTransition>
        ))}
        </TransitionGroup>
      </div>
  );
};
