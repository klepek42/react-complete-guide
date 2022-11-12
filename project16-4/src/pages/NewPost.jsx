import {
  useNavigate,
  useActionData,
  useNavigation,
  redirect,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm.jsx";
import { savePost } from "../util/api.js";

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      {data && data.status && <p>{data.messag}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }
  return redirect("/blog");
}
