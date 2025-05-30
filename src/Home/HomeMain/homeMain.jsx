import React from "react";
import HeroSection from "../Hero/hero";
import HomeCatwgory from "../HomeCategory/homecategory";
import NearByResto from "../NearByResto/nearByResto";
import OurServices from "../OurServices/ourService";
import SpecialDiscount from "../SpecialOffer/specialOffer";
import TopResto from "../TopResto/topResto";
import AboutUs from "../About us/aboutUs";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <HomeCatwgory /> 
      <TopResto/> 
      <NearByResto />
      <SpecialDiscount/>
      <OurServices/>
      <AboutUs/>
    </>
  );
};
export default HomeMain;
