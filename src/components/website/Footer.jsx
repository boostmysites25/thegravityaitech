import { Link } from "react-router-dom";
import { companyDetails, logo } from "../../content/constant";
import { websiteLinks } from "./Header";
import { allServices } from "../../content/services";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { createUrlParam } from "../../utils/helper";

const Footer = () => {
  return (
    <div className="pt-7 bg-secondary">
      <div className="bg-cover pt-[5rem] pb-7 space-y-8">
        <div className="wrapper space-y-8">
          <div className="grid md:grid-cols-6 lg:grid-cols-[25%,1fr,1fr,1fr] gap-7">
            <div className="md:col-span-6 lg:col-span-1 flex justify-start">
              <div className="flex flex-col items-center gap-3">
                <img
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  className="w-[13rem] object-contain"
                />
                <div className="flex items-center gap-3 pt-3">
                  <Link
                    to={companyDetails.facebook}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaFacebookF
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.youtube}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaYoutube
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <AiFillInstagram
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>

                  <Link
                    to={companyDetails.twitter}
                    target="_blank"
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaXTwitter
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <h5 className="text4 underline underline-offset-4">
                About Company
              </h5>
              <ul className="flex flex-col gap-3 list-disc pl-5">
                {websiteLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url} className="link ">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <h5 className="text4 underline underline-offset-4">Expertise</h5>
              <ul className="flex flex-col gap-3 list-disc pl-5">
                {allServices.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/services/${createUrlParam(item.title)}`}
                      className="link "
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <h5 className="text4 underline underline-offset-4">Contact</h5>
              <ul className="flex flex-col gap-3">
                <li className="">
                  <Link
                    to={`tel:${companyDetails.phone2.replace(/[+\s-]/g, "")}`}
                    className="link"
                  >
                    {companyDetails.phone2}
                  </Link>
                </li>
                <li className="">
                  <Link to={`mailto:${companyDetails.email}`} className="link">
                    {companyDetails.email}
                  </Link>
                </li>
                <li className=" max-w-sm">{companyDetails.address}</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-300" />
          <p className=" text-center text-gray-800">
            Copyright © {new Date().getFullYear()} The Gravity AI Tech | All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
