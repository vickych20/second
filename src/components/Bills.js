import React from 'react'
import bannerimg3 from '../images/banner3.png'
import { AiOutlineRight } from 'react-icons/ai'

const Bills = () => {
  return (
    <div className="w-full">
      {/* <img src={bannerimg3} alt="" className="h-full w-full" /> */}


      <div className='w-full h-full py-3'>
        <div className=" border-[1px] border-gray-300 rounded-md h-full w-full">
          <div className="flex justify-between w-full py-3 px-5">
            <h2 className="text-xl font-bold">Bills and Utility</h2>
            <button className="flex items-center px-3 border-[1px] border-gray-600 rounded-md">
              <span>See All</span>
              <AiOutlineRight className="mx-2" />
            </button>
          </div>
          <div className="flex gap-x-4 px-4 pb-2 pt-4 border-b-[1px] overflow-x-auto border-gray-300 w-full">
            <p className="text-gray-400 whitespace-nowrap">Balance</p>
            <p className="text-gray-400 whitespace-nowrap">Top Up</p>
            <p className="text-gray-400 whitespace-nowrap">Internet</p>
            <p className="text-gray-400 whitespace-nowrap">Electiricity Tokens</p>
            <p className="text-gray-400 whitespace-nowrap">Tockets</p>
            <p className="text-gray-400 whitespace-nowrap">Data Packages</p>
            <p className="text-gray-400 whitespace-nowrap">Pulse</p>
            <p className="text-gray-400 whitespace-nowrap">Voucher</p>
          </div>
          <div className="grid w-full grid-cols-2 py-4 px-2 gap-x-3">
            <div className="px-2">
              <p className="pt-4 pb-2">Code Transaction </p>
              <input
                placeholder="Ex: GJG876JHGBJHG898JKGB43"
                type="text"
                className="border-[1px] py-2 border-gray-400 px-2 w-full rounded-md outline-none"
              />
            </div>
            <div className="px-2">
              <p className="pt-4 pb-2">Payment Amount</p>
              <input
                placeholder="$ 8688"
                type="text"
                className="border-[1px] py-2 border-gray-400 w-full px-2 rounded-md outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full p-3 mt-4">
            <button className="text-white py-3 px-5 bg-purple-700 rounded-md">
              Purchace
            </button>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bills