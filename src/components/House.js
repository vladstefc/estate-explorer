import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const House = () => {
  const { property, setShowProperty } = useContext(SearchContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log("property: ", property);

  const {
    other_image,
    street_name,
    short_description,
    bullet,
    rental_prices,
    available_from_display,
    agent_address,
    agent_logo,
    agent_name,
    agent_phone,
  } = property;

  // console.log("images: ", other_image);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % other_image.length);
    console.log("Next Index", currentIndex);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? other_image.length - 1 : prevIndex - 1
    );
    console.log("Prev Index", currentIndex);
  };

  const goBack = () => {
    setShowProperty(false);
  };

  return (
    <div className="flex flex-wrap flex-col">
      <button
        className="text-center ml-8 mt-2 p-2 w-[100px] hover:text-white hover:bg-amber-600  border-amber-500  border-solid border-2 rounded-full"
        onClick={goBack}
      >
        Go back
      </button>
      <div className="flex flex-col justify-center items-center m-2">
        <div className="flex flex-col items-center p-1">
          <div className="flex justify-center items-center">
            <button className="m-2" onClick={prevImage}>
              <GrLinkPrevious />
            </button>
            {other_image?.length > 0 && (
              <div className="slide-container lg:w-[800px] w-[300px] ">
                <div className="slide">
                  <img src={other_image[currentIndex].url} alt="Property" />
                  <p className="mt-1">
                    {other_image[currentIndex].description}
                  </p>
                </div>
              </div>
            )}

            <button className="m-2" onClick={nextImage}>
              <GrLinkNext />
            </button>
          </div>
        </div>
        <p>{street_name}</p>
      </div>
      <div className="w-full flex justify-center md:justify-around items-center flex-col md:flex-row">
        <div className="mx-6 md:w-1/2 mb-4">
          <p className="">{short_description}</p>
          <h3 className="font-bold mt-2 mb-2">Facilities</h3>
          <ul>
            {bullet.map((item) => (
              <li key={item} className="p-1">
                {item}
              </li>
            ))}
          </ul>
          <p>Price per week: £{rental_prices.per_week}</p>
          <p>Price per month: £{rental_prices.per_month}</p>
          <p className="text-lime-700">{available_from_display}</p>
        </div>

        <div className="md:w-[2px] md:h-[500px] bg-black/30 h-[2px] w-[300px] m-4"></div>

        <div className="w-auto my-auto flex flex-col jusitfy-center items-center ">
          <h1>Contact The Agency:</h1>
          <h2 className="p-2 text-lg">{agent_name}</h2>
          <img src={agent_logo} alt="Agency Logo" className="w-[100px]" />
          <p className="p-2 text-sm">{agent_address}</p>
          <a className="p-2 text-sm" href="/">
            {agent_phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default House;
