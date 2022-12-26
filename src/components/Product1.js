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
      <div className="w-full">
        <div className="flex flex-wrap min-w-full">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
