import React from "react";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/images/client-logos/1.png";
import img2 from "../../assets/images/client-logos/2.png";
import img3 from "../../assets/images/client-logos/3.png";
import img4 from "../../assets/images/client-logos/4.png";
import img5 from "../../assets/images/client-logos/5.png";
import img6 from "../../assets/images/client-logos/6.png";
import img7 from "../../assets/images/client-logos/7.png";
import img8 from "../../assets/images/client-logos/8.png";
import img9 from "../../assets/images/client-logos/9.png";
import img10 from "../../assets/images/client-logos/10.png";
import SubHeading from "./SubHeading";

const animation = { duration: 10000, easing: (t) => t };

const BrandLogos = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 30,
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
  return (
    <div className="relative py-14">
      <div className="relative z-10">
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 text-center max-w-4xl mx-auto">
            Join our happy clients
          </h2>
        </div>
        <div
          data-aos="fade-up"
          ref={sliderRef}
          className="keen-slider mt-1 py-[2rem]"
        >
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
            (img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center px-3"
              >
                <img
                  loading="lazy"
                  src={img}
                  alt="featured in"
                  className="object-contain bg-white rounded-full"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
