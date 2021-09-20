import { Posts } from "./PostsItem/Posts";

const style = require("./PostList.module.css");

type PostType = {
  id: string;
  name: string;
  description: string;
};

type PostListType = {
  removePost:(post:PostType)=>void
  posts: any
  title: string;
};

export const PostList: React.FC<PostListType> = (props) => {
  return (
    <div className={style.postList}>
      {props.posts.length?<h1>{props.title}</h1>:<h1>Posts not found</h1>}
      <Posts removePost={props.removePost} posts={props.posts} />  
    </div>
  );
};
