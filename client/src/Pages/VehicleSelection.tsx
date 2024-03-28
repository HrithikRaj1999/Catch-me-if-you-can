import VehicleDropdown from "../Components/VehicleDropDown";
import ButtonWithSpinner from "../Components/ButtonWithSpinner";
import useSelectVehicle from "../hooks/useSelectVehicle";
import { COPS_NAME } from "../util/constant";
const VehicleSelection = () => {
  const {
    vehicleSelections,
    setVehicleSelections,
    vehicles,
    updateVehicleCount,
    handleChase,
  } = useSelectVehicle();
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
              w={20}
              h={20}
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
                  availableCount === 0 ? "bg-blue-400" : "bg-white"
                } shadow-md bg-clip-border rounded-xl  `}
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
                    Name: {name}
                  </h5>
                  <h6>Range: {`${range} ${unit}`}</h6>
                  <p className="block my-3 font-sans text-muted sm:text-lg md:text-muted antialiased font-light leading-relaxed text-inherit">
                    <b>{`Available Quantity ${availableCount}`}</b>
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
