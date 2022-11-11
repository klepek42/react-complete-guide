import { Outlet } from "react-router-dom";

import BlogActions from "../components/BlogActions.jsx";

function BlogLayout() {
  return (
    <>
      <BlogActions />
      <Outlet />
    </>
  );
}

export default BlogLayout;
