import express from "express";
import { configDotenv } from "dotenv";
import { route } from "./routes/route.js";

configDotenv();

const port= process.env.PORT || 5500

const app= express();

app.use(express.json());
app.use(route)

app.listen(port, console.log(`listening on port ${port}`));



