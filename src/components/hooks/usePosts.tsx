import { PropsWithChildren, useMemo } from "react";
import { PostType } from "../../App";
type PostsType = {
    sort:string,
    posts:Array<PostType>
    query:string
}
type SortedPostsType = {
    sort:string,
    posts:Array<PostType>
 
}
export const useSortedPosts = (sort:string,posts:Array<PostType>,) =>{
 const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) =>
        a[sort].localeCompare(b[sort])
      );
    }
    
    return posts
  }, [sort,posts])
  return sortedPosts
}

export const usePosts = ( sort:string,
  posts:any,
  query:string) =>{
  const sortedPosts = useSortedPosts(sort,posts)
  
  const sortAndSearchPosts = useMemo(() => {
        if(query)
        return sortedPosts.filter((post) =>
        post.name.toLowerCase().includes(query.toLowerCase())
        );
      }, [query, useSortedPosts]);
    return sortAndSearchPosts
}