import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({setModal}) => {
  const [currentForm, setCurrentForm] = useState("basic");

  const handleForm = (tab) => {
    setCurrentForm(tab);
  };

  const displayModal = ()=>{
    setModal(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-screen absolute flex justify-center items-center top-0 left-0 h-screen bg-[#00000080]">
      <div className="main w-[544px] bg-[#FFFFFF] rounded-lg ">
        <div className="head px-[24px] items-center py-[16px] border-b border-slate-200 flex justify-between text-[20px]">
          <h1 className="text-[20px] ">Add New Profile</h1>
          <button onClick={()=>setModal(false)} className="text-[#999CA0] hover:opacity-70"><AiOutlineClose className="w-[24px] h-[24px]"/></button>
        </div>

        <div className="p-[24px]">
          <div className="flex justify-between">
            <div className="flex w-[213px] flex-col items-center">
              <button
                onClick={() => setCurrentForm("basic")}
                className="font-bold mb-[12px]"
              >
                Basic
              </button>
              <div className={`h-[4px] rounded-full w-full ${currentForm=='basic'?'bg-[#3F84F8]':'bg-[#D9D9D9]'}`}></div>
            </div>
            <div className="flex w-[213px] flex-col items-center">
              <button
                onClick={() => setCurrentForm("social")}
                className="font-bold mb-[12px]"
              >
                Social
              </button>
              <div className={`h-[4px] rounded-full w-full ${currentForm=='social'?'bg-[#3F84F8]':'bg-[#D9D9D9]'}`}></div>
            </div>
          </div>
          {currentForm=='basic'?
          <div className="basic-form">
            <div className="my-[24px] flex flex-col">
              <label htmlFor="">Enter Name*</label>
              <input
                placeholder="Eg. John Doe"
                className="border mt-[8px] rounded-md outline-none p-2"
                type="text"
              />
            </div>
            <div className="my-[24px] flex flex-col">
              <label htmlFor="">Enter Email*</label>
              <input
                placeholder="Eg. John Doe"
                className="border mt-[8px] rounded-md outline-none p-2"
                type="text"
              />
            </div>
            <div className="my-[24px] flex flex-col">
              <label htmlFor="">Enter Phone*</label>
              <input
                placeholder="Eg. John Doe"
                className="border mt-[8px] rounded-md outline-none p-2"
                type="text"
              />
            </div>
            <div className="flex justify-end">
              <button onClick={()=>setCurrentForm('social')} className="rounded-[8px] font-semibold bg-[#3E84F8] text-white px-[16px] py-[8px]">
                Next
              </button>
            </div>
          </div>
          :
          <div className="social-form">
            <div className="my-[24px] flex flex-col">
              <label htmlFor="">Instagram Link </label>
              <input
                placeholder="Eg. ..instagram.com/username"
                className="border mt-[8px] rounded-md outline-none p-2"
                type="text"
              />
            </div>
            <div className="my-[24px] flex flex-col">
              <label htmlFor="">Youtube Link</label>
              <input
                placeholder="Eg. ..youtebe/username"
                className="border mt-[8px] rounded-md outline-none p-2"
                type="text"
              />
            </div>
            <div className="flex font-semibold justify-end">
              <button onClick={()=>setCurrentForm('basic')} className="rounded-[8px] mx-[8px] bg-white border-2 text-black px-[16px] py-[8px]">
                Back
              </button>
              <button className="rounded-[8px] bg-[#3E84F8] text-white px-[16px] py-[8px]">
                Done
              </button>
            </div>
          </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Modal;
