import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsAPI } from "../../../../API/postsAPI";
import { useFetching } from "../../../../hooks/useFetching";
import { Loader } from "../../../../UI/Loader/Loader";

const style = require("./PostPageId.module.css");

type ParamsType = {
  id: string;
};
type PostsType = {
  title: string;
  body: string;
};
type CommentsType = {
  email: string;
  body: string;
};

const PostPageId = () => {
  let [post, setPost] = useState<PostsType>();
  let [comments, setComments] = useState<Array<CommentsType>>([]);
  let params = useParams<ParamsType>();
  console.log(params);

  let [isLoadingId, errorId, fetchPostsId] = useFetching(async () => {
    const response = await postsAPI.fetchPostId(params.id);
    setPost(response.data);
  });
  let [isLoadingCom, errorCom, fetchComments] = useFetching(async () => {
    const response = await postsAPI.fetchComments(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    //@ts-ignore
    fetchPostsId();
    //@ts-ignore
    fetchComments();
  }, []);
  return (
    <div >
      <div className={style.head}>
        Это страница под номером {params.id}
        <h2 className={style.error}>{errorId ? errorId : ""}</h2>
        {isLoadingId ? (
          <Loader />
        ) : (
          <div>
            <h4>Название</h4>
            {post?.title}
            <div className={style.body}>
              <h5>Содержание</h5>
              {post?.body}
            </div>
          </div>
        )}
      </div>
      {isLoadingCom ? (
        <Loader />
      ) : (
        <div className={style.comments}>
          {comments.map((comment) => (
            <div className={style.comment}>
              {comment.email} прокоментировал:
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default PostPageId;
