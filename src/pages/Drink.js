import React from 'react';
import Banner from "../components/Banner/Banner";
import LunchImage from "../assets/images/spaghetti.jpg";
import DrinkCategoryTab from "../components/Tabs/DrinkCategoryTab";

const Drink = () => {
  return (
    <div>
      <Banner background={LunchImage} text="Drink" />
      <DrinkCategoryTab />
    </div>
  );
};

export default Drink;
