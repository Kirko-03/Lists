import React, { useEffect, useRef, useState } from "react";

import "./Posts.css";
import { postsAPI } from "../API/postsAPI";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { PostForm } from "./PostForm/PostForm";
import { PostFilter } from "./PostList/PostFilter";
import { PostList } from "./PostList/PostList";
import { MyButton } from "../UI/Buttons/myButton";
import { Loader } from "../UI/Loader/Loader";
import { MyModal } from "../UI/Modals/MyModal";
import { getPagesCount, Pagination } from "../utils/Paginator";
import { useObserver } from "../hooks/useObserver";

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

function Posts() {
  let [activeModal, setActiveModal] = useState<boolean>(false);
  let [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
  let [posts, setPosts] = useState<Array<PostType>>([]);
  let [totalPages, setTotalPages] = useState<number>(0);
  let [limit,setLimit] = useState<number>(10)
  let [page, setPage] = useState<number>(1);
  let lastElement = useRef<any>()
  console.log(lastElement);
  const sortedPosts = usePosts(filter.sort, posts, filter.query);
  let  [isPostsLoading, error, fetchPosts] = useFetching(async (limit,page) => {
    const response = await postsAPI.fetchPosts(limit, page);
    setPosts(response.data);
    let totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  useObserver(lastElement,page<totalPages,isPostsLoading,()=>{
    setPage(page+1)
  })
  let createPost = (newPost: PostType) => {
    setPosts([newPost, ...posts]);
  };
  useEffect(() => {
    //@ts-ignore
    fetchPosts().then(res=>res);
  }, [page,limit]);
  let removePost = (thisPost: PostType) => {
    setPosts(posts.filter((post) => post.id !== thisPost.id));
  };
  return (
    <div className="App">
      {activeModal ? (
        <MyModal active={activeModal} setActive={setActiveModal}>
          <PostForm setActive={setActiveModal} createPost={createPost} />
        </MyModal>
      ) : (
        ""
      )}

      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton
        onClick={() => {
          setActiveModal(true);
        }}
      >
        Create Post
      </MyButton>
      {error && <h2 style={{ color: "red" }}>Произошла ошибка {error}</h2>}
      
      {isPostsLoading ? (
        <Loader />
      ) : (
       <div><PostList
          removePost={removePost}
          posts={sortedPosts}
          title="Список ЯП"
        /> <div ref={lastElement} style={{height: '20px', backgroundColor:'white'}}/></div> 
      )}
      
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}

export default Posts;
