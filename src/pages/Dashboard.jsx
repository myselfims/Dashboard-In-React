import React from "react";
import Navigation from "../components/Navigation";
import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Card from "../components/Card";
import Chart from "../components/BarChart";
import PieChart from "../components/PieChart";
import AddProfile from "../components/AddProfile";

const Dashboard = () => {
  return (
    <div className="flex p-[43px]">
      <div className="nav">
        <Navigation />
      </div>
      <div className="body ml-[67px] py-4 w-full h-full text-black">
        <div className="head justify-between flex">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <div className="flex items-center">
            <div className="flex items-center rounded-full">
              <input
                placeholder="Search..."
                className=" p-2 outline-none"
                type="text"
              />
              <BsSearch className="w-[12px] h-[12px] " />
            </div>
            <div className="flex items-center">
              <BiBell className="mr-[27px] ml-[46px] w-[18px] cursor-pointer h-[20px]" />
              <div
                className="w-[30px] cursor-pointer bg-center bg-no-repeat bg-cover rounded-full h-[30px] bg-black
              bg-[url(https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw)]
              "
              ></div>
            </div>
          </div>
        </div>
        <div className="cards flex justify-between py-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="charts shadow-slate-200 shadow-lg h-[359px] rounded-[20px] border-2 p-7">
          <div className="">
            <h1 className="font-bold">Activities</h1>
          </div>
          <div >
          </div>
            <Chart />
        </div>
        <div className="my-[38px] flex justify-between">
          <PieChart/>
          <AddProfile/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
