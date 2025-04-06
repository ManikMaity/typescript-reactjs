"use client";
import { PostProp } from "@/types/types"
import { useRef } from "react";

function PostCard({
    title,
    body,
    id

} : PostProp) {


  const textRef = useRef<HTMLInputElement | null>(null);

  function handleRefClick (e : React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    console.log(textRef.current?.value);
  }


  function handleDelete(e : React.MouseEvent<HTMLButtonElement>, postId : number) {
    e.preventDefault();
    console.log("deleted post", postId);
  }

  return (
    <div className="p-4 border border-solid border-black flex flex-col max-w-lg bg-gray-900">
      <h1>{title}</h1>
      <p>{body}</p>
      <input type="text" name="" id="" ref={textRef} />
      <button onClick={handleRefClick}>Get Input Value</button>
      <button onClick={(e) => handleDelete(e, id)}>Delete</button>
    </div>
  )
}

export default PostCard
