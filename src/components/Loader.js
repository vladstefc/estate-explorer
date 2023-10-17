import React from "react";

import { RiLoader4Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-transparent p-5 rounded-lg flex flex-col justify-center items-center text-white">
        <RiLoader4Fill className="animate-spin text-4xl white" />
        <p className="text-xl">Loading properties...</p>
      </div>
    </div>
  );
};

export default Loader;
