import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogLayout from "./pages/BlogLayout.jsx";
import BlogPostsPage from "./pages/BlogPosts.jsx";
import NewPostPage from "./pages/NewPost.jsx";
import PostDetailPage from "./pages/PostDetail.jsx";
import RootLayout from "./components/RootLayout.jsx";
import WelcomePage from "./pages/Welcome.jsx";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogPostsPage />} />
            <Route path=":id" element={<PostDetailPage />} />
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
