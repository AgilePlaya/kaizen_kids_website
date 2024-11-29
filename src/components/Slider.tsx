import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }: { [key: string]: any }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-4xl font-bold p-4">Gallery</h1>
      <div>
        <div className="relative flex justify-center m-4">
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <FaArrowAltCircleLeft
                  size="50"
                  className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] backdrop-blur-sm"
                  onClick={prevSlide}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    key={slide.id}
                    alt="/"
                    width="1440"
                    height="600"
                    loading="lazy"
                    className="rounded-3xl object-cover"
                  />
                )}
                <FaArrowAltCircleRight
                  size="50"
                  className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] backdrop-blur-sm"
                  onClick={nextSlide}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
