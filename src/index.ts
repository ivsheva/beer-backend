import cors from "cors";
import "dotenv/config";
import express from "express";
import beers from "./routes/beers";
import errorHandler from "./middleware/error"

const app = express();

app.use(cors());
app.use("/api/beers", beers);
app.use(errorHandler)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App is listening on port", port);
});
