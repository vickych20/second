import React from 'react'
import bannerimg3 from '../images/banner3.png'
import { AiOutlineRight } from 'react-icons/ai'

const Bills = () => {
  return (
    <div className="w-full md:flex md:min-w-full">
      <div className="w-[225px] shrink-0 rounded-lg mr-2 max-md:flex-col max-md:justify-center ">
        <img src={bannerimg3} alt="" className="h-full max-md:hidden flex justify-center" />
      </div>

      <div className="grow shrink w-full   border-[1px] border-gray-300 py-2 rounded-md ml-2 max-sm:hidden">
        <div className="flex justify-between py-1 px-5 w-full">
          <h2 className="text-xl font-bold">Bills and Utility</h2>
          <button className="flex items-center border-[1px] border-gray-600 pl-2 py-1 rounded-md">
            <span>See All</span>
            <AiOutlineRight className="mx-2" />
          </button>
        </div>
        <div className="flex gap-x-4 px-4 border-b-[1px] overflow-x-auto border-gray-300 py-2 w-full">
          <p className="text-gray-400 whitespace-nowrap">Balance</p>
          <p className="text-gray-400 whitespace-nowrap">Top Up</p>
          <p className="text-gray-400 whitespace-nowrap">Internet</p>
          <p className="text-gray-400 whitespace-nowrap">Electiricity Tokens</p>
          <p className="text-gray-400 whitespace-nowrap">Tockets</p>
          <p className="text-gray-400 whitespace-nowrap">Data Packages</p>
          <p className="text-gray-400 whitespace-nowrap">Pulse</p>
          <p className="text-gray-400 whitespace-nowrap">Voucher</p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 px-1 py-3 w-full">
          <div className="px-2 py-2">
            <p className="my-2">Code Transaction </p>
            <input
              placeholder="Ex: GJG876JHGBJHG898JKGB43"
              type="text"
              className="border-[1px] py-2 border-gray-400 px-2 w-full rounded-md outline-none"
            />
          </div>
          <div className="px-2 py-2">
            <p className="my-2">Payment Amount</p>
            <input
              placeholder="$ 8688"
              type="text"
              className="border-[1px] py-2 border-gray-400 w-full px-2 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="flex justify-between px-3 my-1 w-full">
          <button className="py-2 px-4 text-white bg-purple-700 rounded-md">
            Purchace
          </button>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Bills