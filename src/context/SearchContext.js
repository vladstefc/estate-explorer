import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = useState({
    city: "london",
    selectedCategory: "residential",
    selectedFurnished: "furnished",
    selectedStatus: "",
    selectedNrOfBeds: "2",
    selectedOrder: "age",
    selectedOrdering: "ascending",
    selectedPropertyType: "flats",
    selectedHomes: "no",
    selectedNrOfProperties: "10",
  });
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showProperty, setShowProperty] = useState(false);
  const [propertyId, setPropertyId] = useState(null);
  const [property, setProperty] = useState();

  return (
    <SearchContext.Provider
      value={{
        searchState,
        setSearchState,
        properties,
        setProperties,
        isLoading,
        setIsLoading,
        isMobile,
        setIsMobile,
        showProperty,
        setShowProperty,
        propertyId,
        setPropertyId,
        property,
        setProperty,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
