import { useLoaderData } from "react-router-dom";

import Posts from "../components/Posts.jsx";
import { getPosts } from "../util/api.js";

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}
