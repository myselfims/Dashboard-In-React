import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillApple,
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

const Auth = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit: (data) => {
        navigate("/dashboard");
      },
    });

  return (
    <div className="w-screen flex h-screen">
      <div className="max-sm:hidden">
        <div className="absolute max-sm:hidden z-0">
          <svg
            className="h-screen"
            xmlns="http://www.w3.org/2000/svg"
            width="720"
            fill="none"
          >
            <path
              d="M0 0L719.988 0L569.314 1024H0V0Z"
              fill="url(#paint0_linear_0_147)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_147"
                x1="359.994"
                y1="0"
                x2="359.994"
                y2="1024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4285F4" />
                <stop offset="1" stop-color="#286DE0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center h-screen">
          <h1 className="absolute left-[72.99px] top-[59.81px] font-bold text-xl text-white">
            LOGO
          </h1>
          <h1 className="text-7xl max-sm:hidden font-bold text-white absolute left-[200px]">
            Board.
          </h1>
          <div className="icons w-[300px] absolute justify-between flex left-[144.5px] bottom-[67px]">
            <AiOutlineGithub className="w-[42px] text-white hover:opacity-70 transition-all cursor-pointer h-[42px]" />
            <AiFillTwitterCircle className="w-[42px] text-white hover:opacity-70 transition-all cursor-pointer h-[42px]" />
            <AiFillLinkedin className="w-[42px] text-white hover:opacity-70 transition-all cursor-pointer h-[42px]" />
            <BiLogoDiscord className="w-[42px] text-white hover:opacity-70 transition-all cursor-pointer h-[42px]" />
          </div>
        </div>
      </div>
      <div className="flex bg-[#F8FAFF] items-center justify-center w-full  h-full ">
        <div className="absolute max-sm:right-0 right-[204px]">
          <div className="head">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p className="text-base my-1">Sign in to your account</p>
            <div className="flex my-[29px] justify-between">
              <button className="w-[197px] h-[32px] rounded-full hover:opacity-80 flex items-center px-3 text-slate-500 bg-[#FFFFFF]">
                <FcGoogle className="mr-[10px] w-[15px] h-[15px]" />
                Sign in with Google
              </button>

              <button className="w-[197px] h-[32px] rounded-full hover:opacity-80 flex items-center px-3 text-slate-500 bg-[#FFFFFF]">
                <AiFillApple className="mr-[10px] w-[15px] h-[15px]" />
                Sign in with Google
              </button>
            </div>
          </div>
          <div className="rounded flex flex-col items-center p-[32px] bg-[#FFFFFF] ">
            <form onSubmit={handleSubmit}>
              <div>
                <p>Email</p>
                <input
                  value={values.email}
                  name="email"
                  type="email"
                  className={`rounded-xl bg-[#F5F5F5] w-[356px] mt-2 h-[43.91px] p-3 outline-none ${
                    errors.email ? "border-red-300 border-2" : null
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-400 mb-[21px]">{errors.email}</p>
              </div>
              <div>
                <p>Password</p>
                <input
                  value={values.password}
                  name="password"
                  type="password"
                  className={`rounded-xl bg-[#F5F5F5] w-[356px] mt-2  h-[43.91px] p-3 outline-none ${
                    errors.password ? "border-red-300 border-2" : null
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-400 mb-[21px]">{errors.password}</p>
              </div>
              <div className="flex w-full flex-col">
                <a className="text-[#346BD4] mb-[21px]" href="">
                  Forgot password?
                </a>
                  <button type="submit" className="w-full font-bold rounded-xl bg-[#4285F4] text-white h-[43.91px]">
                    Sign In
                  </button>
           
              </div>
            </form>
            <p className="mt-[54px] text-base">
              Don't have an account?{" "}
              <a className="text-[#346BD4]" href="">
                {" "}
                Register here{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
