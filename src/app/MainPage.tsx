import AboutSection from "@/components/AboutSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import ImageSection from "@/components/ImageSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex flex-col container md:flex-row overflow-x-hidden bg-main pt-10 xl:pt-20 px-2 md:px-2 lg:px-4">
          <HeaderSection />
          <ImageSection />
        </div>
        <DisclaimerSection />
        <AboutSection />
        <TokenomicsSection />
        {/* <TokenBurnSection /> */}
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
