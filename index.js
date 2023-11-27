import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // For getting data from frontend
app.use(cors()); // For CORS Policy

// Routes
app.use(UserRoute);

// Connection to database and activate the server

db.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect ot database: ${error}`);
  });
