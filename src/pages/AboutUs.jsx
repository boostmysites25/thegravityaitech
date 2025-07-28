import banner from "../assets/videos/aboutus.mp4";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.png";
import ourMissionImg from "../assets/images/our mission.png";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactForm from "../components/common/ContactForm";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div
            data-aos="fade-up"
            className="flex h-full rounded-lg overflow-hidden justify-start"
          >
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-cover w-full aspect-video h-full"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Technology That Moves You Forward
            </h2>
            <p data-aos="fade-up" className="desc">
              At The Gravity AI Tech, we craft smart AI-Powered solutions that
              make a real difference. From AI-powered calling systems and AI
              Automation for Businesses to Custom AI Model Development and AI
              Software Development —we build what today’s businesses need.
              <br />
              <br />
              Our team brings deep expertise in Generative AI Solutions, Agentic
              AI Solutions, Blockchain Development, Cloud Services, Internet of
              Things (IoT) Development, Virtual Reality (VR) & Augmented Reality
              (AR), Game Development, Data Analytics & Business Intelligence,
              App & Web Development, Robotic Process Automation. We help
              companies automate, analyze, and innovate with the use of AI
              technology.
              <br />
              <br />
              Whether you are growing fast or just getting started, we design
              technology that scales with you and works for you. Let’s create
              something remarkable, together.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-cover aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              Our vision is to transcend limitations and redefine what's
              possible through forward-thinking innovation. We empower
              businesses with adaptive, transformative technology solutions
              designed to lead change and spark progress. By shaping ideas into
              intelligent breakthroughs, we aim to be a trusted partner in
              building the future.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <SubHeading heading="Our Mission" className="" />
            <p className="desc">
              Our mission is to drive bold innovation that empowers businesses
              to reach new heights. We deliver cutting-edge, adaptable
              technology solutions designed to evolve alongside the fast-paced
              digital landscape. By simplifying complexity into smart,
              actionable solutions, we enable organizations to overcome
              challenges, embrace emerging trends, and confidently shape their
              future. Committed to excellence and true collaboration, we create
              lasting value and meaningful impact for our clients and
              communities.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="object-cover aspect-video h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      {/* <OurCoreValues /> */}
      <ContactForm />
    </div>
  );
};

export default AboutUs;
