import React from "react";
import imh1 from "../assets/img1.webp";
import imh2 from "../assets/img2.jpeg";
const Card = () => {
  return (
    <div className="flex justify-self-center justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
      <div className="border-[2px] border-grey-700 shadow-md rounded-md p-2 px-4">
        <div className="px-1 border-l-2 border-pink-600">
          <p className="mb-4">
            {" "}
            The goods are ready stock and ready to be shipped
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 rounded-md">
          <img src={imh2} alt="" className="rounded-md" />
          <img src={imh2} alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default function Product1() {
  return (
    <>
      <div className="grid flex-wrap lg:grid-cols-5 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1">
        {/* <div className="flex justify-evenly items-center text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4"> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
