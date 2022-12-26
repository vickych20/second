import React from 'react'

export default function LastSecond() {
  return (
    <div className="">
      <div>
        <p className="font-bold text-[25px] text-[#413F42] ">
          Now it easier to open your open{" "}
        </p>
        <p className="text-[12px]">
          Lorem ipsum sicing elit. Aut aliquam cumque poris!
        </p>
      </div>
      <div>
        <button className="py-2 px-3 bg-purple-700 text-white rounded-md my-2 text-[9px]">
          <span>Open Shop</span>
          <ion-icon className="mt-2" name="caret-forward-outline"></ion-icon>
        </button>
      </div>
      <hr className="py-2 m-6"></hr>

      <div>
        <div>
          <p className="font-bold text-[25px] text-[#] my-4">
            Brand && Categories
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="flex items-start justify-center justify-between my-4 max-md:grid max-md:grid-cols-2 ">
        <div className="flex flex-col gap-y-6 text-[#413F42]">
          <p className="font-bold text-[22px] text-[#000] hover:text-[#FB2576]">
            Product
          </p>
          <p>Logo Maker</p>
          <p>Brand Kit</p>
          <p>Social Media Kit</p>
          <p>Business Cards</p>
          <p>How it works</p>
          <p>Review</p>
          <p>Business Name</p>
        </div>
        <div className="flex flex-col gap-y-6 text-[#413F42]">
          <p className="font-bold text-[22px] text-[#000]  hover:text-[#FB2576]">
            Inspiration
          </p>
          <p>Blog</p>
          <p>Logo Ideas</p>
          <p>Logo Colors</p>
          <p>Logo Styles</p>
          <p>Logo Wiki</p>
        </div>
        <div className="flex flex-col gap-y-6 text-[#413F42]">
          <p className="font-bold text-[22px] text-[#000]  hover:text-[#FB2576]">
            Company
          </p>
          <p>About</p>
          <p>Press</p>
          <p>Careers</p>
          <p>Affiliates</p>
        </div>
        <div className="flex flex-col gap-y-6 text-[#413F42]">
          <p className="font-bold text-[22px] text-[#000]  hover:text-[#FB2576]">
            Support
          </p>
          <p>Help Center</p>
          <p>Contact</p>
          <p>support@looka.com</p>
        </div>
        <div className="flex justify-between flex-col items-center gap-6 text-[30px] text-[#2363ed] hover:text-[#FB2576] max-md:flex-row p-4">
          <ion-icon name="logo-facebook" className=""></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon className="text-[#00EAD3]" name="logo-whatsapp"></ion-icon>
        </div>
      </div>
    </div>
  );
}
