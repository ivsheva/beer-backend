import cors from "cors";
import "dotenv/config";
import express from "express";
import beers from "./routes/beers";

const app = express();

app.use(cors());
app.use("/api/beers", beers);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App is listening on port", port);
});
