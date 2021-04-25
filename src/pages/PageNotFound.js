import React from "react";
import Banner from "../components/Banner/Banner";
import PageNotFoundImage from "../assets/images/menu.jpg";

const PageNotFound = () => {
  return (
    <div>
      <Banner background={PageNotFoundImage} text="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
