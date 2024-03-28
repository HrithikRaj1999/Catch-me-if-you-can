import CityDropdown from "../Components/CityDropdown";
import ButtonWithSpinner from "../Components/ButtonWithSpinner";
import useSelectCity from "../hooks/useSelectCity";
import Spinner from "../Components/Spinner";

const COPS_NAME = ["Cop 1", "Cop 2", "Cop 3"];

const CitySelection = () => {
  const {
    handleCitySelection,
    loading,
    cities,
    selectedCityNames,
    selectedCities,
    setSelectedCities,
  } = useSelectCity();
  if (loading) return <Spinner />;
  return (
    <div className="flex m-2 flex-col sm:flex-1 gap-2 sm:justify-center ">
      <div className="flex flex-col md:justify-center md:items-center m-5 p-4 gap-7">
        <div>
          {COPS_NAME.map((copName) => (
            <div key={copName}>
              <h3>{copName}</h3>
              <CityDropdown
                {...{ copName, selectedCities, setSelectedCities, cities }}
              />
            </div>
          ))}
        </div>
        <ButtonWithSpinner
          className="inline-flex items-center justify-center w-full md:w-2/5 px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
          data-primary="green-400"
          data-rounded="rounded-2xl"
          w={20}
          h={20}
          onClick={handleCitySelection}
        >
          Now choose your Ride
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
      <div className="flex flex-wrap justify-center items-center m-3 gap-x-3">
        {cities?.map(({ _id, thumbnail, name, title, description }) => (
          <div
            key={_id}
            className={`w-[400px] h-[400px] flex flex-col mt-6 text-gray-700 ${
              selectedCityNames.includes(name) ? "bg-blue-400" : " bg-white"
            } shadow-md bg-clip-border rounded-xl  hover:shadow-2xl`}
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
              <h6>{title}</h6>
              <p className="block my-3 font-sans text-sm sm:text-lg md:text-base antialiased font-light leading-relaxed text-inherit">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;
