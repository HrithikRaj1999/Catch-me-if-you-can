export interface CopSelectionsType {
  copName: string;
  city: string;
  vehicle: "EV Bike" | "EV Car" | "EV SUV";
}
export interface CityType {
  thumbnail: string;
  name: string;
  title: String;
  description: String;
  distance: number;
  unit: string;
}
export interface VehicleType {
  thumbnail: string;
  name: string;
  range: number;
  unit: string;
  availableCount: number;
}

export interface CityAndDistanceObj {
  [key: string]: number;
}
export interface VehicleAndRangeObj {
  [key: string]: number;
}
