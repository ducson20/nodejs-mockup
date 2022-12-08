import express, { Application } from "express";
import cors from "cors";
import * as path from "path";

import { init } from "./configs/database";
import { connectMongoDb } from "./configs/database/mongodb";
import { routes } from "./routes";
import { APP_PORT } from "./configs/environment";

const app: Application = express();

// Create mysql database pool
init();

// Connect mongo database
connectMongoDb();

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// Parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable all CORS request
app.use(cors());

// Router app
routes(app);

app.listen(APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${APP_PORT}`);
});
