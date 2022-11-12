import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./../src/pages/ErrorPage";

import BlogLayout from "./pages/BlogLayout.jsx";
import BlogPostsPage, {
  loader as blogPostsLoader,
} from "./pages/BlogPosts.jsx";
import NewPostPage, { action as newPostAction } from "./pages/NewPost.jsx";
import PostDetailPage, {
  loader as blogPostLoader,
} from "./pages/PostDetail.jsx";
import WelcomePage from "./pages/Welcome.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
