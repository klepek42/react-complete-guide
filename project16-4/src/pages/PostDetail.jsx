import BlogPost from "../components/BlogPost.jsx";
import { getPost } from "../util/api.js";
import { useLoaderData } from "react-router-dom";

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
