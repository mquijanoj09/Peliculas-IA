import Image from "next/image";
import Img_Pel from "@/assets/grid-peliculas.jpeg";
import { Slider } from "@/components";
import { slides } from "@/data/slidesData";

export const Half = () => {
  return (
    <div className="bg-light-grey lg:flex items-center justify-center flex-col gap-y-16 px-60 hidden">
      <h1 className="text-white text-6xl font-bold self-start">🎥 IA Movies</h1>
      <Image src={Img_Pel} alt="Peliculas IA" />
      <Slider slides={slides} />
    </div>
  );
};
