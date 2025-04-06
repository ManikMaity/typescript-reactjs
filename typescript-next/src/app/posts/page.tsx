import { getPosts } from "@/actions/post";
import PostCard from "./_components/PostCard";
import { PostProp } from "@/types/types";

export default async function Posts() {

    const data : PostProp[] = await getPosts();

  return (
    <div className="flex gap-2 flex-wrap">
        {data.map((post : PostProp) => <PostCard key={post.id} id={post.id} title={post.title} body={post.body}/>)}
    </div>
  )
}
