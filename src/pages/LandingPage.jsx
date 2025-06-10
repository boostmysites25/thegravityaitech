import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-scroll";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
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
        <div className="absolute inset-0 bg-black/60 z-[2]" />
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
              className="text-white"
            />
            <h1 className="text_xl">
              Building the Future with{" "}
              <span className="text-primary">
                {isWeb ? "Scalable Web Solutions" : "Innovative Mobile Apps"}
              </span>
            </h1>


            <p className="desc">
              {isWeb
                ? "Designing high-impact websites that boost engagement and accelerate growth."
                : "Building next-gen mobile apps that deliver intuitive and seamless experiences."}
            </p>

            <div className="pt-10 flex sm:flex-row flex-col items-center gap-2">
              <ArrowButton
                scrollTo="contact"
                offset={-100}
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link
                to="services"
                offset={-100}
                smooth
                duration={500}
                spy
                className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-white text-white bg-transparent hover:bg-white hover:text-black"
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
      {/* <section className="wrapper">
        <div
          className="sm:max-w-[85vw] lg:!max-w-[60vw] w-full aspect-[2.14/1
] mx-auto -translate-y-[4rem] lg:-translate-y-[8rem] relative z-[5] rounded-[3rem] overflow-hidden bg-black"
        >
          <img
            loading="lazy"
            src={heroImg}
            className="h-full w-full object-cover scale-[101%]"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="2xl:absolute right-0 top-1/2 2xl:-translate-y-1/2 p-5 2xl:px-10 2xl:w-2/5">
            <p
              data-aos="fade-left"
              className="text-lg md:text-2xl !font-normal text-white/70"
            >
              <b className="text-white">The Gravity AI Technologies</b> empowers forward-thinking businesses with transformative{" "}
              {isWeb
                ? "web solutions designed to boost digital presence, streamline operations, and drive sustained growth."
                : "mobile solutions that combine sleek design with high performance for an unmatched user experience."}{" "}
              Our expertise spans from building intelligent, custom {isWeb ? "web platforms" : "mobile applications"} to implementing robust AI-powered systems that automate, adapt, and scale.
              We don't just develop products—we craft digital ecosystems that help your brand lead in an ever-evolving tech landscape.
            </p>

          </div>
        </div>
      </section> */}

      <section id="about" className="py-14 wrapper space-y-3">
        <div data-aos="fade-up" className="flex justify-center">
          <SubHeading heading="About Us" className="text-white" />
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
              {isWeb
                ? "Scalable Web Solutions"
                : "Innovative App Solutions"}
            </h2>

            <p className="desc text-white/70">
              At <b className="text-white">The Gravity AI Technologies</b>, we go beyond development — we build digital experiences that transform businesses. Our mission is to deliver secure, intelligent, and future-proof solutions tailored to your unique goals. Whether it's{" "}
              {isWeb
                ? "engineering dynamic websites, developing scalable web platforms,"
                : "crafting intuitive mobile applications, optimizing user engagement,"}
              or integrating AI-powered tools and data-driven insights, we ensure your business stays ahead of the curve.
              We combine technical excellence with a deep understanding of user behavior to create solutions that are not only functional but also drive results.
              From strategy to execution, our end-to-end approach helps you innovate, scale, and lead with confidence in the ever-evolving digital landscape.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-6">
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <PiStrategyBold size={30} className="fill-secondary" />
                </div>
                <p className="text3">Future-Focused Strategies</p>
              </div>
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
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
