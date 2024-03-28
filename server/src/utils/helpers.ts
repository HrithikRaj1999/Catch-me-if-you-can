import { ErrorHandler } from "../types/ErrorHandler-type";
import {
  CityAndDistanceObj,
  CityType,
  CopSelectionsType,
  VehicleType,
  VehicleAndRangeObj,
} from "../types/interfaces";

export function checkCapture(
  copSelections: CopSelectionsType[],
  fugitivesLocation: string,
  allVehicles: VehicleType[],
  allCities: CityType[]
) {
  const VehicleAndRangeObj = {} as VehicleAndRangeObj;
  allVehicles.forEach(({ name, range }: VehicleType) => {
    VehicleAndRangeObj[name] = range;
  });
  for (const selection of copSelections) {
    const {
      copName,
      city: selectedCity,
      vehicle: curSelectedVehicle,
    } = selection;
    const distance = getCityDistance(allCities, selectedCity) * 2; // Round trip
    const vehicleRange = VehicleAndRangeObj[curSelectedVehicle];
    if (selectedCity === fugitivesLocation && vehicleRange >= distance) {
      return `${copName} has successfully captured the fugitive in ${selectedCity} using a ${curSelectedVehicle}.`;
    }
  }
  throw new ErrorHandler(404, "Fugitive has escaped the location ");
}

export function getCityDistance(allCity: CityType[], selectedCity: string) {
  let cityAndDistanceObj = {} as CityAndDistanceObj;
  allCity.forEach(({ name, distance }: CityType) => {
    cityAndDistanceObj[name] = distance;
  });
  return cityAndDistanceObj[selectedCity] || 0;
}

export function determineFugitivesLocation(cities: string[]) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
