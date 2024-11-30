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
        <div className="relative flex justify-center m-4 px-2 mb-32">
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
                  className="absolute top-[50%] left-[30px] text-gray-100/80 cursor-pointer select-none hover:text-white ease-in duration-300 z-[2]"
                  onClick={prevSlide}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    key={slide.id}
                    alt="/"
                    width="1440"
                    height="960"
                    loading="lazy"
                    className="rounded-3xl object-cover object-center"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAXSURBVChTY6ivr/9PDB5ViBdTW2H9fwCz5PhxPAiOqQAAAABJRU5ErkJggg=="
                    unoptimized
                  />
                )}
                <FaArrowAltCircleRight
                  size="50"
                  className="absolute top-[50%] right-[30px] text-gray-100/80 cursor-pointer select-none hover:text-white ease-in duration-300 z-[2]"
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
