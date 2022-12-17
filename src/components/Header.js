import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center text-[10px]">
        <div>
          <img
            src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
            alt="BrandCrowd"
            width="73px"
            height="28px"
            class="tw-w-32 md:tw-w-44"
            data-v-af735d2c=""
          ></img>
        </div>
        <div>
          <p>
            <ion-icon name="location-outline"></ion-icon>
            <select>
              <option value="">Indonesia Yogyakarta</option>
              <option value="">India, Delhi</option>
              <option value="">USA, NY</option>
            </select>
          </p>
        </div>
        <div className="border flex justify-between border-black-600 py-2 px-8 rounded-lg w-[400px]">
          <input
            type="search"
            className="border-none outline-none"
            placeholder="Search in Slabshop"
          />
          <div>
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className="border border-none bg-[#d9d9d9] text-[#fff] px-3 py-2 bg-[#FB2576] text-white rounded-lg flex justify-center items-center]">
          <div>
            <select className="bg-transparent text-black outline-none border-none">
              <option value="Category" className="text-white">
                Category
              </option>
              <option value="Phone">Phone</option>
              <option value="">Shoes</option>
              <option value="">Accessories</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center gap-[16px]">
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
              className="rounded-full	"
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
      <div className="flex gap-[9px] py-3 text-[10px]">
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
      <hr></hr>

      <div className="flex justify-between items-center py-3 gap-4">
        <div>
          <img
            src="https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?size=338&ext=jpg&ga=GA1.2.79438395.1669983810"
            alt=""
            className="w-[272px] rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/vector-illustration-durga-puja-sale-banner_181203-10184.jpg?size=626&ext=jpg&ga=GA1.2.79438395.1669983810"
            alt=""
            className="mr-[5rem] w-[800px] rounded-lg"
          />
        </div>
      </div>
      <div className="flex ml-[56rem] gap-[7px] text-[12px]">
        <div className="mt-[3px]">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <p>Back</p>
        <p className="text-[#8600a1]">Next</p>
        <div className="mt-[3px] text-[#8600a1]">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
      <div className="flex justify-between items-center py-3 gap-5">
        <div>
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/69/10/flash-sale-discount-poster-online-banner-design-vector-23396910.jpg"
            alt=""
            className="w-[232px] rounded-lg"
          />
        </div>
        <div className="w-[750px] border-2 rounded-lg h-[230px]">
          <div className="flex justify-between p-2">
            <div>
              <p className="font-bold text-[#2C272E]">Bills and Utility</p>
            </div>
            <div className="border-2 border-[#000]-600 text-[9px] text-center px-4 py-2 rounded-lg gap-2 flex">
              <div>
                <input type="button" value="See All" />
              </div>
              <div>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-[88%] text-[12px] py-3 ml-[15px] relative bottom-[20px]">
            <div>
              <p className="text-[#8600a1]">Blance</p>
            </div>
            <div>
              <p>Top Up</p>
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
            <div>{/* <p>Accessiores</p> */}</div>
          </div>
          <hr></hr>
          <div className="grid grid-cols-2 gap-x-3 px-4 py-2 m-2">
            <div className="">
              <p className="text-[9px] py-1">code transaction</p>
              <div className="border-2 border-[#000]-600 px-8 p-2">
                <input type="text" className="border-none outline-none" />
              </div>
            </div>
            <div>
              <p className="text-[9px] py-1">payment Amount</p>
              <div className="border-2 border-black-600 px-8 p-2">
                <input type="text" className="border-none outline-none" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="border border-black-600 bg-[#500579] text-[#fff] rounded-lg">
              <input type="button" value="Purchase" className="text-[8px]" />

              <ion-icon
                className="mt-2"
                name="caret-forward-outline"
              ></ion-icon>
            </div>
            <div>
              <p>Help!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
