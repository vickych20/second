import React from 'react'

export default function LastSecond() {
  return (
    <div>
      <div>
        <p className="font-bold text-[25px]">
          Now it easier to open your open{" "}
        </p>
        <p>Lorem ipsum sicing elit. Aut aliquam cumque poris!</p>
      </div>
      <div>
        <button className="bg-[#FB2576] py-2 text-white rounded-md">
          Open Shop <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <hr className="py-2 m-6"></hr>

      <div>
        <div>
          <p className="font-bold text-[25px]">Brand && Categories</p>
        </div>
      </div>
      <hr></hr>
      <div className='flex '>
        <div>
          <p>Product</p>
        </div>
        <div>
          <p>Inspiration</p>
        </div>
        <div>
          <p>Company</p>
        </div>
        <div>
          <p>Support</p>
        </div>
        <div>
          <div>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
