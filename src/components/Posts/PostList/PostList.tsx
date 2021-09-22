import { PostType } from "../Posts";
import { PostsItem } from "./PostsItem/PostsItem";

const style = require("./PostList.module.css");


type PostListType = {
  removePost:(post:PostType)=>void
  posts: Array<PostType>
  title: string;
};

export const PostList: React.FC<PostListType> = (props) => {
  return (
    <div className={style.postList}>
      {props.posts.length?<h1>{props.title}</h1>:<h1>Posts not found</h1>}
      <PostsItem removePost={props.removePost} posts={props.posts} />  
    </div>
  );
};
