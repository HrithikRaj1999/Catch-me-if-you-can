import { useEffect, useState } from "react";
import { VehicleSelections, VehicleType } from "../util/types";
import axios from "axios";
import { BEGIN_CHASE, GET_VEHICLE_LIST } from "../Router/Routes";
import toast from "react-hot-toast";
import { useCopsContext } from "../context/CopsContext";
import { useNavigate } from "react-router-dom";

const useSelectVehicle = () => {
  const [vehicles, setVehicles] = useState<VehicleType[]>();
  const [vehicleSelections, setVehicleSelections] = useState<VehicleSelections>(
    {}
  );
  const navigate = useNavigate();
  const { copsDetails, setCopsDetails } = useCopsContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<VehicleType[]>(GET_VEHICLE_LIST);
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehical data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChase = async () => {
    let resData = null;
    try {
      setCopsDetails((prev) => {
        const updated = { ...prev };
        Object.entries(vehicleSelections).forEach(
          ([copName, selectedVehical]) => {
            updated[copName].vehicle = selectedVehical;
          }
        );
        return updated;
      });
      const sanitisedData = Object.entries(copsDetails).map(
        ([key, { city, vehicle }]) => {
          return { copName: key, city, vehicle };
        }
      );

      const { data } = await axios.post(BEGIN_CHASE, {
        copSelection: sanitisedData,
      });
      //data={message,copName,cityDetails,vehicalDetails}
      resData = data;
    } catch (error: any) {
      toast.error(error.response?.data.error || "An error occurred");
    } finally {
      navigate("/results", { state: resData });
    }
  };
  const updateVehicleCount = (vehicleKind: string, increment: boolean) => {
    if (!vehicles) return;
    const index = vehicles.findIndex((vehicle) => vehicle.name === vehicleKind);
    if (index !== -1) {
      if (increment) {
        vehicles[index].availableCount += 1;
      } else {
        if (vehicles[index].availableCount > 0)
          vehicles[index].availableCount -= 1;
      }
    }
  };
  return {
    vehicleSelections,
    setVehicleSelections,
    vehicles,
    updateVehicleCount,
    handleChase,
  };
};

export default useSelectVehicle;
