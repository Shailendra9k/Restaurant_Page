import Banner from "../components/Banner/Banner";
import React from "react";
import LunchImage from "../assets/images/spaghetti.jpg";
import LunchCategoryTab from "../components/Tabs/LunchCategoryTab";

const Lunch = () => {
  return (
    <div>
      <Banner background={LunchImage} text="Lunch" />
      <LunchCategoryTab />
    </div>
  );
};

export default Lunch;
