import React from "react";
import SubHeading from "./SubHeading";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ceoImage from "../../assets/images/ceo.png";

const CEOMessage = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[40%] h-[70%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[40%] h-[70%] rounded-full bg-secondary/5 blur-[120px]"></div>
      </div>

      <div className="wrapper relative z-10">
        <div data-aos="fade-up" className="flex justify-center mb-10">
          <SubHeading
            heading="A Message from Our Founder and CEO - Dr. Chintan Patel"
            className="text-primary font-semibold text-lg md:!text-2xl"
          />
        </div>

        <div className="pt-4 grid md:grid-cols-[1fr,1.5fr] gap-10 items-center">
          {/* CEO Image */}
          <div data-aos="fade-right" className="relative mx-auto max-w-md">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-large shadow-primary/20">
              <img
                src={ceoImage}
                alt="CEO of The Gravity AI Tech"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>
          </div>

          {/* CEO Message */}
          <div data-aos="fade-left" className="relative space-y-6">
            <FaQuoteLeft className="text-primary/30 text-6xl absolute -top-10 -left-4" />

            <h2 className="text2 text-gray-800">
              Transforming Ideas into{" "}
              <span className="text-primary">Intelligent Solutions</span>
            </h2>

            <div className="space-y-4 text-gray-700 relative">
              <p className="desc leading-relaxed">
                At The Gravity AI Tech, we believe that technology should not
                only solve today's challenges but anticipate tomorrow's
                opportunities. Our journey began with a simple vision: to make
                cutting-edge AI and emerging technologies accessible to
                businesses of all sizes.
              </p>

              <p className="desc leading-relaxed">
                What sets us apart is our commitment to understanding your
                unique business needs before recommending solutions. We don't
                just build products; we craft strategic digital assets that
                drive real business value and sustainable growth.
              </p>

              <p className="desc leading-relaxed">
                As we continue to push the boundaries of what's possible with
                AI, blockchain, and cloud technologies, our focus remains
                unwavering—delivering excellence, fostering innovation, and
                building lasting partnerships with our clients.
              </p>
            </div>

            <FaQuoteRight className="text-primary/30 text-6xl absolute -bottom-10 -right-4" />

            {/* <div className="pt-6 border-t border-primary/20">
              <h4 className="text3 text-secondary">Chintan Bhatt</h4>
              <p className="text-white/70">Founder & CEO, The Gravity AI Tech</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
