import React from 'react'
import bannerimg3 from '../images/banner3.png'
import { AiOutlineRight } from 'react-icons/ai'

const Bills = () => {
  return (
    <div className='w-full md:h-[330px] px-5 md:flex md:flex-row md:justify-evenly md: flex flex-col justify-center items-center py-4' 
    style={{gridTemplateColumns: "2fr 6fr"}}>

        <img src={bannerimg3} alt="" className='md:w-[28%] w-[40%] my-2 rounded-lg max-md:my-2'  />

        <div className='md:w-[65%] h-full w-full border-[1px] border-gray-300 py-3 rounded-md overflow-hidden'>
            <div className='flex justify-between py-1 px-5'>
                <h2 className='text-xl font-bold'>Bills and Utility</h2>
                <button className='flex items-center border-[1px] border-gray-600 pl-2 py-1 rounded-md'>
                    <span>See All</span>
                    <AiOutlineRight className='mx-2' />
                </button>
            </div>
            <div className='flex gap-x-4 px-4 border-b-[1px] overflow-x-auto border-gray-300 py-2'>
                <p className='text-gray-400 whitespace-nowrap'>Balance</p>
                <p className='text-gray-400 whitespace-nowrap'>Top Up</p>
                <p className='text-gray-400 whitespace-nowrap'>Internet</p>
                <p className='text-gray-400 whitespace-nowrap'>Electiricity Tokens</p>
                <p className='text-gray-400 whitespace-nowrap'>Tockets</p>
                <p className='text-gray-400 whitespace-nowrap'>Data Packages</p>
                <p className='text-gray-400 whitespace-nowrap'>Pulse</p>
                <p className='text-gray-400 whitespace-nowrap'>Voucher</p>
            </div>
            <div className='grid grid-cols-2 gap-x-3 px-1 py-3'>
                <div className='px-2 py-2'>
                    <p className='my-2'>Code Transaction </p>
                    <input placeholder='Ex: GJG876JHGBJHG898JKGB43' type="text" className='border-[1px] py-2 border-gray-400 px-2 w-full rounded-md outline-none' />
                </div>
                <div className='px-2 py-2'>
                    <p className='my-2'>Payment Amount</p>
                    <input placeholder='$ 8688' type="text" className='border-[1px] py-2 border-gray-400 w-full px-2 rounded-md outline-none' />
                </div>
            </div>
            <div className='flex justify-between px-3 my-1'>
                <button className='py-2 px-4 text-white bg-purple-700 rounded-md'>Purchace</button>
                <p>Help</p>
            </div>
        </div>
    </div>
  )
}

export default Bills