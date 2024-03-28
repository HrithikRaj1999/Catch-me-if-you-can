import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { City, SelectedCities } from "../util/types";
import { GET_CITY_LIST } from "../Router/Routes";
import { useNavigate } from "react-router-dom";
import { useCopsContext } from "../context/CopsContext";
import toast from "react-hot-toast";

const useSelectCity = () => {
  const [cities, setCities] = useState<City[]>([]);
  const navigate = useNavigate();
  const { setCopsDetails } = useCopsContext();
  const [selectedCities, setSelectedCities] = useState<SelectedCities>({});
  const [loading, setLoading] = useState(false);
  const selectedCityNames = useMemo(() => {
    return Object.values(selectedCities);
  }, [selectedCities, cities]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get<City[]>(GET_CITY_LIST);
        setCities(data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleCitySelection = () => {
    try {
      const copAndDetailObj = {} as any;
      Object.entries(selectedCities).forEach(([copName, selectedCity]) => {
        copAndDetailObj[copName] = { city: selectedCity };
      });
      setCopsDetails(copAndDetailObj);
      navigate("/Vehicle-selection");
    } catch (error) {
      toast.error(error as string);
    }
  };

  return {
    handleCitySelection,
    cities,
    selectedCityNames,
    selectedCities,
    setSelectedCities,
    loading
  };
};

export default useSelectCity;
