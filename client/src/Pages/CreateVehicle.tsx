import React from "react";
import useCreateVehicle from "../hooks/useCreateVehicle";
import ButtonWithSpinner from "../Components/ButtonWithSpinner";

const CreateVehicle = () => {
  const { vehicleFormValues, handleChange, handleImageChange, handleSubmit } =
    useCreateVehicle();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full h-screen bg-white"
    >
      <h1 className="text-3xl font-serif text-violet-800 mb-32 w-full text-center">
        Post a brand new vehicle here here
      </h1>
      <div className="flex flex-col mb-5 w-full max-w-md">
        <label
          htmlFor="thumbnail"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          Thumbnail URL
        </label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={handleImageChange}
          className="border-2 border-gray-300 rounded-md p-2 text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {vehicleFormValues.thumbnail ? (
          <div className="mt-2 flex justify-center">
            <img
              src={vehicleFormValues.thumbnail}
              alt="Thumbnail"
              className="h-[200px] w-[200px] object-fit rounded-md"
            />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col mb-5 w-full max-w-md">
        <label
          htmlFor="name"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={vehicleFormValues.name}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-3 text-sm w-full"
          required
        />
      </div>
      <div className="flex flex-col mb-5 w-full max-w-md">
        <label
          htmlFor="range"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          Range
        </label>
        <input
          type="text"
          id="range"
          name="range"
          placeholder="Range"
          value={vehicleFormValues.range}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-3 text-sm w-full"
          required
        />
      </div>
      <div className="flex flex-col mb-5 w-full max-w-md">
        <label
          htmlFor="unit"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          unit
        </label>
        <input
          type="text"
          id="unit"
          name="unit"
          placeholder="unit"
          value={vehicleFormValues.unit}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-3 text-sm w-full"
          required
        />
      </div>
      <div className="flex flex-col mb-5 w-full max-w-md">
        <label
          htmlFor="availableCount"
          className="mb-2 text-sm font-medium text-gray-900"
        >
          No of Count
        </label>
        <input
          type="text"
          id="availableCount"
          name="availableCount"
          placeholder="availableCount"
          value={vehicleFormValues.availableCount}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-3 text-sm w-full"
          required
        />
      </div>
      <ButtonWithSpinner
        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        w={20}
        h={20}
        onFormSubmit={handleSubmit}
      >
        Submit
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
    </form>
  );
};

export default CreateVehicle;
