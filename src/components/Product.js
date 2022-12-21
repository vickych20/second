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
      <div>
        <div className="flex justify-between items-center gap-[1rem] py-5 text-[13px] text-[#227C70] max-md:hidden ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* <div className="w-[200px] h-[80px] bg-[#ADA2FF] rounded-md">
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
        <div className="w-[200px] h-[80px] bg-[#00ABB3] rounded-md">
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
        <div className="w-[200px] h-[80px] bg-[#332FD0] rounded-md">
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
        <div className="w-[200px] h-[80px] bg-[#9A1663] rounded-md">
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
    </div> */}
      </div>
    </div>
  );
}
