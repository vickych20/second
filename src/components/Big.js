import React from 'react'
import {SiLetterboxd} from 'react-icons/si'


const Card = () => {
  return (
    <div>
      <div className="w-[220px] h-[300px] shadow-lg">
        <img
          src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?w=2000"
          alt=""
        />
        <div className="flex justify-center items-center relative bottom-[50px]">
          <img
            src="https://www.freeiconspng.com/thumbs/letter-a-icon-png/letter-a-icon-png-25.png"
            alt=""
            className="w-[20px]"
          />
        </div>
        <div className="text-center">
          <div className="flex item-center justify-center text-[#b556c4] relative bottom-[2rem]">
            <SiLetterboxd className="text-[35px]" />
          </div>
          <div className="relative bottom-[2rem] text-[#6d6969]">
            <p>Super shop</p>
            <p className="text-[#332FD0] flex justify-center items-center gap-1">
              verification
              <ion-icon
                className="bg-[#332FD0]"
                name="cloud-done-outline"
              ></ion-icon>
            </p>
            <div className="flex justify-center items-center gap-6 text-[#6d6969]">
              <div className="border-r-[2px] border-black-900 px-2">
                <p>Product</p>
                <p>1287</p>
              </div>
              <div className="border-r-[2px] border-black-900 px-2">
                <p>followed</p>
                <p>5243</p>
              </div>
              <div>
                <p>sold</p>
                <p>8976</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







export default function Big() {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-wrap justify-around min-w-full">
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card />
          </div>
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card />
          </div>
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card />
          </div>
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card />
          </div>
        </div>
      </div>
      
    </div>
  );
}
