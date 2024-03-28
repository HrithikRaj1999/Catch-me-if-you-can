import { VehicleDropdownProps } from "../util/types";

export default function VehicleDropdown({
  copName,
  vehicleSelections,
  setVehicleSelections,
  vehicles,
  updateVehicleCount,
}: VehicleDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const previousSelection = vehicleSelections[copName];
    if (previousSelection) {
      updateVehicleCount(previousSelection, true); // Increment the count back for the previously selected vehicle
    }
    setVehicleSelections((prev) => ({
      ...prev,
      [copName]: event.target.value,
    }));
    updateVehicleCount(event.target.value, false); // Decrement the count for the new selection
  };

  return (
    <select value={vehicleSelections[copName] || ""} onChange={handleChange}>
      <option value="">Select a Vehicle</option>
      {vehicles
        .filter(
          (vehicle) =>
            vehicle.availableCount > 0 ||
            vehicle.name === vehicleSelections[copName]
        )
        .map((vehicle) => (
          <option key={vehicle.name} value={vehicle.name}>
            {vehicle.name}
          </option>
        ))}
    </select>
  );
}
