import { Link } from "react-router-dom";
import { companyDetails, logo } from "../../content/constant";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-7">
      <div className="bg-cover bg-secondary pt-[5rem] pb-7 space-y-8">
        <div className="wrapper space-y-8">
          <div className="flex justify-between flex-wrap gap-7">
            <div className="flex justify-start">
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
            <div className="space-y-3">
              <h5 className="text4 underline underline-offset-4">Contact</h5>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li className="text-sm">
                  <Link
                    to={`tel:${companyDetails.phone.replace(/[+\s-]/g, "")}`}
                    className="link"
                  >
                    {companyDetails.phone}
                  </Link>
                </li>
                <li className="text-sm">
                  <Link
                    to={`tel:${companyDetails.phone2.replace(/[+\s-]/g, "")}`}
                    className="link"
                  >
                    {companyDetails.phone2}
                  </Link>
                </li>
                <li className="text-sm">
                  <Link to={`mailto:${companyDetails.email}`} className="link">
                    {companyDetails.email}
                  </Link>
                </li>
                <li className="text-sm max-w-sm">{companyDetails.address}</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-300" />
          <p className="text-sm text-center text-gray-800">
            Copyright © {new Date().getFullYear()} The Gravity AI Tech| All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
