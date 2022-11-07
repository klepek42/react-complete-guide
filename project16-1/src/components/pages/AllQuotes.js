import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Steve Jobs", text: "Stay folish, stay hungry!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
