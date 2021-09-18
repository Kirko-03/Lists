import React, { useState } from "react";
import "./App.css";
import { PostForm } from "./components/Posts/PostForm/PostForm";
import { PostList } from "./components/Posts/PostList/PostList";

type PostType = {
  id: number;
  name: string;
  description: string;
};

function App() {
  let [posts, setPosts] = useState<Array<PostType>>([
    {
      id: 1,
      name: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.",
    },
    {
      id: 2,
      name: "Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
    {
      id: 3,
      name: "C++",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
    {
      id: 4,
      name: "C#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
  ]);
  let createPosts = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="App">
      <PostForm createPosts={createPosts} />

      <PostList posts={posts} title="Список ЯП" />
    </div>
  );
}

export default App;
