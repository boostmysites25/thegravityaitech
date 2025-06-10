import React from "react";
import SubHeading from "../common/SubHeading";
import { allServices } from "../../content/services";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { createUrlParam } from "../../utils/helper";

const AllServices = ({ length }) => {
  const services = allServices.slice(0, length);
  return (
    <div className="py-7">
      <div className="wrapper space-y-4 flex flex-col items-center">
        <div data-aos="fade-up">
          <SubHeading heading="Our Services" className="text-white" />
        </div>
        <h2 data-aos="fade-up" className="text1 text-center max-w-4xl mx-auto">
          Drive Growth with Advanced AI and IT Solutions
        </h2>
        <div className="py-6 flex flex-wrap gap-7 justify-center">
          {services.map((item) => (
            <div
              key={item.title}
              className="group md:w-[calc(100%/2-2rem)] lg:w-[calc(100%/3-2rem)]"
              data-aos="fade-up"
            >
              <div className="border border-primary p-6 rounded-2xl grid grid-cols-1 gap-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-large hover:shadow-primary/50 h-full">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt={item.title}
                  />
                </div>
                <h4 className="text3">{item.title}</h4>
                <p className="desc">{item.desc}</p>
                <div className={`pt-5 grid gap-5 sm:grid-cols-2`}>
                  <Link
                    className="btn-rounded !p-2 border border-white text-white hover:bg-white hover:text-black flex items-center gap-2 w-full justify-center h-fit"
                    to={`/services/${createUrlParam(item.title)}`}
                    target="_blank"
                  >
                    Read in Detail <MdArrowOutward size={20} />
                  </Link>
                  {item.link && (
                    <Link
                      className="btn-rounded !p-2 border border-white text-black bg-white hover:bg-black hover:text-white flex items-center gap-2 w-full justify-center h-fit"
                      to={item.link}
                      target="_blank"
                    >
                      Explore
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <div data-aos="fade-up">
            <Link
              className="btn-rounded border border-primary text-white hover:bg-primary"
              to="/services"
            >
              Discover All Our Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
