import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";

const Navigation = () => {
  return (
    <div className="text-white flex flex-col justify-between w-[280px] h-screen rounded-[20px] p-[50px] bg-[#4285F4]">
      <div className="">
        <h1 className="text-4xl font-bold">Board.</h1>
        <div className="btns my-[60px] h-56 flex text-lg justify-between flex-col">
          <button className="flex font-bold items-center">
            <AiOutlineDashboard className="w-[18px] h-[18px] mr-[20px]" />
            Dashboard
          </button>
          <button className="flex font-normal items-center">
            <IoPricetagsOutline className="w-[18px] h-[18px] mr-[20px]" />
            Transactions
          </button>
          <button className="flex items-center">
            <TbCalendarTime className="w-[18px] h-[18px] mr-[20px]" />
            Schedules
          </button>
          <button className="flex items-center">
            <FaRegCircleUser className="w-[18px] h-[18px] mr-[20px]" />
            Users
          </button>
          <button className="flex items-center">
            <LuSettings className="w-[18px] h-[18px] mr-[20px]" />
            Settings
          </button>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col">
        <button className="my-[20px]">Help</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Navigation;
