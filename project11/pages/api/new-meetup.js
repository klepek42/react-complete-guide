import { MongoClient } from "mongodb";

// /api/new-meetup
// endpoint for creating a new meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://reactcomplete:QXFI7W0D6QFuvVEp@cluster0.bdepqdo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log("result", result);

    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
