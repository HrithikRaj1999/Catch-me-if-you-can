import { MouseEventHandler } from "react";
export interface ButtonWithSpinnerProps {
  onClick?: () => any | MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
  w?: number | undefined;
  type?: string | undefined;
  h?: number | undefined;
  spinnerClassName?: string | undefined;
  [key: string]: any;
  children: React.ReactNode;
}

export interface City {
  _id: string;
  thumbnail: string;
  name: string;
  title: string;
  description: string;
  distance: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface CityFormValues {
  thumbnail: string;
  name: string;
  title: string;
  description: string;
  distance: number;
  unit: string;
}
export interface LocationStateType {
  isSuccess: boolean;
  message: string;
  copName: string;
  city: City;
  vehicle: VehicleType;
}
export interface CaptureSuccessPropsType {
  copName: string;
  city: City;
  vehicle: VehicleType;
}
export interface SelectedCities {
  [copName: string]: string; // Maps cop name to city name
}
export interface CitySelectionType {
  copName: string;
  selectedCities: SelectedCities;
  setSelectedCities: React.Dispatch<React.SetStateAction<SelectedCities>>;
  cities: City[];
}
export interface VehicleType {
  _id: string;
  thumbnail: string;
  name: string;
  range: number;
  unit: string;
  availableCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface VehicalFormType {
  thumbnail: string;
  name: string;
  range: number;
  unit: string;
  availableCount: number;
}
export interface VehicleSelections {
  [copName: string]: string;
}
export interface VehicleDropdownProps {
  copName: string;
  vehicleSelections: VehicleSelections;
  setVehicleSelections: React.Dispatch<React.SetStateAction<VehicleSelections>>;
  vehicles: VehicleType[];
  updateVehicleCount: (vehicleKind: string, increment: boolean) => void;
}
