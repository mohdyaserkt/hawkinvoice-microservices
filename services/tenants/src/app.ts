import express, { Request, Response, json } from "express";
import cors from "cors"

import cookieSession from "cookie-session";
import { routes } from "./routes";
import depentencies from "./config/dependencies";

const app = express();
app.set("trust-proxy", true);
app.use(json());
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));


app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api", routes(depentencies));

export { app };
    