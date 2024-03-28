import { useLocation } from "react-router-dom";
//d
const Results = () => {
  const location = useLocation();
  const { isSuccess, message, copName, city, vehical } = location.state; // {message,copName,cityDetails,vehicalDetails}
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-3 mx-10">
      <div className="text-center">
        <h1 className="text-2xl">{message}</h1>
        <div className="flex justify-center mt-4">
          <img
            src={`/criminal.png`}
            alt="criminal"
            className="object-cover w-100 h-100 rounded-xl max-w-[500px] max-h-[500px]"
          />
        </div>
        <h1 className="text-2xl mt-4">
          Hahhahhahah You can never catch me !!
        </h1>
      </div>

      {copName && city && vehical ? (
        <>
          <div className="mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={`/${copName}`}
              alt="copName"
              className="object-fit w-full h-full"
            />
            <h1>{copName}</h1>
          </div>
          <div className="mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={`/${city.thumbnail}`}
              alt="copName"
              className="object-fit w-full h-full"
            />
            <h1>{city.name}</h1>
          </div>
          <div className="mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={`/${vehical.thumbnail}`}
              alt="copName"
              className="object-fit w-full h-full"
            />
            <h1>{vehical.name}</h1>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Results;
