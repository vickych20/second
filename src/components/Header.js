import React from "react";
import img1 from '../images/img1.jpg'
import Bills from "./Bills";

export default function Header() {
  return (
    <div className="">
      <div className="w-full border-b-[1px] border-gray-300">
        <div className="flex justify-between items-center text-[10px] p-4">
          <div className="shrink-0">
            <img
              src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
              alt="BrandCrowd"
              width="73px"
              height="28px"
              className="tw-w-32 md:tw-w-44"
              data-v-af735d2c=""
            ></img>
          </div>
          <div className="max-md:hidden">
            <p className="flex items-center">
              <div className="h-[20px] w-[20px] shrink-0 flex items-center justify-center">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <select className="outline-none">
                <option value="">Indonesia Yogyakarta</option>
                <option value="">India, Delhi</option>
                <option value="">USA, NY</option>
              </select>
            </p>
          </div>
          <div className="max-md:hidden border flex justify-between border-black-600 py-2 px-8 rounded-lg w-[400px]">
            <input
              type="search"
              className="border-none outline-none"
              placeholder="Search in Slabshop"
            />
            <div>
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
          <div className="border max-md:hidden border-none bg-[#d9d9d9] text-[#fff] px-3 py-2 rounded-lg flex justify-center items-center]">
            <div>
              <select className="text-black bg-transparent border-none outline-none">
                <option value="Category" className="text-white">
                  Category
                </option>
                <option value="Phone">Phone</option>
                <option value="">Shoes</option>
                <option value="">Accessories</option>
              </select>
            </div>
          </div>
          <div className="flex max-md:flex justify-end items-center gap-[16px]">
            <div>
              <ion-icon name="flower-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="file-tray-stacked-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="skull-outline"></ion-icon>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[16px]">
            <div>
              <img
                className="rounded-full "
                src="https://www.shutterstock.com/image-photo/portrait-small-boy-outdoors-260nw-1038104782.jpg"
                alt=""
                width={"30px"}
              />
            </div>
            <div>
              <p>pikachu</p>
              <p className="text-[#88cc80]">Online</p>
            </div>
          </div>
        </div>
        <div>
          <p className="border-1"></p>
        </div>
        {/* <hr></hr> */}
        <div className="flex gap-[9px] py-3 text-[10px] max-md:hidden mx-4">
          <div>
            <p>Popular Search:</p>
          </div>
          <div>
            <p>Fashion</p>
          </div>
          <div>
            <p>Shoes Man</p>
          </div>
          <div>
            <p>Gadget</p>
          </div>
          <div>
            <p>Computer</p>
          </div>
          <div>
            <p>Laptop</p>
          </div>
          <div>
            <p>Flash Sale</p>
          </div>
          <div>
            <p>Accessiores</p>
          </div>
        </div>
      </div>

      <div className="grid w-full min-w-full px-4 my-4 gap-x-4" style={{
        gridTemplateColumns: "2fr 5fr"
      }}>
        <img
          src="https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?size=338&ext=jpg&ga=GA1.2.79438395.1669983810"
          alt=""
          className="w-full h-full"
        />

        <img
          src="https://img.freepik.com/premium-vector/vector-illustration-durga-puja-sale-banner_181203-10184.jpg?size=626&ext=jpg&ga=GA1.2.79438395.1669983810"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
