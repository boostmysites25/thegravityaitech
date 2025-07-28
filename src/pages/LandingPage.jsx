import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../components/common/CircularText";
import webAboutImg from "../assets/images/landing page/web-about.webp";
import appAboutImg from "../assets/images/landing page/app-about.webp";
import { PiStrategyBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { lazy } from "react";
import ContactForm from "../components/common/ContactForm";

const ServicesSection = lazy(() =>
  import("../components/landingpage/ServicesSection")
);
const IndustriesWeServe = lazy(() =>
  import("../components/common/IndustriesWeServe")
);
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const Faq = lazy(() => import("../components/common/Faq"));
const SlidingComponent = lazy(() =>
  import("../components/common/SlidingComponent")
);
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const Portfolio = lazy(() => import("../components/landingpage/Portfolio"));
const CEOMessage = lazy(() => import("../components/common/CEOMessage"));

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  return (
    <div id="hero" className="mt-[4.5rem]">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-white/70 z-[2]" />
        <ReactPlayer
          url={bannerVid}
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
        <div className="wrapper absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col-reverse gap-5 sm:grid grid-cols-[1fr,20%] items-center">
          <div data-aos="fade-up" className="max-w-[45rem] space-y-1">
            <SubHeading
              heading={
                isWeb
                  ? "Web Development Experts"
                  : "App Development Specialists"
              }
              className="!text-2xl font-semibold text-primary"
            />
            <h1 className="text_xl">
              Building the Future with{" "}
              <span className="text-primary">
                {isWeb ? "Scalable Web Solutions" : "Innovative Mobile Apps"}
              </span>
            </h1>

            <p className="desc !text-2xl font-semibold text-primary">
              {isWeb
                ? "Designing high-impact websites that boost engagement and accelerate growth."
                : "Building next-gen mobile apps that deliver intuitive and seamless experiences."}
            </p>

            <div className="pt-10 flex sm:flex-row flex-col items-center gap-2">
              <ArrowButton
                scrollTo="contact"
                offset={-100}
                className="bg-black text-white hover:bg-transparent hover:text-black border border-black"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link
                to="services"
                offset={-100}
                smooth
                duration={500}
                spy
                className="btn-rounded bg-primary text-white hover:bg-transparent hover:text-primary border border-primary"
              >
                Explore Our {isWeb ? "Web" : "App"} Services
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end sm:self-end sm:pr-[3rem] lg:pr-[8rem]"
          >
            <CircularText />
          </div>
        </div>
      </section>

      <section id="about" className="py-14 wrapper space-y-3">
        <div data-aos="fade-up" className="flex justify-center">
          <SubHeading heading="About Us" className="text-black" />
        </div>
        <div className="grid md:grid-cols-[40%,1fr] gap-7">
          <div className="relative w-full rounded-[3rem] overflow-hidden aspect-[1/1.2]">
            <img
              loading="lazy"
              data-aos="fade-right"
              src={isWeb ? webAboutImg : appAboutImg}
              className="w-full h-full object-cover rounded-lg"
              alt="About Us"
            />
            <div
              data-aos="fade-right"
              className="absolute left-4 bottom-5 bg-primary text-white p-5 rounded-[1.5rem] shadow-xl text-center"
            >
              <h2 className="text2">100%</h2>
              <p className="desc">Success Rate</p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h2 className="text1">
              Fueling Digital Success with{" "}
              {isWeb ? "Scalable Web Solutions" : "Innovative App Solutions"}
            </h2>

            <p className="desc text-black/70">
              At <b className="text-black">The Gravity AI Technologies</b>, we
              go beyond development — we build digital experiences that
              transform businesses. Our mission is to deliver secure,
              intelligent, and future-proof solutions tailored to your unique
              goals. Whether it's{" "}
              {isWeb
                ? "engineering dynamic websites, developing scalable web platforms,"
                : "crafting intuitive mobile applications, optimizing user engagement,"}
              or integrating AI-powered tools and data-driven insights, we
              ensure your business stays ahead of the curve. We combine
              technical excellence with a deep understanding of user behavior to
              create solutions that are not only functional but also drive
              results. From strategy to execution, our end-to-end approach helps
              you innovate, scale, and lead with confidence in the ever-evolving
              digital landscape.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-6">
              <div className="bg-gray-100 flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-white rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <PiStrategyBold size={30} className="fill-secondary" />
                </div>
                <p className="text3">Future-Focused Strategies</p>
              </div>
              <div className="bg-gray-100 flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-white rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <MdSecurity size={30} className="fill-secondary" />
                </div>
                <p className="text3">Secure and Scalable Systems</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  Scalable and Secure{" "}
                  {isWeb ? "Web Solutions" : "App Solutions"} for Long-Term
                  Growth
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  AI-Driven Insights to Empower Decision-Making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection page={page} />
      <Portfolio page={page} />
      <OurProcess />
      <CEOMessage />
      <IndustriesWeServe />
      <Testimonials />
      <Faq />
      {/* <SlidingComponent /> */}
      <WhyWorkWithUs />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
