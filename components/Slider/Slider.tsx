import React, { useState } from "react";
import { Button } from "..";

export interface Slide {
  title: string;
  description: string;
  id: string;
}

interface Props {
  slides: Slide[];
}

export const Slider = ({ slides }: Props) => {
  const [activeSlide, setActiveSlide] = useState("1");
  const currentSlide = slides.find((slide) => slide.id === activeSlide);

  function handleActiveSlide(id: string) {
    setActiveSlide(id);
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-x-3 mb-5 px-[5%]">
        {slides.map((slide) => {
          const isActive = slide.id === activeSlide;
          return (
            <Button
              key={slide.id}
              onClick={() => handleActiveSlide(slide.id)}
              className={`max-w-[40px] ${isActive ? "bg-light-purple" : ""}`}
            />
          );
        })}
      </div>
      <div className="text-center ">
        <h3 className="text-lg font-semibold text-white mb-2">
          {currentSlide?.title}
        </h3>
        <p className="text-base text-white">{currentSlide?.description}</p>
      </div>
    </div>
  );
};
