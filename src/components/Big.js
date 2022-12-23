import React from 'react'
import { SiLetterboxd } from 'react-icons/si'


const Card = () => {
  return (
    <div className="w-[220px] h-[300px] shadow-lg my-4">
      <div className='relative'>
        <img
          src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?w=2000"
          alt=""
        />
        <SiLetterboxd className="absolute bottom-[-20px] left-[50%] text-[35px]" style={{
          transform: "translate(-50%, 0)"
        }} />
      </div>
      <div className="w-full text-center mt-6">
        <div className="w-full text-[#6d6969]">
          <p>Super shop</p>
          <p className="text-[#332FD0] flex justify-center items-center">
            verification
            <ion-icon
              className="bg-[#332FD0]"
              name="cloud-done-outline"
            ></ion-icon>
          </p>
          <div className="w-full flex justify-evenly items-center text-[#6d6969]">
            <div className="my-2 border-black-900">
              <p>Product</p>
              <p>1287</p>
            </div>
            <div className="my-2 border-black-900">
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
  );
}







export default function Big() {
  return (
    <div>
      <div className="w-full">
        <div className="flex flex-wrap justify-around min-w-full">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
