import { Router } from "express";

import { tryCatchError } from "./../utils/errorWrapper";
import {
  checkWhetherCrimalCaught,
  createCity,
  createVehicle,
  fetchCities,
  fetchVehicles,
} from "../controller/game.controller";

const gameRouter = Router();

gameRouter.post("/createCity", tryCatchError(createCity));
gameRouter.post("/createVehicle", tryCatchError(createVehicle));
gameRouter.get("/fetchCities", tryCatchError(fetchCities));
gameRouter.get("/fetchVehicles", tryCatchError(fetchVehicles));
gameRouter.post(
  "/checkWhetherCrimalCaught",
  tryCatchError(checkWhetherCrimalCaught)
);
export default gameRouter;
