import { useEffect, useState } from "react";
import { Post } from "../../api/types/Post";
import { usePostQuery } from "../../api/queries/post";

export default function Posts() {
  const { data: articles = [], isLoading, isError, error } = usePostQuery();
  const [posts, setPosts] = useState<Post[]>([]);

  // 초기값 설정
  useEffect(() => {
    if (!isLoading) {
      setPosts(articles);
    }
  }, [articles, isLoading]);

  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <h1>포스트</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            {post.body}
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
