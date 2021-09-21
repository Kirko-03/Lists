import axios from "axios";
import React, {useEffect, useState } from "react";

import "./App.css";
import { postsAPI } from "./components/API/postsAPI";
import { usePosts } from "./components/hooks/usePosts";
import { PostForm } from "./components/Posts/PostForm/PostForm";
import { PostFilter } from "./components/Posts/PostList/PostFilter";
import { PostList } from "./components/Posts/PostList/PostList";
import { MyButton } from "./components/UI/Buttons/myButton";
import { Loader } from "./components/UI/Loader/Loader";
import { MyModal } from "./components/UI/Modals/MyModal";

export type PostType = {
  [key: string]: any;
  id: number;
  title: string;
  body: string;
};
export type FilterType = {
  sort: string;
  query: string;
};

function App() {
  
 
  let [activeModal,setActiveModal] = useState<boolean>(false)
  let [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
  let [posts, setPosts] = useState<Array<PostType>>([]);
  let [isLoading,setIsLoading] = useState<boolean>(true)
  const sortedPosts=usePosts(filter.sort,posts,filter.query)
  useEffect(()=>{
    fetchPosts()
  },[])
  async function fetchPosts(){
    setIsLoading(true)
    let response=await postsAPI.fetchPosts()
       setPosts(response)
       setIsLoading(false)
    }
 

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
      {isLoading?<Loader/>:<PostList
        removePost={removePost}
        posts={sortedPosts}
        title="Список ЯП"
      />}
    </div>
  );
}

export default App;
