import React, { useContext } from "react";
import "./App.css";

import { SearchContext } from "./context/SearchContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { Outlet } from "react-router-dom";

function App() {
  const { isLoading } = useContext(SearchContext);

  // console.log(properties);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen ">
      {isLoading && <Loader />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
