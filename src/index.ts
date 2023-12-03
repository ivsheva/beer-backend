import express from "express"
import "dotenv/config"
import cors from "cors";

const app = express()

app.use(cors());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App is listening on port", port)
})