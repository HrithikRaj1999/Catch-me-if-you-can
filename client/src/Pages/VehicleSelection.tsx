import { useEffect, useState } from "react";
import { VehicleSelections, VehicleType } from "../util/types";
import VehicleDropdown from "../Components/VehicleDropDown";
import axios from "axios";
import { BEGIN_CHASE, GET_VEHICLE_LIST } from "../Router/Routes";
import toast from "react-hot-toast";
import { useCopsContext } from "../context/CopsContext";
import { useNavigate } from "react-router-dom";
import ButtonWithSpinner from "../Components/ButtonWithSpinner";
const COPS_NAME = ["Cop 1", "Cop 2", "Cop 3"];
const VehicleSelection = () => {
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
      const sanitatedData = Object.entries(copsDetails).map(
        ([key, { city, vehicle }]) => {
          return { copName: key, city, vehicle };
        }
      );

      const { data } = await axios.post(BEGIN_CHASE, {
        copSelection: sanitatedData,
      });
      resData = data;
    } catch (error: any) {
      resData = error.response?.data.error || "An error occurred";
      toast.error(error.response.data.error as string);
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
  return (
    <>
      <div className="flex m-2 flex-col sm:flex-1 gap-2 sm:justify-center ">
        <div className="flex flex-col md:justify-center md:items-center m-5 p-4 gap-7">
          <div>
            {COPS_NAME?.map((copName) => (
              <div key={copName}>
                <h3>{copName}</h3>
                {vehicles && vehicles.length ? (
                  <VehicleDropdown
                    {...{
                      copName,
                      vehicleSelections,
                      setVehicleSelections,
                      vehicles,
                      updateVehicleCount,
                    }}
                  />
                ) : (
                  <h1>No vehical Found</h1>
                )}
              </div>
            ))}
          </div>
          <div>
            <ButtonWithSpinner
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
              data-primary="green-400"
              data-rounded="rounded-2xl"
              onClick={handleChase}
            >
              Lets see who wins the chase !!
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </ButtonWithSpinner>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center m-3 gap-x-3">
          {vehicles?.map(
            ({ _id, thumbnail, name, range, unit, availableCount }) => (
              <div
                key={_id}
                className={`w-[400px] h-[400px] flex flex-col mt-6 text-gray-700 ${
                  availableCount === 0 ? "bg-red-200" : "bg-white"
                } shadow-md bg-clip-border rounded-xl ${
                  availableCount === 0
                    ? "hover:bg-red-500"
                    : "hover:shadow-2xl hover:bg-zinc-100"
                } `}
              >
                <div className="mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={thumbnail}
                    alt="card"
                    className="object-fit w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans sm:text-lg md:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                  </h5>
                  <h6>{`${range} ${unit}`}</h6>
                  <p className="block my-3 font-sans text-muted sm:text-lg md:text-muted antialiased font-light leading-relaxed text-inherit">
                    {`Available Quantity ${availableCount}`}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleSelection;
