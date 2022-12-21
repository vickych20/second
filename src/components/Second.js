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
    <div>
      <div>
        <h1 className="font-bold text-[18px] text-[#2C272E]">
          Choice category
        </h1>
      </div>
      <div className="flex justify-between item-center py-6 gap-[2rem] text-[12px] max-md:hidden">
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <IoMdShirt className="text-[25px] text-[#1A4D2E]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Man fashion</p>
          </div>
        </div>

        <div className="items-center">
          <div className="p-2 flex justify-center">
            <FcElectronics className="text-[25px] text-[#36C2CB]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Gadget Electronic</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <IoGameControllerSharp className="text-[25px] text-[#1363DF]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <AiFillTrophy className="text-[25px] text-[#4D4C7D]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <TbViewportNarrow className="text-[25px] text-[#2A2550]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Man fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <HiViewGridAdd className="text-[25px] text-[#6E3CBC]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Computer & Laptop</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <MdViewComfy className="text-[25px] text-[#B000B9]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Gamming</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <MdSportsBasketball className="text-[25px] text-[#FF5F7E]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>gaming</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <MdSportsKabaddi className="text-[25px] text-[#FFAB4C]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Property</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <SiEpicgames className="text-[25px] text-[#753188]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Kids Fashion</p>
          </div>
        </div>
        <div className="items-center">
          <div className="p-2 flex justify-center">
            <AiOutlineCar className="text-[25px] text-[#9AE66E]" />
          </div>
          <div className="p-2 flex text-center justify-center">
            <p>Sports</p>
          </div>
        </div>
      </div>
    </div>
  );
}
