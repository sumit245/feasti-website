import React,{useState,useEffect} from 'react';
import HeroChef from './becomeachef/HeroChef';
import ChefReview from './ChefReview';
import FoodSafety from './FoodSafety';
import Footer from './Footer';
import Header from './Header';
import Help from './Help';
import PaymentStructure from './PaymentStructure';
import SellingSteps from './SellingSteps';
import ChefFeatured from './becomeachef/ChefFeatured';
import FAQ from "./becomeachef/FAQ"

export default function Becomeachef() {
  return (
    <div>
      <Header />
      <HeroChef />
      <ChefReview />
      <SellingSteps />
      {/* <PaymentStructure />
      <Help />
      <ChefFeatured/>
      <FoodSafety />
      <FAQ/> */}
      <Footer />
    </div>
  );
}
