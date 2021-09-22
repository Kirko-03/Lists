import React, { useState } from "react";
import { PostType } from "../Posts";
import { MyButton } from "../../UI/Buttons/myButton";
import { MyInput } from "../../UI/Inputs/myInput";
type PostFormPropsType = {
  setActive: (active: boolean) => void;
  createPost: (newPost: PostType) => void;
};
export const PostForm: React.FC<PostFormPropsType> = (props) => {
  let [newPost, setNewPost] = useState({ title: "", body: "" });
  let [error, setError] = useState<boolean>(false);
  let post = {
    ...newPost,
    id: Date.now(),
  };
  const addPost = () => {
    setError(true);
    if (newPost.title.length !== 0 && newPost.body.length !== 0) {
      props.setActive(false)
      setError(false);
      setNewPost({ title: "",body: "" });
      props.createPost(post);
    }
  };
  const errorStyle = {
    border: error ? "1px solid red" : "1px solid black",
    
  };
  return (
    <div>
      <MyInput
        type="text"
        style={errorStyle}
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        placeholder={error ? "name post not found" : "name post"}
      />

      <MyInput
        type="text"
        style={errorStyle}
        value={newPost.body}
        onChange={(e) =>
          setNewPost({ ...newPost, body: e.target.value })
        }
        placeholder={error ? "description post not found" : "description post"}
      />
      <MyButton onClick={addPost}>add post</MyButton>
    </div>
  );
};
