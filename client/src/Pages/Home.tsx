import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col  gap-y-3 justify-center items-center m-[100px]">
      <p className="text-2xl text-pretty font-normal">
        Welcome! This is a thrilling game to chase the figutive who has just
        escaped from the Gotham City.
        <br></br>
        <br />
        <h1>Information: </h1>
        The criminal may be hiding in only one of the possible 5 neighbouring
        cities.
        <br />3 fearless cops have volunteered in capturing the fugitive hiding
        and they need your help!
      </p>
      <Link
        to="/city-selection"
        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        data-primary-reset="{}"
      >
        Lets Chase the Criminal
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
      </Link>
    </div>
  );
};

export default Home;
