import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import handleAllError from "./src/middleware/error-handler";
import ConnectMongoDb from "./mongoConnection";
import { serverStatus } from "./src/middleware/express-status";
import gameRouter from "./src/router/game.router";
import bodyParser from "body-parser";
dotenv.config();
const app: Express = express();

app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

ConnectMongoDb(app);

app.get("/", serverStatus);
app.use("/api/v1/game-data", gameRouter);
app.use(handleAllError);
