import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cms.finnair.com/resource/blob/721284/0511bb2bc91953d4ef3506d00933819b/tokyo-main-data.jpg"
      title="Rainbow Meetup"
      address="Shibuya 109, Tokyo"
      description="Let's have a lot of fun in the center of Japan."
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  console.log("meetupId", meetupId);

  return {
    props: {
      meetupData: {
        image: "",
        id: "",
        address: "",
        description: "",
      },
    },
  };
}

export default MeetupDetails;
