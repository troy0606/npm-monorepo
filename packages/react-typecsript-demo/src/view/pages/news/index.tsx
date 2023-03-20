import React, { Component, useEffect } from "react";
import { useLocation } from "react-router-dom";


const News: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed");
    console.log(location)
  }, [location]);

  return <div></div>;
};

export default News;