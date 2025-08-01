import React from "react";
import SubHeading from "../common/SubHeading";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../content/services";

const ServicesSection = ({ page }) => {
  const isWeb = page === "web";
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;

  return (
    <div
      id="services"
      className="py-16 bg-gradient-to-b from-primary/5 to-secondary/5"
    >
      <div className="wrapper space-y-8 flex flex-col items-center">
        <div data-aos="fade-up" className="text-center">
          <SubHeading
            heading={`Our ${isWeb ? "Web" : "App"} Development Services`}
            className="text-black"
          />
        </div>

        <h2
          data-aos="fade-up"
          className="text1 text-center max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          {isWeb
            ? "Transform Your Online Presence with Cutting-Edge Web Solutions"
            : "Revolutionize User Experiences with Next-Gen App Development"}
        </h2>

        <div className="py-10 flex flex-wrap w-full justify-center gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group w-full md:max-w-[calc(50%-2rem)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="bg-secondary/5 backdrop-blur-sm border-2 border-primary/30 p-6 rounded-2xl 
                            hover:-translate-y-2 transition-all duration-500 
                            hover:shadow-large hover:shadow-primary/40 
                            hover:border-primary h-full flex flex-col"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                  <img
                    loading="lazy"
                    src={service.image}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                    alt={service.title}
                  />
                </div>

                <h4 className="text3 text-primary mb-3 transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="desc flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
