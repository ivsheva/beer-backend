import express from "express";
import { getBeers } from "../controllers/beers";

const router = express.Router();

router.get("/", getBeers);

export default router;
