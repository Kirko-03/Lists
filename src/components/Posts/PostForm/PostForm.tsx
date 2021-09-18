import React, { useState } from "react"
import { MyButton } from "../../UI/myButtons/myButton"
import { MyInput } from "../../UI/myInputs/myInput"
type PostType = {
  id:number
  name: string;
  description: string;
};

type PostFormPropsType={
  createPosts:(newPost:PostType)=>void
}
export const PostForm:React.FC<PostFormPropsType> = (props) =>{
  let [newPost, setNewPost] = useState({ name: "", description: "" });
  let post = {
    ...newPost,id:Date.now()
  }
  const addPost = () => {
    setNewPost({ name: "", description: "" })
    props.createPosts(post)
  };
  return  <div>
        <MyInput
        type="text"
        value={newPost.name}
        onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
        placeholder="name post"
      />
     
      <MyInput
        type="text"
        value={newPost.description}
        onChange={(e) =>
          setNewPost({ ...newPost, description: e.target.value })
        }
        placeholder="description post"
      />
      <MyButton onClick={addPost}>add post</MyButton>
    </div>
}