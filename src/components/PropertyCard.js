import React, { useContext, useEffect, useRef } from "react";

import { BiBed, BiArea } from "react-icons/bi";
import { LuBath } from "react-icons/lu";
import { BsCurrencyPound } from "react-icons/bs";
import { SearchContext } from "../context/SearchContext";

const PropertyCard = ({ title, town, street, price, image, id, address }) => {
  const { setShowProperty, setPropertyId, setProperty, properties } =
    useContext(SearchContext);

  const handleSeeProperty = () => {
    setShowProperty(true);
    setPropertyId(id);
    setProperty(properties.find((property) => property.listing_id === id));
  };

  const propertyRef = useRef(null);

  return (
    <div
      className="w-[300px] h-[400px] rounded-lg flex flex-nowrap flex-col border-2 drop-shadow-xl border-slate-300 cursor-pointer mb-3 mr-2 "
      onClick={handleSeeProperty}
    >
      <div className="m-3 h-2/4">
        <img
          src={image}
          alt="property"
          className=" rounded-lg h-full ml-auto mr-auto"
        />
      </div>
      <div className="h-1/4 flex flex-wrap justify-center items-center p-1">
        <h3 className="text-sm">{title}</h3>
      </div>
      <div className="h-1/4 flex flex-col justify-center items-center">
        <p className="p-1 text-center text-sm">{address}</p>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex items-center justify-evenly p-1">
            <BiBed />
            <p className="text-sm p-1">3</p>
          </div>
          <div className="flex items-center justify-evenly p-1">
            <LuBath />
            <p className="text-sm p-1">2</p>
          </div>
          <div className="flex items-center justify-evenly p-1">
            <BiArea />
            <p className="text-sm p-1">4200 sq ft</p>
          </div>
        </div>
        <div className="p-1 flex flex-wrap items-center justify-center">
          <BsCurrencyPound />
          <p className="">{price}/wk</p>
        </div>
      </div>
      <div className="h-1/4 flex justify-center items-center">
        <button className="p-2 bg-amber-400 rounded-xl text-sm">
          Click to see more!
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
