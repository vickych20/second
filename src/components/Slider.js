import React from 'react'
import Products from "../Product";
import { useNavigate } from 'react-router-dom';


const Card = ({image, name, price, tag, sold, onClick}) => {
  return (
    <div className="w-[350px] h-[280px] shadow-lg rounded-lg" onClick={onClick}>
      <div
        className="bg-[#d4d6db] overflow-hidden flex justify-center items-center h-[130px] rounded-lg"
        style={{ borderRadius: "5px 5px 0 0" }}
      >
        <img
          src={image}
          alt=""
          className=" h-[100%] flex items-center	"
        />
      </div>
      <div className="m-2 text-[13px] leading-6">
        <p className="text-[10px]">{tag}</p>
        <p className="font-bold text-[#3C4048] text-[10px]">
          {name}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-[8px]">
            <p className="line-through">${price+10}</p> <p>$ {price}</p>
          </div>
          <div>
            <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
              -50%
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-evenly items-center text-[12px] gap-[10px]">
          <div className='line w-[60%] rounded-md h-[6px] '></div>
          <div>
            <p >{sold} sold</p>
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
      <div className="flex justify-between items-center text-[#413F42] max-md:hidden">
        <div>
          <p className="font-bold text-[20px] text-[#413F42]">
            November super Flash sale
          </p>
        </div>
        <div className="flex gap-[10px]">
          End in: <p className="bg-[#5b14ce] text-white  p-1 rounded-md">04</p>:
          <p className="bg-[#5b14ce] text-white p-1 rounded-md">24</p>:
          <p className="bg-[#5b14ce] text-white p-1 rounded-md">39</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-[1rem] py-5 text-[13px] text-[#3C4048] leading-loose	rounded-lg  max-md:grid max-md:grid-cols-2">
        {/* carḍ  */}
        {/* <Card />
        <Card />
        <Card />  
        <Card />
        <Card /> */}
        {Products.map((item) => (
          <Card
            onClick={() => navigate(`/product/${item.id}`)}
            image={item.image}
            name={item.name}
            price={item.price}
            sold={item.sold}
            tag={item.tag}
          />
        ))}
        {/* 
        <div className="w-[350px] h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px]">
            <img
              src="https://cdn.dribbble.com/userupload/2794849/file/original-a421915a68c0d2fbb944112b5ac776e9.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px]">property</p>
            <p className="font-bold text-[#3C4048]">
              Durable tupperware bottles (Black Version)
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                <p className="line-through">$20.00</p> <p>$10.00</p>
              </div>
              <div>
                <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
                  -50%
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[12px] gap-[10px]">
              <div>
             
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px]">
            <img
              src="https://cdn.dribbble.com/users/2461190/screenshots/11062727/media/5f2d6875d51a44f42d6761f1e7afdd31.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px]">property</p>
            <p className="font-bold text-[#3C4048]">
              Durable tupperware bottles (Black Version)
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                <p className="line-through">$20.00</p> <p>$10.00</p>
              </div>
              <div>
                <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
                  -50%
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[12px] gap-[10px]">
              <div>
              
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg rounded-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px]">
            <img
              src="https://cdn.dribbble.com/userupload/3989238/file/original-7c060a803ac4038fcc7e79c1fc686977.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px]">property</p>
            <p className="font-bold text-[#3C4048]">
              Durable tupperware bottles (Black Version)
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                <p className="line-through">$20.00</p> <p>$10.00</p>
              </div>
              <div>
                <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
                  -50%
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[12px] gap-[10px]">
              <div>
                
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[350px] h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px]">
            <img
              src="https://cdn.dribbble.com/users/2905985/screenshots/15476694/media/6c993a9634527961d159289abe9aaae8.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px]">property</p>
            <p className="font-bold text-[#3C4048]">
              Durable tupperware bottles (Black Version)
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                <p className="line-through">$20.00</p> <p>$10.00</p>
              </div>
              <div>
                <p className="bg-[#e2d7d7] rounded-lg text-[#ea4444] px-2 text-[12px]">
                  -50%
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-[12px] gap-[10px]">
              <div>
               
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
