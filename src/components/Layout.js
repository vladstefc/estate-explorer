import React, { useState, useContext, useEffect, useRef } from "react";

import PropertyCard from "./PropertyCard";
import { SearchContext } from "../context/SearchContext";
import House from "./House";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Layout = ({ properties }) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(properties);

  const { isLoading, showProperty, propertyId } = useContext(SearchContext);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (properties && scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  }, [properties]);

  const toggleVisibility = () => {
    if (window.scrollY > 550) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  console.log("isLoading", isLoading);

  console.log("property id: ", propertyId);

  return (
    <div className="lg:w-[1200px] h-full">
      {showProperty ? (
        <House />
      ) : (
        <div
          className="flex flex-wrap justify-center align-center mt-3"
          ref={scrollRef}
        >
          {properties?.map((property) => (
            <PropertyCard
              key={property.listing_id}
              id={property.listing_id}
              title={property.title}
              price={property.price}
              image={property.image_url}
              street={property.street}
              town={property.town}
              address={property.displayable_address}
            />
          ))}
        </div>
      )}

      <button
        className={`${
          isVisible ? "block" : "hidden"
        } fixed bottom-8 right-5 p-4 rounded-full bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring focus:bg-amber-600 transition duration-300`}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill />
      </button>
    </div>
  );
};

export default Layout;
