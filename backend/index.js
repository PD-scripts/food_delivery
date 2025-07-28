const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");   // <-- add this
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const MONGO_URL =
  "mongodb+srv://root:root@completecoding.1qfvzlo.mongodb.net/gofood?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
  .then(async () => {
    console.log("connected");

    app.get("/", async (req, res) => {
      const items = await mongoose.connection.db
        .collection("food_items")
        .find({})
        .toArray();
      res.json(items);
    });

    app.use('/api', require("./Routes/CreateUser"));

    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  })
  .catch((err) => console.log("error", err));
