import cors from "cors";
import "dotenv/config";
import express from "express";
import beers from "./routes/beers";
import errorHandler from "./middleware/error"
import populate from "./population/populate";

const app = express();

// uncomment if you want to populate your DB (add beerData to it)
// populate().then(response => console.log(response))

app.use(cors());
app.use("/api/beers", beers);
app.use(errorHandler)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App is listening on port", port);
});
