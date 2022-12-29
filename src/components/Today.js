import React from "react";
import { MdLocationOn } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import Keybord from "../Keybord";
import { useNavigate } from "react-router-dom";

const Card = ({ image, name, price, tag, sold, location, onClick }) => {
  return (
    <div
      className="flex justify-between items-center gap-[1rem] py-5  text-[13px] text-[#3C4048] leading-loose	rounded-lg"
      onClick={onClick}
    >
      <div className="w-[180px] h-[280px] shadow-lg rounded-b-lg">
        <div className="bg-[#d4d6db] flex justify-center items-center h-[130px] rounded-t-lg">
          <img src={image} alt="" className=" h-[100%] flex items-center	" />
        </div>
        <div className="m-4">
          <p className="text-[10px]">{tag}</p>
          <p className="font-bold text-[#3C4048] text-[10px]">{name}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="flex font-bold"></p> <p>${price}</p>
            </div>
            <div className="text-[22px] gap-[4px] flex">
              <div className="flex justify-center item-center">
                <RiStarSLine className="text-[#b78914]" />
                <p className="text-[13px]">4.7</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[12px] gap-[10px]">
            <div className="flex justify-around items-center text-[#]">
              <MdLocationOn className="text-[#d01df4]" />
              <p>{location}</p>
            </div>
            <div>
              <p>{sold}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Today() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="font-bold text-[20px] text-[#413F42]">
        <p className="xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[14px]">
          Today is only for you
        </p>
      </div>

      {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      <div className="grid flex-wrap lg:grid-cols-5 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1">
        {Keybord.map((item) => (
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card
              onClick={() => navigate(`/keybord/${item.id}`)}
              image={item.image}
              name={item.name}
              price={item.price}
              sold={item.sold}
              tag={item.tag}
              location={item.location}
            />
          </div>
        ))}
        {Keybord.map((item) => (
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card
              onClick={() => navigate(`/keybord/${item.id}`)}
              image={item.image}
              name={item.name}
              price={item.price}
              sold={item.sold}
              tag={item.tag}
              location={item.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
