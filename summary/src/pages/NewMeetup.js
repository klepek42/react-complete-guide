import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetup() {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-summary-f3b83-default-rtdb.europe-west1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: { "Content-Type": "application/json" },
      }
    ).then(() => history.replace("/"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
