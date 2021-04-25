import React from "react";
import Banner from "../components/Banner/Banner";
import LunchImage from "../assets/images/spaghetti.jpg";
import AlacarteCategoryTab from "../components/Tabs/AlacarteCategoryTab";

const Alacarte = () => {
  return (
    <div>
      <Banner background={LunchImage} text="Alacarte" />
      <AlacarteCategoryTab />
    </div>
  );
};

export default Alacarte;
