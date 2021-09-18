import { Posts } from "./Post/Post";

const style = require("./PostList.module.css");

type PostsType = {
  id: number;
  name: string;
  description: string;
};

type PostListType = {
  posts: Array<PostsType>;
  title: string;
};

export const PostList: React.FC<PostListType> = (props) => {
  return (
    <div className={style.postList}>
      <h1>{props.title}</h1>
      <Posts posts={props.posts} />  
    </div>
  );
};
