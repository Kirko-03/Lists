import React, { useMemo, useState } from "react";

import "./App.css";
import { usePosts } from "./components/hooks/usePosts";
import { PostForm } from "./components/Posts/PostForm/PostForm";
import { PostFilter } from "./components/Posts/PostList/PostFilter";
import { PostList } from "./components/Posts/PostList/PostList";
import { MyButton } from "./components/UI/Buttons/myButton";
import { MyModal } from "./components/UI/Modals/MyModal";

export type PostType = {
  [key: string]: string;
  id: string;
  name: string;
  description: string;
};
export type FilterType = {
  sort: string;
  query: string;
};

function App() {
  let [activeModal,setActiveModal] = useState<boolean>(false)
  let [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
  let [posts, setPosts] = useState<Array<PostType>>([
    {
      id: "1",
      name: "JavaScript",
      description:
        "aLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.",
    },
    {
      id: "2",
      name: "Python",
      description:
        "cLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
    {
      id: "3",
      name: "C++",
      description:
        "bLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
    {
      id: "4",
      name: "C#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium vitae nobis aut similique, commodi odit obcaecati dolorum nostrum reiciendis ratione asperiores sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum impedit consequuntur repudiandae, nemo error quasi accusantium ",
    },
  ]);
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    
    return posts
  }, [filter.sort,posts])

  let createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };
  let removePost = (thisPost: PostType) => {
    setPosts(posts.filter((post) => post.id !== thisPost.id));
  };
  return (
    <div className="App">
      {activeModal?
      
      <MyModal active={activeModal} setActive={setActiveModal}>
        <PostForm setActive={setActiveModal} createPost={createPost} />
      </MyModal>
      :''}
     
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton onClick={()=>{setActiveModal(true)}}>Create Post</MyButton>
      <PostList
        removePost={removePost}
        posts={sortedPosts}
        title="Список ЯП"
      />
    </div>
  );
}

export default App;
