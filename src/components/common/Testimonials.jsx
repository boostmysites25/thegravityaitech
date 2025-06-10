import React from "react";
import SubHeading from "./SubHeading";
import img from "../../assets/images/testimonials-img.webp";
import { useKeenSlider } from "keen-slider/react";
import { testimonials } from "../../content/constant";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  // Button click handler
  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next(); // Move to the next slide
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev(); // Move to the prev slide
    }
  };
  return (
    <div className="py-7">
      <div className="wrapper flex flex-col gap-3 items-center">
        <div data-aos="fade-up">
          <SubHeading heading="Clients Testimonials" className="text-white" />
        </div>
        <h2 data-aos="fade-up" className="text1 text-center max-w-2xl mx-auto">
          What Our Clients Say About Us
        </h2>
        <div
          data-aos="fade-up"
          className="max-w-[70rem] w-full mx-auto pt-5 md:grid grid-cols-2 items-center"
        >
          <div className="relative bg-secondary rounded-xl px-6 pt-6 pb-[4rem] h-full w-full">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="keen-slider__slide text-black space-y-5 md:pr-[4rem]"
                >
                  <div className="flex items-center gap-2">
                    <img
                      loading="lazy"
                      src={item.img}
                      className="w-[3rem] min-w-[3rem] h-[3rem] rounded-full object-cover"
                      alt={item.author}
                    />
                    <div>
                      <h4 className="text4">{item.author}</h4>
                      <p className="text-black/70">{item.position}</p>
                    </div>
                  </div>
                  <p className="desc !text-lg !font-normal">{item.quote}</p>
                </div>
              ))}
            </div>
            <div className="absolute flex w-fit items-center gap-5 z-[1] right-[3rem] bottom-6">
              <button onClick={handlePrevClick}>
                <GoArrowLeft
                  size={30}
                  className="fill-black hover:fill-black/70"
                />
              </button>
              <button onClick={handleNextClick}>
                <GoArrowRight
                  size={30}
                  className="fill-black hover:fill-black/70"
                />
              </button>
            </div>
          </div>
          <img
            loading="lazy"
            src={img}
            className="md:block hidden w-[105%] h-[90%] object-cover rounded-xl -translate-x-[2rem]"
            alt="Testimonials"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
