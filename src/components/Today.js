import React from "react";
import { MdLocationOn } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import Keybord from "../Keybord";
import { useNavigate } from "react-router-dom";

const Card = ({ image, name, price, tag, sold, location, onClick }) => {
  return (
    <div
      className="flex justify-between items-center gap-[1rem] py-5  text-[13px] text-[#3C4048] leading-loose	rounded-lg"
      onClick={onClick}
    >
      <div className="w-[180px] h-[280px] shadow-lg rounded-b-lg">
        <div className="bg-[#d4d6db] flex justify-center items-center h-[130px] rounded-t-lg">
          <img src={image} alt="" className=" h-[100%] flex items-center	" />
        </div>
        <div className="m-4">
          <p className="text-[10px]">{tag}</p>
          <p className="font-bold text-[#3C4048] text-[10px]">{name}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold flex"></p> <p>${price}</p>
            </div>
            <div className="text-[22px] gap-[4px] flex">
              <div className="flex item-center justify-center">
                <RiStarSLine className="text-[#b78914]" />
                <p className="text-[13px]">4.7</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[12px] gap-[10px]">
            <div className="flex justify-around items-center text-[#]">
              <MdLocationOn className="text-[#d01df4]" />
              <p>{location}</p>
            </div>
            <div>
              <p>{sold}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Today() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p className="font-bold text-[#413F42] text-[20px]">
          Today is only for you
        </p>
      </div>

      {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      <div className="flex flex-wrap justify-around min-w-full">
        {Keybord.map((item) => (
          <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
            <Card
              onClick={() => navigate(`/keybord/${item.id}`)}
              image={item.image}
              name={item.name}
              price={item.price}
              sold={item.sold}
              tag={item.tag}
              location={item.location}
            />
          </div>
        ))}
      </div>

      {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      <div className="flex flex-wrap justify-around min-w-full">
        {Keybord.map((item) => (
           <div className="flex justify-between items-center  text-[13px] text-[#3C4048] leading-loose	rounded-lg  sm:leading-4 w-[200px] m-3 shrink-0">
          <Card
            onClick={() => navigate(`/keybord/${item.id}`)}
            image={item.image}
            name={item.name}
            price={item.price}
            sold={item.sold}
            tag={item.tag}
            location={item.location}
            />
            </div>
        ))}
      </div>

      {/*
        <div className="w-[350px] h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex rounded-t-lg  justify-center items-center h-[130px]">
            <img
              src="https://cdn.dribbble.com/userupload/2794849/file/original-a421915a68c0d2fbb944112b5ac776e9.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/users/2461190/screenshots/11062727/media/5f2d6875d51a44f42d6761f1e7afdd31.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] rounded-b-lg  h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px]rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/userupload/3989238/file/original-7c060a803ac4038fcc7e79c1fc686977.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>

        <div className="rounded-b-lg w-[350px] h-[300px] shadow-lg">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/users/2905985/screenshots/15476694/media/6c993a9634527961d159289abe9aaae8.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-[1rem] py-5  text-[13px] text-[#3C4048] leading-loose	rounded-lg ">
        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/users/6493128/screenshots/16518878/media/68512eed1121680adfc665505de7289c.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/userupload/2794849/file/original-a421915a68c0d2fbb944112b5ac776e9.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/users/2461190/screenshots/11062727/media/5f2d6875d51a44f42d6761f1e7afdd31.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/userupload/3989238/file/original-7c060a803ac4038fcc7e79c1fc686977.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>

        <div className="w-[350px] h-[300px] shadow-lg rounded-b-lg ">
          <div className="bg-[#B2B2B2] flex justify-center items-center h-[130px] rounded-t-lg ">
            <img
              src="https://cdn.dribbble.com/users/2905985/screenshots/15476694/media/6c993a9634527961d159289abe9aaae8.png?compress=1&resize=320x240&vertical=top"
              alt=""
              className=" h-[30%] flex items-center	"
            />
          </div>
          <div className="m-2">
            <p className="text-[10px] bg-[#ece4f0] text-[#9567ae] tetx-center mb-4 items-center flex justify-center rounded-lg w-[80px]">
              property
            </p>
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
                <p className="font-bold">$ 112.70</p>
              </div>
              <div>
                <p>130 sold</p>
              </div>
            </div>
            <div className="flex justify-around items-center text-[#E0144C]">
              <ion-icon className="" name="location-outline"></ion-icon>
              <p>kota bandung</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
