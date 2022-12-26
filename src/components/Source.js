import React, { useState, useEffect } from 'react'
import vw1 from '../images/vw1.jpg'
import {AiFillStar} from 'react-icons/ai'
import { FiChevronDown } from "react-icons/fi";
import { useParams } from 'react-router-dom';
import Products from '../Product';
import Keybord from '../Keybord';
import Our from '../Our'
export default function Source() {

  const { id, key_id } = useParams();
  const {  Our_id } = useParams();
  const [p, setP] = useState({});

  useEffect(() => {
    
    if (id !== undefined) {
      let curr = Products.filter(item => Number(item.id) === Number(id));
      setP(...curr);
    }
  }, [id, Products])

  useEffect(() => {
    if (key_id !== undefined) {
      let curr = Keybord.filter((item) => Number(item.id) === Number(key_id));
      setP(...curr);
      console.log(curr);
    }
  }, [key_id, Keybord]);


  useEffect(() => {
    if (Our_id !== undefined) {
      let curr = Our.filter((item) => Number(item.id) === Number(Our_id))
      setP(...curr);
      console.log(curr);
    }
  },[Our_id,Our])

  return (
    <div className="flex items-center justify-between m-10 max-md:flex-col">
      <div className="w-1/2">
        <img
          src={p.image ? p.image : ""}
          alt=""
          className="w-1/2 m-auto rounded-md max-md:w-[100%] 2xl:w-[100%]"
        />
      </div>
      <div className="max-2xl:grid grid-cols 2xl:m-[10rem] w-1/2 leading-[2.5rem] max-md:flex-col">
        <p className=" text-[#FF7000] font-bold rounded-md w-[150px] h-[20px] text-center my-4 max-md:flex-col">
          DEAL OF THE DAY
        </p>
        <p className="text-[27px] hover:text-[#FB2576]">{p.name}</p>
        <div className="flex gap-1 text-[25px] items-center text-[#FFBF00] max-md:hidden">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p className="text-[#000]">132,876</p>
        </div>
        <p>1,29900</p>
        <p className="line-through">M.R.P.:₹{p.price} (57% off)</p>
        <p className="font-bold text-[#383838]">
          Get it by Wednesday, 21 December.
        </p>
        <li className="leading-6 max-md:hidden">
          Clear Voice Calls- Be heard absolutely clear across voice calls
          wherever you are with the ENx Tech enabled Airdopes 172, that cancels
          out unwanted background
        </li>
        <p className="flex items-center gap-2">
          <FiChevronDown />
          <span className="text-[#035397]"> Show more</span>
        </p>
        <button className="border-[2px] border-gray-500 w-full rounded-md m-1 bg-[#D6E4E5]">
          see all details
        </button>
        <button className="border-[2px] border-gray-500 w-full rounded-md m-1 bg-[#FFDD7E]">
          Add to Cart
        </button>
        <p className='max-md:hidden'>Sold by Appario Retail Private Ltd and Fulfilled by Amazon</p>
      </div>
    </div>
  );
}
