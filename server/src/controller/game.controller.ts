import { NextFunction, Request, Response } from "express";
import City from "../model/city.model";
import Vehicle from "../model/Vehicle.modal";
import { checkCapture, determineFugitivesLocation } from "../utils/helpers";
import { ErrorHandler } from "../types/ErrorHandler-type";

export const fetchCities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cities = await City.find({});
    res.status(200).json(cities);
  } catch (error) {
    next(error);
  }
};

export const fetchVehicles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Vehicles = await Vehicle.find({});
    res.status(200).json(Vehicles);
  } catch (error) {
    next(error);
  }
};

export const checkWhetherCrimalCaught = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { copSelection } = req.body;
    if (!copSelection) {
      return res.status(400).json("Selection not made correctly");
    }
    const cities = await City.find({});
    const citiesName = cities.map((c) => c.name);
    const Vehicles = await Vehicle.find({});

    // Function to randomly select the fugitive's location
    const fugitivesLocation = determineFugitivesLocation(citiesName);
    const result = checkCapture(
      copSelection,
      fugitivesLocation,
      Vehicles,
      cities
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const createCity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { thumbnail, name, distance, unit } = req.body;
    if (!name || !distance || !thumbnail || !unit) {
      return new ErrorHandler(400, "Please fill all fields");
    }

    const insertedCity = await City.create({
      thumbnail,
      name,
      distance,
      unit,
    });
    return res.status(201).json(insertedCity);
  } catch (error) {
    next(new ErrorHandler(500, "Server Error: Unable to create city."));
  }
};
export const createVehicle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { thumbnail, name, range, availableCount, unit } = req.body;
    if (!name || !range || !thumbnail || !availableCount || !unit) {
      return new ErrorHandler(400, "Please fill all fields");
    }

    const insertedVehicle = await Vehicle.create({
      thumbnail,
      name,
      range,
      unit,
      availableCount,
    });
    return res.status(201).json(insertedVehicle);
  } catch (error) {
    next(
      new ErrorHandler(500, "Server Error: Unable to create Vehicle." + error)
    );
  }
};
