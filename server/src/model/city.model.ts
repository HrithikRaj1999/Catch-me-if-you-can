import { Schema, model } from "mongoose";
import { CityType } from "../types/interfaces";

const CitySchema = new Schema<CityType>(
  {
    thumbnail: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    distance: { type: Number, required: true },
    unit: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<CityType>("City", CitySchema);
