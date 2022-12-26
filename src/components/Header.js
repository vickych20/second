import React from "react";
import img1 from '../images/img1.jpg'
import Bills from "./Bills";

export default function Header() {
  return (
    <div className="xl:p-[2%]">
      <div className="flex justify-between items-center text-[10px]">
        <div className="shrink-0">
          <img
            src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
            alt="BrandCrowd"
            width="73px"
            height="28px"
            class="tw-w-32 md:tw-w-44"
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
      <div className="flex gap-[9px] py-3 text-[10px] max-md:hidden">
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

      <div className="flex flex-wrap justify-center min-w-full gap-4 p-4 ">
        <img
          src="https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?size=338&ext=jpg&ga=GA1.2.79438395.1669983810"
          alt=""
        />

        <img
          src="https://img.freepik.com/premium-vector/vector-illustration-durga-puja-sale-banner_181203-10184.jpg?size=626&ext=jpg&ga=GA1.2.79438395.1669983810"
          alt=""
        />
      </div>
      <div className="flex ml-[56rem] gap-[7px] text-[12px] xl:hidden">
        <div className="mt-[3px]">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <p>Back</p>
        <p className="text-[#8600a1]">Next</p>
        <div className="mt-[3px] text-[#8600a1]">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
      <div className="flex w-full py-3 max-md:flex-col">
        <div className="w-full">
          {/* <img
            src={img1}
            alt=""
            className="w-[232px] rounded-lg"
          /> */}

          <Bills />

          {/* <div className="flex flex-wrap justify-around min-w-full max-xl:flex">
        <div>
          <img src={img1} alt="" className="w-[250px]" />
        </div>
        <div>
          <div className="w-[750px] border-2 rounded-lg h-[230px] max-md:w-[300px] max-sm:w-[300px]">
            <div className="flex justify-between p-2">
              <p className="font-bold text-[#2C272E]">Bills and Utility</p>
              <button>
                <span>See All</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>

        <div className='grid w-full px-5 py-4 gap-x-5' 
    style={{gridTemplateColumns: "2fr 6fr"}}>
        <img src={img1} alt="" className='w-[100%] rounded-lg '  />
        <div className='w-full border-[1px] border-gray-300 py-3 rounded-md'>
            <div className='flex justify-between px-5 py-1'>
                <h2 className='text-xl font-bold'>Bills and Utility</h2>
                <button className='flex items-center border-[1px] border-gray-600 pl-2 py-1 rounded-md'>
                    <span>See All</span>
                    <FiHelpCircle className='mx-2' />
                </button>
            </div>
            <div className='flex gap-x-4 px-4 border-b-[1px] border-gray-300 py-2'>
                <p className='text-gray-400'>Balance</p>
                <p className='text-gray-400'>Top Up</p>
                <p className='text-gray-400'>Internet</p>
                <p className='text-gray-400'>Electiricity Tokens</p>
                <p className='text-gray-400'>Tockets</p>
                <p className='text-gray-400'>Data Packages</p>
                <p className='text-gray-400'>Pulse</p>
                <p className='text-gray-400'>Voucher</p>
            </div>
            <div className='grid grid-cols-2 px-1 py-3 gap-x-3'>
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
                <button className='px-4 py-2 text-white bg-purple-700 rounded-md'>Purchace</button>
                <p>Help</p>
            </div>
            <div className="p-2 mt-4 flex gap-[8px] items-center text-[12px] py-3 relative bottom-[20px] border-b-[1px] max-sm:hidden max-md:hidden max-md:p-4">
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
            </div>

            <div className="p-2 my-2 grid grid-cols-2 gap-x-[10px] ">
              <p className="text-[9px]">Code transaction</p>
              <p className="text-[9px]">payment Amount</p>
              <input
                type="text"
                className="border-[1px] py-1 px-2 border-gray-500 rounded-md outline-none"
                placeholder="Ex. JHGJ57HG547"
              />

              <input
                type="text"
                className="border-[1px] py-1 px-2 border-gray-500 rounded-md outline-none"
                placeholder="$ 1000"
              />
            </div>

            <div className="flex items-center justify-between px-2 max-sm:hidden">
              <button className="px-2 py-1 text-white bg-purple-700 rounded-md">
                <span>Purchase</span>
                <ion-icon
                  className="mt-2"
                  name="caret-forward-outline"
                ></ion-icon>
              </button>
              <p className="flex items-center px-2 py-1 rounded-md gap-x-2">
                <FiHelpCircle />
                Help!!
              </p>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}
