import React, { useContext } from "react";

import SearchField from "./SearchField";
import { SearchContext } from "../context/SearchContext";
import Layout from "./Layout";
import About from "./About";
import axios from "axios";

import { API_KEY } from "../utils/API";

const Welcome = () => {
  const { searchState, setIsLoading, properties, setProperties } =
    useContext(SearchContext);

  const {
    city,
    selectedCategory,
    selectedFurnished,
    selectedNrOfBeds,
    selectedOrder,
    selectedOrdering,
    selectedPropertyType,
    selectedHomes,
    selectedNrOfProperties,
  } = searchState;

  const options = {
    method: "GET",
    url: "https://zoopla.p.rapidapi.com/properties/list",
    params: {
      area: city,
      identifier: city,
      category: selectedCategory,
      furnished: selectedFurnished,
      maximum_beds: selectedNrOfBeds,
      order_by: selectedOrder,
      ordering: selectedOrdering,
      page_number: "1",
      page_size: selectedNrOfProperties,
      property_type: selectedPropertyType,
      new_homes: selectedHomes,
    },
    headers: {
      "X-RapidAPI-Key": { API_KEY },
      "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setProperties(response.data.listing);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <SearchField getData={getData} />
      {!properties.length && <About />}
      {properties.length > 0 && <Layout properties={properties} />}
    </div>
  );
};

export default Welcome;
