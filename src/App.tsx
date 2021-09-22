import React, { useEffect, useState } from "react";

import "./App.css";
import { postsAPI } from "./components/API/postsAPI";
import { useFetching } from "./components/hooks/useFetching";
import { usePosts } from "./components/hooks/usePosts";
import { PostForm } from "./components/Posts/PostForm/PostForm";
import { PostFilter } from "./components/Posts/PostList/PostFilter";
import { PostList } from "./components/Posts/PostList/PostList";
import { MyButton } from "./components/UI/Buttons/myButton";
import { Loader } from "./components/UI/Loader/Loader";
import { MyModal } from "./components/UI/Modals/MyModal";
import { getPagesCount, Pagination } from "./components/utils/Paginator";

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
  let [activeModal, setActiveModal] = useState<boolean>(false);
  let [filter, setFilter] = useState<FilterType>({ sort: "", query: "" });
  let [posts, setPosts] = useState<Array<PostType>>([]);
  let [totalPages, setTotalPages] = useState<number>(0);
  let limit = 10
  let [page, setPage] = useState<number>(1);

  const sortedPosts = usePosts(filter.sort, posts, filter.query);
  let { isLoading, error, fetchPosts } = useFetching(async (limit,page) => {
    const response = await postsAPI.fetchPosts(limit, page);
    setPosts(response.data);
    console.log(response);
    let totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  let createPost = (newPost: PostType) => {
    setPosts([newPost, ...posts]);
  };
  useEffect(() => {
    fetchPosts(limit,page);
  }, [page]);
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
      {isLoading ? (
        <Loader />
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedPosts}
          title="Список ЯП"
        />
      )}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
