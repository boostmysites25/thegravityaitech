import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-router-dom";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
import aboutImg from "../assets/images/home-about.webp";
import { PiStrategyBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { lazy } from "react";

const BrandLogos = lazy(() => import("../components/common/BrandLogos"));
const IndustriesWeServe = lazy(() =>
  import("../components/common/IndustriesWeServe")
);
const AllServices = lazy(() => import("../components/website/AllServices"));
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const Faq = lazy(() => import("../components/common/Faq"));
const SlidingComponent = lazy(() =>
  import("../components/common/SlidingComponent")
);
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const CEOMessage = lazy(() => import("../components/common/CEOMessage"));

const Home = () => {
  return (
    <div className="mt-[4.5rem]">
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
          <div data-aos="fade-up" className="max-w-[50rem] space-y-1">
            <SubHeading heading="Growth Accelerator" className="text-white" />
            <h1 className="text_xl">
              We Power Innovation Through{" "}
              <span className="text-primary">AI, Data, and Emerging Tech</span>
            </h1>
            <p className="desc !text-xl">
              Elevating Potential, Empowering Tomorrow
            </p>
            <div className="pt-10 flex sm:flex-row flex-col items-center gap-2">
              <ArrowButton
                to="/contact-us"
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-white text-white bg-transparent hover:bg-white hover:text-black">
                Our Services
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
      <section className="wrapper">
        <div
          className="sm:max-w-[85vw] lg:!max-w-[60vw] w-full aspect-[2.14/1
] mx-auto -translate-y-[5rem] lg:-translate-y-[8rem] relative z-[5] rounded-[3rem] overflow-hidden bg-black"
        >
          <img
            loading="lazy"
            src={heroImg}
            className="h-full w-full object-cover scale-[101%]"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="p-5">
            {/* <div className="2xl:absolute right-0 top-1/2 2xl:-translate-y-1/2 p-5 2xl:px-10 "> */}
            <p
              data-aos="fade-left"
              className="text-lg md:text-2xl !font-normal text-white/70"
            >
              The Gravity AI Tech delivers cutting-edge solutions tailored for
              the dynamic digital era. From custom software to AI-powered
              innovations, we bring your ideas to life with unmatched precision
              and forward-thinking technology.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-14 wrapper space-y-3">
        <div data-aos="fade-up" className="flex justify-center">
          <SubHeading heading="About Us" className="text-white" />
        </div>
        <div className="grid md:grid-cols-[40%,1fr] gap-10">
          <div className="relative w-full rounded-[3rem] overflow-hidden">
            <img
              loading="lazy"
              data-aos="fade-right"
              src={aboutImg}
              className="w-full h-full object-cover rounded-lg"
              alt="About Us"
            />
            <div
              data-aos="fade-right"
              className="absolute left-4 bottom-5 bg-primary text-white p-5 rounded-[1.5rem] shadow-xl text-center"
            >
              <h2 className="text2 !font-bold">100%</h2>
              <p className="desc !text-base">Success Rate</p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h2 className="text1">Technology That Moves You Forward</h2>
            <p className="desc text-white/70">
              At The Gravity AI Tech, we craft smart digital solutions that make
              a real difference. From AI-powered calling systems and chatbots to
              immersive AR/VR and game development—we build what today’s
              businesses need. <br />
              <br />
              Our team brings deep expertise in mobile apps, full-stack web
              development, cloud migration, and blockchain integration. We help
              companies automate, analyze, and innovate with tools like machine
              learning, NLP, IoT, and data science.
              <br />
              <br />
              Whether you're growing fast or just getting started, we design
              technology that scales with you—and works for you.
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
                  Scalable and Secure Solutions for Long-Term Growth
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
      <AllServices length={3} />
      <OurProcess showButton={true} />
      <CEOMessage />
      <IndustriesWeServe />
      <Testimonials />
      <Faq showButton={true} />
      {/* <SlidingComponent /> */}
      <WhyWorkWithUs />
      <BrandLogos />
    </div>
  );
};

export default Home;
