import { useQuery } from "@tanstack/react-query";
import { Post } from "../types/Post";
import { getPosts } from "../post";

export const usePostQuery = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5,
  });
};
