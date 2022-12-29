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

const choices = [
  {
    icon: <IoMdShirt className="text-[25px] text-[#1A4D2E]" />,
    name: "Man Fashion"
  }, {
    icon: <FcElectronics className="text-[25px] text-[#36C2CB]" />,
    name: "Gadget Electronics"
  },
  {
    icon: <AiFillTrophy className="text-[25px] text-[#4D4C7D]" />,
    name: "Man Fashion"
  },
  {
    icon: <TbViewportNarrow className="text-[25px] text-[#2A2550]" />,
    name: "Man Fashion"
  }, 
  {
    icon: <HiViewGridAdd className="text-[25px] text-[#6E3CBC]" />,
    name: "Man fashion"
  },
  {
    icon: <MdViewComfy className="text-[25px] text-[#B000B9]" />,
    name: "Man Fashion"
  }, 
  {
    icon: <MdSportsBasketball className="text-[25px] text-[#FF5F7E]" />,
    name: "Man Fashion"
  },
  {
    icon: <MdSportsKabaddi className="text-[25px] text-[#FFAB4C]" />,
    name: "Man Fashion"
  }, 
  {
    icon: <SiEpicgames className="text-[25px] text-[#753188]" />,
    name: "Man Fashion"
  }, 
  {
    icon: <AiOutlineCar className="text-[25px] text-[#9AE66E]" />,
    name: "Man Fashion"
  },
  {
    icon: <HiViewGridAdd className="text-[25px] text-[#6E3CBC]" />,
    name: "Man fashion"
  },
]
export default function Second() {
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-[18px] text-[#2C272E]">
          Choice category
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 justify-around  min-w-full my-4 ">
        {choices.map((choice) => {
            return (
              <div className="flex flex-col items-center bg-gray-100 shadow-md py-3">
                <div className="flex justify-center items-center rounded-[50%] p-2 w-[55px] h-[55px] bg-gray-200">
                  {choice.icon}
                </div>
                <div className="flex justify-center p-2 text-center">
                  <p>{choice.name}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}
