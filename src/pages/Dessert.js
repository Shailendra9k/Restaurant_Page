import React from 'react';
import Banner from "../components/Banner/Banner";
import LunchImage from "../assets/images/spaghetti.jpg";
import DessertCategoryTab from "../components/Tabs/DessertCategoryTab";

const Dessert = () => {
  return (
    <div>
      <Banner background={LunchImage} text="Dessert" />
      <DessertCategoryTab />
    </div>
  );
};

export default Dessert;
