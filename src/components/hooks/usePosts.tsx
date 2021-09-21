import { useMemo } from "react";
import { PostType } from "../../App";

export const useSortedPosts = (sort: string, posts: Array<PostType>) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (
  sort: string,
  posts: Array<PostType>,
  query: string
) => {
  const sortedPosts = useSortedPosts(sort, posts);

  const sortAndSearchPosts = useMemo(() => {
   
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
  }, [query, sortedPosts]);
  return sortAndSearchPosts;
};
