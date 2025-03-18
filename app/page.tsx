"use client";

import FeastYourEyes from "./components/FeastYourEyes";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import RowBenefice from "./components/FeaturesSection";
import RowTag from "./components/RowTag";
import Sanday from "./components/Sanday";
import ScreenTransition from "./components/ScreenTransition";
import DeliveryBanner from "./components/DeliveryBanner";
import FeatureExplore from "./components/FeatureExplore";
import OurWorkSection from "./components/OurWorkSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <ScreenTransition />
      <Hero />
      <RowTag />
      <Offer />
      <Sanday />
      <FeastYourEyes />
      <RowBenefice />
      <DeliveryBanner />
      <FeatureExplore />
      <OurWorkSection />
      <Footer />
    </main>
  );
}