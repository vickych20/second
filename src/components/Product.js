import React from 'react'
const Card = () => {
  return (
    <div>
       <div className="flex justify-around items-center gap-[2rem] text-[9px]">
        <div className="w-[200px] h-[80px] bg-[#C539B4] rounded-md">
          <div className="flex items-center justify-around py-3 text-white">
            <div>
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <div>
              <p>product</p>
            </div>
          </div>
          <div className="flex items-center justify-around text-white">
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
        <div className="font-bold text-[20px] text-[#413F42]">
          <p className="xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[14px]">
            Now Easier to Choose
          </p>
        </div>
        <div>
          <button className="text-[10px] bg-[#ece4f0] text-[#9567ae] p-1 mb-4 rounded-lg">
            New features
          </button>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="flex flex-wrap min-w-full gap-3">
         
            <Card />
        
          
            <Card />
          
            <Card />
          
            <Card />
          
            <Card />
          </div>
        
      </div>
    </div>
  );
}
