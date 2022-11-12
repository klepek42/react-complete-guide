import MainNavigation from "../components/MainNavigation.jsx";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content"></main>
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
      <p>{error.status}</p>
    </>
  );
};

export default ErrorPage;
