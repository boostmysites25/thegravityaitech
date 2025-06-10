import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { companyDetails } from "../../content/constant";
import { ImPhone } from "react-icons/im";

const PageBanner = ({ banner, title, links }) => {
  return (
    <div data-aos="fade-up" className="min-h-[80vh] relative flex items-center">
      <ReactPlayer
        url={banner}
        playing
        muted
        loop
        playsinline
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        config={{
          file: {
            attributes: {
              style: {
                objectFit: "cover",
                width: "100%",
                height: "100%",
              },
            },
          },
        }}
      />
      <div className="absolute inset-0 text-white bg-black/50 z-[2] flex items-center">
        <div className="wrapper w-full grid grid-cols-[10%,1fr,10%] items-center h-full relative top-1/2 -translate-y-[50%]">
          <div className="flex flex-col gap-5 sm:gap-7">
            <Link
              target="_blank"
              to={companyDetails.linkedin}
              className="w-[1.75rem] h-[1.75rem] bg-white rounded-full text-black hover:bg-tertiary hover:text-primary transition duration-200 flex justify-center items-center"
            >
              <FaLinkedinIn size={17} />
            </Link>
            <Link
              target="_blank"
              to={companyDetails.instagram}
              className="w-[1.75rem] h-[1.75rem] bg-white rounded-full text-black hover:bg-tertiary hover:text-primary transition duration-200 flex justify-center items-center"
            >
              <AiFillInstagram size={18} />
            </Link>
            <Link
              target="_blank"
              to={companyDetails.facebook}
              className="w-[1.75rem] h-[1.75rem] bg-white rounded-full text-black hover:bg-tertiary hover:text-primary transition duration-200 flex justify-center items-center"
            >
              <FaFacebookF size={17} />
            </Link>
            <Link
              target="_blank"
              to={companyDetails.twitter}
              className="w-[1.75rem] h-[1.75rem] bg-white rounded-full text-black hover:bg-tertiary hover:text-primary transition duration-200 flex justify-center items-center"
            >
              <FaXTwitter size={17} />
            </Link>
          </div>
          <div className="w-full text-center flex justify-center flex-col items-center sm:translate-y-[10%]">
            <h1 className="text1 !font-medium">{title}</h1>
            <div className="flex items-center gap-2 mt-3 z-10">
              {links.map((link) => (
                <div
                  key={link.title}
                  className="flex items-center gap-2 uppercase text-sm"
                >
                  <Link
                    to={link.url}
                    className={`font-outfit font-light ${
                      link.url ? "link" : "cursor-default"
                    }`}
                  >
                    {link.title}
                  </Link>
                  <span className={!link.url && "hidden"}>-</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rotate-90 w-full flex justify-center">
            <div className="text-lg min-w-[12rem] -translate-y-[1rem] md:-translate-y-[2rem] lg:-translate-y-[3rem] flex justify-center">
              <Link
                to={`tel:${companyDetails.phone}`}
                className="link flex items-center gap-2"
              >
                <ImPhone size={15} /> {companyDetails.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
