import React from "react";

const Card = () => {
  return (
    <div className="flex font-base hover:shadow-slate-400 cursor-pointer w-[237px] rounded-[20px] p-7 border-2 shadow-slate-200 shadow-lg flex-col">
      <div
        className="w-[30px] cursor-pointer bg-center bg-no-repeat bg-cover rounded-full h-[30px] bg-black
              bg-[url(https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw)]
              "
      ></div>
      <p className="text-[11px]">Total Revenues</p>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[21px]">$2,129,430</h1>
        <p className="text-[10px] p-1 bg-green-100 rounded-full text-[#3CC952]">+2.5%</p>
      </div>
    </div>
  );
};

export default Card;
