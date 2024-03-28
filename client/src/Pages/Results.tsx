import { useLocation } from "react-router-dom";
import {
  CaptureSuccessPropsType, LocationStateType
} from "../util/types";

const CaptureSuccess = ({
  copName,
  city,
  vehicle,
}: CaptureSuccessPropsType) => (
  <div className="mt-10 w-full flex flex-col md:flex-row gap-5 justify-center px-4 md:px-0">
    <div className="flex flex-col md:flex-row gap-x-5 justify-center items-center mt-4 md:w-auto">
      <img
        src={`/${copName.split(" ").join("")}.png`}
        alt="copName"
        className="object-fit rounded-xl max-w-[400px] max-h-[400px] w-full h-auto md:w-auto md:h-auto"
      />
      <h1 className="mt-2 md:mt-0">{copName}</h1>
    </div>
    <div className="flex flex-col md:flex-row gap-x-5 justify-center items-center mt-4 md:w-auto">
      <img
        src={`${city.thumbnail}`}
        alt="city name"
        className="object-fit rounded-xl max-w-[300px] max-h-[300px] w-full h-auto md:w-auto md:h-auto"
      />
      <h1 className="mt-2 md:mt-0">{city.name}</h1>
    </div>
    <div className="flex flex-col md:flex-row gap-x-5 justify-center items-center mt-4 md:w-auto">
      <img
        src={`${vehicle.thumbnail}`}
        alt="vehicle name"
        className="object-fit rounded-xl max-w-[300px] max-h-[300px] w-full h-auto md:w-auto md:h-auto"
      />
      <h1 className="mt-2 md:mt-0">{vehicle.name}</h1>
    </div>
  </div>
);
const CriminalResults = () => (
  <div className="text-center">
    <div className="flex justify-center mt-4">
      <img
        src={`/criminal.png`}
        alt="criminal"
        className="object-cover rounded-xl max-w-[500px] max-h-[500px] w-full h-auto"
      />
    </div>
    <h1 className="text-2xl mt-4">You can never catch me !!</h1>
  </div>
);

const Results = () => {
  const location = useLocation();
  const { isSuccess, message, copName, city, vehicle }: LocationStateType =
    location.state; // {message,copName,cityDetails,vehicalDetails}
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-3 mx-4 sm:mx-10">
      <h1 className="text-2xl text-center font-serif">
        {isSuccess ? "🎉🎊🎊🎉🎊" : "😔"} <b>{message}</b>{" "}
        {isSuccess ? "🎉🎊🎊🎉🎊" : "😔"}
      </h1>
      {!isSuccess ? (
        <CriminalResults />
      ) : copName && city && vehicle ? (
        <CaptureSuccess {...{ copName, city, vehicle }} />
      ) : null}
    </div>
  );
};

export default Results;
