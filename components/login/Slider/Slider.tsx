import React, { useState } from "react";
import { Slide } from "@/interfaces/Slide";
import { Button } from "../..";

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
      <div className="flex items-center justify-center gap-x-8 mb-16 px-[5%]">
        {slides.map((slide) => {
          const isActive = slide.id === activeSlide;
          return (
            <Button
              key={slide.id}
              onClick={() => handleActiveSlide(slide.id)}
              className={`max-w-[60px] ${isActive ? "bg-light-purple" : ""}`}
            />
          );
        })}
      </div>
      <div className="text-center ">
        <h3 className="text-3xl font-semibold text-white mb-4">
          {currentSlide?.title}
        </h3>
        <p className="text-2xl text-white">{currentSlide?.description}</p>
      </div>
    </div>
  );
};
