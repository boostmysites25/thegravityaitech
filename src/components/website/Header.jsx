import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { companyDetails, logo } from "../../content/constant";
import Drawer from "react-modern-drawer";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

// Website links
export const websiteLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about-us" },
  { id: 3, title: "Services/Products", url: "/services" },
  { id: 4, title: "Portfolio", url: "/portfolio" },
  { id: 5, title: "Blogs/Research", url: "/blogs" },
  { id: 6, title: "News/Media", url: "#" },
  { id: 7, title: "Contact Us", url: "/contact-us" },
  { id: 8, title: "FAQ", url: "/faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="hidden border-b md:block relative bg-white text-black">
          <div className="hidden md:grid grid-cols-[1fr_35%] lg:grid-cols-[1fr_30%] bg-white">
            <div className="bg-white py-6"></div>
            <div className="bg-secondary top_header_social_links py-6"></div>
          </div>
          <div
            data-aos="fade-down"
            className="wrapper md:absolute inset-0 w-full flex sm:flex-row flex-col-reverse py-2 justify-between items-center"
          >
            <div className="flex sm:flex-row flex-col-reverse items-center gap-2 sm:gap-7 md:bg-white md:text-black py-2">
              <Link
                to={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 link"
              >
                <IoMail size={20} /> <span>{companyDetails.email}</span>
              </Link>
              <Link
                to={`tel:${companyDetails.phone2.replace(/[+\s-]/g, "")}`}
                className="flex items-center gap-2 link"
              >
                <ImPhone size={18} /> <span>{companyDetails.phone2}</span>
              </Link>
             
            </div>
            <div className="py-2 flex items-center gap-4">
              <Link
                to={companyDetails.whatsappLink}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <IoLogoWhatsapp
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.facebook}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaFacebookF
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.linkedin}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaLinkedinIn
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.instagram}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <AiFillInstagram
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
              <Link
                to={companyDetails.youtube}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <AiFillYoutube
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>

              <Link
                to={companyDetails.twitter}
                target="_blank"
                className="md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 md:hover:border-primary text-black md:text-white md:border border-black group"
              >
                <FaXTwitter
                  size={18}
                  className="fill-black group-hover:fill-primary md:group-hover:text-black"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white border-b border-gray-200 flex items-center py-3">
          <div className="wrapper w-full h-fit flex items-center justify-between gap-10">
            <a
              data-aos="fade-down"
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[4rem] sm:w-[6rem] scale-110"
              />
            </a>

            {/* Desktop Navigation */}
            <div
              data-aos="fade-down"
              className="hidden xl:flex items-center gap-10"
            >
              {websiteLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  className={`${
                    pathname === link.url ? "text-primary" : "text-gray-800"
                  } link text-lg font-medium`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div data-aos="fade-down" className="hidden xl:flex">
              <Link
                to={`tel:${companyDetails.phone2.replace(/[+\s-]/g, "")}`}
                className="btn-fullrounded bg-primary text-white hover:bg-gray-100 hover:text-primary border border-primary"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button data-aos="fade-down" className="xl:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
            </button>
          </div>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="py-4 px-10 z-10"
          >
            <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
              <button
                onClick={toggleDrawer}
                className="text-gray-800 text-[2.2rem]"
              >
                <IoClose />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {websiteLinks.map(({ title, url, id }) => (
                <Link
                  key={id}
                  className="text-3xl text-gray-800 font-medium transition-colors duration-300 link"
                  to={url}
                  onClick={toggleDrawer}
                >
                  {title}
                </Link>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
