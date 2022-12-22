import React from 'react'
const Card = () => {
  return (
    <div>
       <div className="flex justify-around items-center gap-[2rem] text-[9px]">
        <div className="w-[200px] h-[80px] bg-[#C539B4] rounded-md">
          <div className="flex justify-around items-center py-3 text-white">
            <div>
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <div>
              <p>product</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-white">
            <div>
              <p>products</p>
            </div>
            <div>
              <p>340 Stock</p>
            </div>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default function Product() {
  return (
    <div>
      <div className="font-bold text-[#413F42] text-[20px] flex gap-3 items-center mb-4">
        <div>
          <p>Now Easier to choose</p>
        </div>
        <div>
          <button className="text-[10px] bg-[#ece4f0] text-[#9567ae] p-1 mb-4 rounded-lg">
            New features
          </button>
        </div>
      </div>
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
