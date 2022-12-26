import React from "react";
import { IoMdShirt } from "react-icons/io";
import { FcElectronics } from "react-icons/fc";
import { IoGameControllerSharp } from "react-icons/io5";
import { SiEpicgames } from "react-icons/si";
import { MdSportsBasketball } from "react-icons/md";
import { MdSportsKabaddi } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { MdViewComfy } from "react-icons/md";
import { TbViewportNarrow } from "react-icons/tb";
import { AiFillTrophy } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";

export default function Second() {
  return (
    <div className="py-[4%]">
      <div>
        <h1 className="font-bold text-[18px] text-[#2C272E]">
          Choice category
        </h1>
      </div>
      <div className="2xl:p-[32px] flex flex-wrap justify-around min-w-full">
        <div className="items-center">
          <div className="flex justify-center p-2">
            <IoMdShirt className="text-[25px] text-[#1A4D2E]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Man fashion</p>
          </div>
        </div>

        <div className="items-center">
          <div className="flex justify-center p-2">
            <FcElectronics className="text-[25px] text-[#36C2CB]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Gadget Electronic</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <IoGameControllerSharp className="text-[25px] text-[#1363DF]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <AiFillTrophy className="text-[25px] text-[#4D4C7D]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <TbViewportNarrow className="text-[25px] text-[#2A2550]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <HiViewGridAdd className="text-[25px] text-[#6E3CBC]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Computer & Laptop</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <MdViewComfy className="text-[25px] text-[#B000B9]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Gamming</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <MdSportsBasketball className="text-[25px] text-[#FF5F7E]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>gaming</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <MdSportsKabaddi className="text-[25px] text-[#FFAB4C]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Property</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <SiEpicgames className="text-[25px] text-[#753188]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Kids Fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="flex justify-center p-2">
            <AiOutlineCar className="text-[25px] text-[#9AE66E]" />
          </div>
          <div className="flex justify-center p-2 text-center">
            <p>Sports</p>
          </div>
        </div>
      </div>
    </div>
  );
}
