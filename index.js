import 'dotenv/config'
import express from "express";
import winston from "winston";
import actionRouter from "./routes/action.routes.js";
import athleteRouter from "./routes/athlete.routes.js";
import highlightRouter from "./routes/highlight.routes.js";
import matchRouter from "./routes/match.routes.js";
import opponentRouter from "./routes/opponent.routes.js";
import positionRouter from "./routes/position.routes.js";
import teamRouter from "./routes/team.routes.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "scout-esportivo-api.log" }),
  ],
  format: combine(
    label({ label: "scout-esportivo-api" }),
    timestamp(),
    myFormat
  ),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/action", actionRouter);
app.use("/athlete", athleteRouter);
app.use("/highlight", highlightRouter);
app.use("/match", matchRouter);
app.use("/opponent", opponentRouter);
app.use("/position", positionRouter);
app.use("/team", teamRouter);

app.listen(3001, async () => {
  console.log("SCOUT-ESPORTIVO-API - Listen port:3001");
});
