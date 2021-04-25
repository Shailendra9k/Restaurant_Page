import Banner from "../components/Banner/Banner";
import React from "react";
import MenuImage from "../assets/images/spaghetti.jpg";
import MenuCategoryTab from "../components/Tabs/MenuCategoryTab";

const Menu = () => {
  return (
    <div>
      <Banner background={MenuImage} text="Menu" />
      <MenuCategoryTab />
    </div>
  );
};

export default Menu;
