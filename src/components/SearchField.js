import React, { useContext } from "react";

import { ukCitiesAndTowns } from "../constants/cities";
import {
  category,
  furnished,
  status,
  nrOfBeds,
  order,
  ordering,
  propertyType,
  new_homes,
  nrOfProperties,
} from "../constants/dataForOptions";
import { Select } from "./Select";
import { SearchContext } from "../context/SearchContext";

const SearchField = ({ getData }) => {
  const { searchState, setSearchState, setShowProperty } =
    useContext(SearchContext);

  const cityHandler = (e) => {
    const updatedCity = { ...searchState, city: e.target.value.toLowerCase() };
    setSearchState(updatedCity);
  };
  const categoryHandler = (e) => {
    const updatedCategory = {
      ...searchState,
      selectedCategory: e.target.value,
    };
    setSearchState(updatedCategory);
  };

  const furnishedHandler = (e) => {
    const updatedFurnished = {
      ...searchState,
      selectedFurnished: e.target.value.replace(/\s+/g, "_").toLowerCase(),
    };
    setSearchState(updatedFurnished);
  };
  const statusHandler = (e) => {
    const updatedStatus = {
      ...searchState,
      selectedStatus: e.target.value.replace(/\s+/g, "_").toLowerCase(),
    };
    setSearchState(updatedStatus);
  };

  const bedsHandler = (e) => {
    const updatedNrOfBeds = {
      ...searchState,
      selectedNrOfBeds: e.target.value,
    };
    setSearchState(updatedNrOfBeds);
  };

  const orderHandler = (e) => {
    const updatedOrder = { ...searchState, selectedOrder: e.target.value };
    setSearchState(updatedOrder);
  };

  const orderingHandler = (e) => {
    const updatedOrdering = {
      ...searchState,
      selectedOrdering: e.target.value.replace(/\s+/g, "_").toLowerCase(),
    };
    setSearchState(updatedOrdering);
  };

  const propertyTypeHandler = (e) => {
    const updatedPropertyType = {
      ...searchState,
      selectedPropertyType: e.target.value.replace(/\s+/g, "_").toLowerCase(),
    };
    setSearchState(updatedPropertyType);
  };

  const selectedHomeHandler = (e) => {
    const updatedNewHome = {
      ...searchState,
      selectedHomes: e.target.value.replace(/\s+/g, "_").toLowerCase(),
    };
    setSearchState(updatedNewHome);
  };

  const selectedNrOfPropertiesHandler = (e) => {
    const updatedNrOfProperties = {
      ...searchState,
      selectedNrOfProperties: e.target.value.toString(),
    };
    setSearchState(updatedNrOfProperties);
    console.log(updatedNrOfProperties);
  };

  const newSearch = () => {
    getData();
    setShowProperty(false);
  };

  return (
    <div className="flex justify-center items-center bg-properties bg-cover w-full">
      <div className="m-6 p-6 border-solid border-2 rounded-3xl border-amber-500 bg-white drop-shadow-2xl">
        <div className="flex flex-wrap justify-between gap-2 text-sm">
          <div className="flex flex-col">
            <Select
              onSelect={cityHandler}
              options={ukCitiesAndTowns}
              value="Location"
            />
            <Select
              onSelect={categoryHandler}
              options={category}
              value="Category"
            />
          </div>
          <div className="flex flex-col">
            <Select
              onSelect={furnishedHandler}
              options={furnished}
              value="Furnished"
            />
            <Select
              onSelect={bedsHandler}
              options={nrOfBeds}
              value="Nr. of Beds"
            />
          </div>
          <div className="flex flex-col">
            <Select onSelect={orderHandler} options={order} value="Order By" />
            <Select
              onSelect={orderingHandler}
              options={ordering}
              value="Ordering"
            />
          </div>
          <div className="flex flex-col">
            <Select
              onSelect={propertyTypeHandler}
              options={propertyType}
              value="Property type"
            />
            <Select
              onSelect={selectedHomeHandler}
              options={new_homes}
              value="New Home"
            />
          </div>
          <div className="flex flex-col">
            <Select
              onSelect={selectedNrOfPropertiesHandler}
              options={nrOfProperties}
              value="Nr. Of Properties"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <button
            className="lg:w-48 md:w-24 p-2 md:p-1 m-2 border-solid border-2 rounded-full border-amber-500 hover:bg-amber-500 hover:text-white hover:border-transparent"
            onClick={newSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
