import React from 'react'
const Card = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-[rem] ">
        <div className="w-[240px] h-[120px] shadow-lg border-2 border-[#293462]-600 px-4">
          <div>
            <div className="gap-2 m-1">
              <p className="text-[10px] border-l-2  border-[#1A120B]-900">
                The goods are ready stock and ready to be shiped
              </p>
            </div>
          </div>
          <div className="flex gap-[0.5rem] m-1 px-[10px] ">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266__340.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439__340.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Product1() {
  return (
    <div className="flex justify-between items-center gap-[1rem] py-5 text-[13px] text-[#777171] leading-loose	rounded-lg max-md:flex-col">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
