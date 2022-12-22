import React from "react";
import Navabr1 from "../Navbar1/Navabr1";
import Header from "../Header/Header";
import MarketingHub from "../MarketingHub/MarketingHub";
import Offers from "../Offers/Offers";
import RecomendedBundles from "../RecomendedBundles/RecomendedBundles";
import CalulatePrice from "../CalculatePrice/CalculatePrice";
import CustomerS from "../CustomerS/CustomerSupport";
import Footer1 from "../footerg/Footer1";
const PricingPage = () => {
  return (
    <>
      <Navabr1 />
      <Header />
      <MarketingHub />
      <Offers />
      <RecomendedBundles />
      <CalulatePrice />
      <CustomerS />
      <Footer1 />
    </>
  );
};

export default PricingPage;
