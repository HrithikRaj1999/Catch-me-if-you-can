import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CREATE_CITY } from "../Router/Routes";
import { CityFormValues } from "../util/types";

const INIT_VAL = {
  thumbnail: "",
  name: "",
  title: "",
  description: "",
  distance: 10,
  unit: "",
};
const useCreateCity = () => {
  const navigate = useNavigate();
  const [cityFormValues, setCityFormValues] =
    useState<CityFormValues>(INIT_VAL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCityFormValues((prev) => ({
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
          setCityFormValues((prev) => ({
            ...prev,
            thumbnail: reader?.result?.toString()!,
          }));
        }
      };

      reader.readAsDataURL(file);
      toast.success("Image uploaded successfully");
    } else {
      setCityFormValues((prev) => ({
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
      const { thumbnail, name, title, description, distance, unit } =
        cityFormValues;
      console.log(cityFormValues);
      if (thumbnail && name && title && description && distance && unit)
        toast.error("all fields are required");

      //create
      response = await axios.post(CREATE_CITY, cityFormValues);
      console.log(response);
      navigate("/select-city");
      toast.success("City Created successfully");
      setCityFormValues(INIT_VAL);
    } catch (error) {
      if (error) toast.error(error.toString());
    }
  };
  return { cityFormValues, handleChange, handleImageChange, handleSubmit };
};
export default useCreateCity;
