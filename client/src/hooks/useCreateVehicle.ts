import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CREATE_VEHICLE } from "../Router/Routes";
import { VehicalFormType } from "../util/types";

const INIT_VAL = {
  thumbnail: "",
  name: "",
  range: 12,
  unit: "",
  availableCount: 12,
};
const useCreateVehicle = () => {
  const navigate = useNavigate();
  const [vehicleFormValues, setVehicleFormValues] =
    useState<VehicalFormType>(INIT_VAL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setVehicleFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //generally we use firebase or google cloud we donot store the files directly in mongo db
  //this is just for small images else crashing of db might take place
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setVehicleFormValues((prev) => ({
            ...prev,
            thumbnail: reader?.result?.toString()!,
          }));
        }
      };

      reader.readAsDataURL(file);
      toast.success("Image uploaded successfully");
    } else {
      setVehicleFormValues((prev) => ({
        ...prev,
        thumbnail: "",
      }));
      toast.error("Image uploaded Failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response: AxiosResponse;
    try {
      const { thumbnail, name, range, unit, availableCount } =
        vehicleFormValues;
      if (thumbnail && name && range && availableCount && unit)
        toast.error("all fields are required");
      response = await axios.post(CREATE_VEHICLE, vehicleFormValues);
      console.log(response);
      navigate("/");
      toast.success("vehicle Created successfully");
      setVehicleFormValues(INIT_VAL);
    } catch (error) {
      if (error) toast.error(error.toString());
    }
  };
  return { vehicleFormValues, handleChange, handleImageChange, handleSubmit };
};
export default useCreateVehicle;
