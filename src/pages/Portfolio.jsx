import React, { lazy } from "react";
import banner from "../assets/videos/portfolio.mp4";
import ArrowButton from "../components/common/ArrowButton";

const PageBanner = lazy(() => import("../components/website/PageBanner"));
const RecentProjects = lazy(() => import("../components/website/RecentProjects"));
const PortfolioGrid = lazy(() => import("../components/website/PortfolioGrid"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const Portfolio = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="Our Portfolio"
        links={[{ title: "Home", url: "/" }, { title: "Portfolio" }]}
      />

      {/* Recent Projects Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full"></div>
          <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/10 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-primary/5 rounded-full"></div>
        </div>
        
        <RecentProjects />
        
        <div className="wrapper flex justify-center mt-12">
          <ArrowButton
            to="/contact-us"
            className="border border-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Discuss Your Project
          </ArrowButton>
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg z-10">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* All Projects Section */}
      <div className="py-16">
        <div className="wrapper">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <h2 className="text2 mb-4">Showcasing Our Expertise</h2>
            <p className="desc">
              Explore our diverse portfolio of successful projects across
              various industries. From web and mobile applications to AI
              solutions and blockchain implementations, we've helped businesses
              transform their digital presence and achieve their goals.
            </p>
          </div>
        </div>

        <PortfolioGrid />

        <div className="wrapper flex justify-center mt-12">
          <ArrowButton
            to="/contact-us"
            className="border border-primary hover:bg-primary"
          >
            Start Your Project With Us
          </ArrowButton>
        </div>
      </div>

      <WhyWorkWithUs />
    </div>
  );
};

export default Portfolio;
