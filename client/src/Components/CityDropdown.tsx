import { CitySelectionType } from "../util/types";

const CityDropdown = ({
  copName,
  selectedCities,
  setSelectedCities,
  cities,
}: CitySelectionType) => {
    
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCities((prev) => ({ ...prev, [copName]: event.target.value }));
  };

  const getAvailableCities = (selectedCity: string) =>
    cities.filter(
      (c) =>
        !Object.values(selectedCities).includes(c.name) ||
        c.name === selectedCity
    );

  return (
    <select value={selectedCities[copName] || ""} onChange={handleChange}>
      <option value="">Select a City</option>
      {getAvailableCities(selectedCities[copName]).map((city) => (
        <option key={city._id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};
export default CityDropdown;
