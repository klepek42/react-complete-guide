import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout.jsx";
import BlogPostsPage, {
  loader as blogPostsLoader,
} from "./pages/BlogPosts.jsx";
import NewPostPage from "./pages/NewPost.jsx";
import PostDetailPage, {
  loader as blogPostLoader,
} from "./pages/PostDetail.jsx";
import WelcomePage from "./pages/Welcome.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
