import React, { useState } from "react";
import { MyButton } from "../../UI/Buttons/myButton";
import { MyInput } from "../../UI/Inputs/myInput";
type PostType = {
  id: string;
  name: string;
  description: string;
  
};

type PostFormPropsType = {
  setActive: (active: boolean) => void;
  createPost: (newPost: PostType) => void;
};
export const PostForm: React.FC<PostFormPropsType> = (props) => {
  let [newPost, setNewPost] = useState({ name: "", description: "" });
  let [error, setError] = useState<boolean>(false);
  let post = {
    ...newPost,
    id: String(Date.now()),
  };
  const addPost = () => {
    setError(true);
    if (newPost.name.length !== 0 && newPost.description.length !== 0) {
      props.setActive(false)
      setError(false);
      setNewPost({ name: "", description: "" });
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
        value={newPost.name}
        onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
        placeholder={error ? "name post not found" : "name post"}
      />

      <MyInput
        type="text"
        style={errorStyle}
        value={newPost.description}
        onChange={(e) =>
          setNewPost({ ...newPost, description: e.target.value })
        }
        placeholder={error ? "description post not found" : "description post"}
      />
      <MyButton onClick={addPost}>add post</MyButton>
    </div>
  );
};
