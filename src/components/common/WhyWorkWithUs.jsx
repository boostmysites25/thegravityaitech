import React from "react";
import SubHeading from "./SubHeading";
import { useKeenSlider } from "keen-slider/react";
import { whyworkwithus } from "../../content/constant";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const animation = { duration: 40000, easing: (t) => t };

const WhyWorkWithUs = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 2,
      spacing: 30,
      origin: "auto",
    },
    breakpoints: {
      "(max-width: 650px)": {
        slides: {
          perView: 1.5,
          spacing: 10,
        },
      },
      "(min-width: 651px)": {
        slides: {
          perView: 2.2,
          spacing: 20,
        },
      },
      "(min-width: 900px)": {
        slides: {
          perView: 3.5,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3.5,
          spacing: 25,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  const prevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const nextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };
  return (
    <div className="py-14">
      <div className="wrapper flex flex-col items-center gap-3">
        <SubHeading heading="Why Work With Us" className="text-white" />
        <h2 className="text1 text-center max-w-4xl mx-auto">
          Partner with us
        </h2>
        <p className="desc text-center max-w-3xl mx-auto">
          See why businesses choose us for reliable, innovative solutions—crafted to align with their unique goals and drive measurable results.
        </p>
      </div>
      <div ref={sliderRef} className="keen-slider py-10">
        {whyworkwithus.concat(whyworkwithus).map((item) => (
          <div
            key={Math.random(100)}
            className="keen-slider__slide w-full rounded-xl overflow-hidden border border-secondary"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.title}
              className="aspect-video object-cover"
            />
            <div className="px-4 pb-4 pt-5 space-y-5">
              <h4 className="text3">{item.title}</h4>
              <p className="desc text-white/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="wrapper flex justify-end gap-5">
        <button
          onClick={prevClick}
          className="text-white text-2xl hover:text-white/70 p-2 border border-white hover:border-white/70 transition-all duration-200 rounded-xl"
        >
          <GoArrowLeft size={30} />
        </button>
        <button
          onClick={nextClick}
          className="text-white text-2xl hover:text-white/70 p-2 border border-white hover:border-white/70 transition-all duration-200 rounded-xl"
        >
          <GoArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
