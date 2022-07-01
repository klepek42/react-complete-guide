import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
    address: "Google Platz 1, 99009 München",
    description: "Ein lustiges Meetup für alle Münchener!",
  },
  {
    id: "m2",
    title: "Rainbow Meetup",
    image:
      "https://cms.finnair.com/resource/blob/721284/0511bb2bc91953d4ef3506d00933819b/tokyo-main-data.jpg",
    address: "Shibuya 109, Tokyo",
    description: "Let's have a lot of fun in the center of Japan.",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
