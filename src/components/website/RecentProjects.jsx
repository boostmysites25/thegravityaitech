import React from "react";
import { recentProjects } from "../../content/constant";
import { Link } from "react-router-dom";
import SubHeading from "../common/SubHeading";

const RecentProjects = () => {
  // Function to get badge color based on project category
  const getBadgeColor = (category) => {
    switch (category) {
      case 'saas':
        return 'bg-blue-500';
      case 'ai':
        return 'bg-purple-500';
      case 'web':
        return 'bg-green-500';
      case 'app':
        return 'bg-orange-500';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="wrapper py-10">
      <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
        <SubHeading heading="Recent Projects" className="text-gray-800" />
        <h2 className="text2 my-4">Our Latest Innovations</h2>
        <p className="desc">
          Explore our most recent work showcasing cutting-edge technology solutions
          that are transforming businesses across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden shadow-xl group transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={project.id * 100}
          >
            <div className="relative h-[250px] overflow-hidden">
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80" />
              
              {/* Featured badge */}
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </div>
              
              {/* Project type badge */}
              <div className={`absolute top-4 left-4 ${getBadgeColor(project.category)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {project.type}
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 min-h-[48px]">{project.description}</p>
              
              <div className="flex justify-end items-center pt-2 border-t border-gray-100">
                {/* <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-xs text-gray-500">Active Project</span>
                </div> */}
                <Link 
                  to={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline flex items-center gap-1 transition-all duration-300 hover:gap-2"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;