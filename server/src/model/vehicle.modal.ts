import { Schema, model } from "mongoose";
import { VehicleType } from "../types/interfaces";

const VehicleSchema = new Schema<VehicleType>(
  {
    thumbnail: { type: String, required: true },
    name: { type: String, required: true },
    range: { type: Number, required: true },
    unit: { type: String, required: true },
    availableCount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<VehicleType>("Vehicle", VehicleSchema);
