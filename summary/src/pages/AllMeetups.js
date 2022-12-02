import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://react-summary-f3b83-default-rtdb.europe-west1.firebasedatabase.app/meetup.json"
  )
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(true);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Is loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
