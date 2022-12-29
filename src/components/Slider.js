import React from 'react'
import Products from "../Product";
import { useNavigate } from 'react-router-dom';


const Card = ({image, name, price, tag, sold, onClick}) => {
  return (
    <div
      className="max-w-[170px] max-h-[280px] shadow-lg rounded-lg"
      onClick={onClick}
    >
      <div
        className="bg-[#d4d6db] overflow-hidden flex justify-center items-center h-[130px] rounded-lg"
        style={{ borderRadius: "5px 5px 0 0" }}
      >
        <img
          src={image}
          alt=""
          className=" h-[100%] flex items-center"
        />
      </div>
      <div className="m-2 text-[13px] leading-6">
        <p className="text-[10px]">{tag}</p>
        <p className="font-bold text-[#3C4048] text-[10px]">{name}</p>
        <div className="flex items-center justify-evenly">
          <div className="flex gap-[8px]">
            <p className="justify-between line-through max-md:flex">${price + 10}</p> <p>$ {price}</p>
          </div>
          <div>
            <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
              -50%
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-evenly items-center text-[12px] gap-[10px]">
          <div className="line w-[60%] rounded-md h-[6px] "></div>
          <div>
            <p>{sold} sold</p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Slider() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="flex justify-between
        items-center text-[#413F42] max-md:hidden"
      >
        <div className="font-bold text-[20px] text-[#413F42]">
          <p className="xl:text-[25px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[14px]">
            November super Flash sale
          </p>
        </div>
        <div className="flex gap-[10px] xl:hidden">
          End in: <p className="bg-[#5b14ce] text-white  p-1 rounded-md">04</p>:
          <p className="bg-[#5b14ce] text-white p-1 rounded-md">24</p>:
          <p className="bg-[#5b14ce] text-white p-1 rounded-md">39</p>
        </div>
      </div>
      <div className="grid flex-wrap lg:grid-cols-5 md:grid-cols-3 justify-around  min-w-full my-4 sm:grid-cols-3 gap-y-4 max-[640px]:grid-cols-2 max-[426px]:grid-cols-1 max-[426px]:content-center">
        {Products.map((item) => (
          <div className="display-contents justify-evenly items-center text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 self-center">
            <Card
              onClick={() => navigate(`/product/${item.id}`)}
              image={item.image}
              name={item.name}
              price={item.price}
              sold={item.sold}
              tag={item.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
