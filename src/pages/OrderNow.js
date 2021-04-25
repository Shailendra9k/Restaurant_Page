import React from "react";
import Banner from "../components/Banner/Banner";
import OrderNowImage from "../assets/images/booknow.jpg";

const OrderNow = () => {
  return (
    <div>
      <Banner background={OrderNowImage} text="Order Now" />
    </div>
  );
};

export default OrderNow;
