import SubHeading from "./SubHeading";
import arrowTopCurved from "../../assets/images/arrow-top-curved.png";
import arrowBottomCurved from "../../assets/images/arrow-bottom-curved.png";
import ArrowButton from "./ArrowButton";

const process = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "We start by diving deep into your goals, gathering insights, and outlining a strategic roadmap tailored to your business.",
  },
  {
    id: "02",
    title: "Design & Development",
    desc: "Our team blends creativity and technology to design intuitive interfaces and build robust, scalable solutions.",
  },
  {
    id: "03",
    title: "Testing & Quality Assurance",
    desc: "Every component is tested thoroughly to ensure flawless performance, security, and user satisfaction.",
  },
  {
    id: "04",
    title: "Launch & Ongoing Support",
    desc: "We launch your solution with precision and continue to support, update, and optimize it for long-term success.",
  },
];

const OurProcess = ({ showButton }) => {
  return (
    <div className="py-7">
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-[55%,1fr] items-center gap-6 md:gap-16"
        >
          <div className="space-y-3">
            <SubHeading heading="Our Process" className="text-white" />
            <h2 className="text1">Turning Ideas into Impactful Solutions</h2>
          </div>
          <p className="desc text-white/70">
            Our approach blends strategy, creativity, and technology to deliver meaningful results.
            From discovery and planning to design, development, and launch, we follow a streamlined process
            that prioritizes transparency, precision, and your long-term success.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 sm:mt-16"
        >
          {process.map((item) => (
            <div
              key={item.id}
              className="sm:odd:translate-y-[1rem] flex flex-col space-y-3 p-6 rounded-xl border border-primary"
            >
              <h2 className="text1 text-stroke font-sans">{item.id}</h2>
              <h4 className="text-lg text-white/70">{item.title}</h4>
              <p className="text3">{item.desc}</p>
            </div>
          ))}
          <img
            loading="lazy"
            src={arrowTopCurved}
            top
            className="sm:block hidden absolute left-[40%] -top-[3rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            className="sm:block hidden absolute left-[35%] lg:left-[15%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            top
            className="lg:block hidden absolute left-[65%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
        </div>
        {showButton && (
          <div data-aos="fade-up" className="pt-8 sm:pt-24">
            <ArrowButton
              to="/services"
              className="bg-black border border-primary text-white hover:bg-primary !w-fit mx-auto"
            >
              Let’s Build Your Success Together
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProcess;
