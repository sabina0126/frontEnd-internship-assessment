import React from "react";
import { Link } from "react-router-dom";

export default function SendOTP() {
  return (
    <>
      <section className="">
        <div className="container flex flex-wrap font-sans max-w-screen-2xl">
          {/* Layout  */}
          <div className="container bg-gradient-to-t from-purple-400 to-stone-700 w-full lg:w-1/2">
            <h3 className="text-center font-bold text-3xl mt-24 text-white p-9">
              Layout Cards
            </h3>
            <div className="absolute top-[75px] left-[-4px] translate-x-[-50%] w-1/2 h-full bg-gradient-to-tl from-yellow-500 via-purple-600 to-stone-950- rounded-full rounded-bl-none"></div>
            <div className="mb-40">
              <div className="flex items-center justify-center flex-wrap">
                <div className="w-52 h-40 border border-gray-400 rounded-lg shadow-lg backdrop-blur-md p-4 m-4 text-white">
                  <img
                    className="w-7 h-5 rounded-md"
                    src="/Flag_of_Singapore.svg"
                    alt="flag"
                  />
                  <h3 className="text-lg font-semibold">Singapore</h3>
                  <p className="text-sm">Head Office</p>
                  <p className="pt-3 text-sm">XYZ Pvt. Ltd.</p>
                  <p className="text-sm">
                    Road to nowhere , 06-404, 500 internal error
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center flex-wrap gap-9">
                <div className="w-52 h-40 border border-gray-400 rounded-lg shadow-lg backdrop-blur-md p-4 text-white">
                  <img
                    className="w-8 h-5 rounded-md"
                    src="/hongkong.png"
                    alt="flag"
                  />
                  <h3 className="text-lg font-semibold">Hongkong</h3>
                  <p className="text-sm">Branches</p>
                  <p className="pt-3 text-sm">XYZ Pte. Ltd.</p>
                  <p className="text-sm">
                    The Infinite Loop Office, 404 Timeout Plaza
                  </p>
                </div>
                <div className="w-52 h-40 border border-gray-400 rounded-lg shadow-lg backdrop-blur-md p-4 text-white">
                  <img
                    className="w-8 h-5 rounded-sm"
                    src="/Flag_of_the_United_States.png"
                    alt="flag"
                  />
                  <h3 className="text-lg font-semibold">USA</h3>
                  <p className="text-sm">Branches</p>
                  <p className="pt-3 text-sm">XYZ Inc.</p>
                  <p className="text-sm">Nulltown, Buglandia, 500 0xDEADBEE</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* OTP part */}
          <div className="container w-full lg:w-1/2">
            <div className="flex flex-wrap items-center justify-center m-8 lg:justify-start lg:m-20">
              <img className="w-12 h-12" src="/logo.JPG" alt="" />
              <h3 className="text-red-600 font-bold text-3xl">Logoipsum</h3>
            </div>
            <div className="ml-5 lg:ml-20">
              <h3 className="font-bold text-3xl py-3">Email Address</h3>
              <input type="text" placeholder="s****a@gmail.com" className="border rounded-md py-3 px-2 lg:w-9/12" />
              <Link to={`/verify`}>
                <button className="bg-red-600 my-4 py-3 px-16 lg:px-48 rounded-xl text-lg font-semibold text-white hover:bg-gray-600">
                  Send OTP
                </button>
              </Link>
              <p className="text-gray-500">
                Wait 1:39 seconds before requesting a new code.
              </p>
            </div>
            <div className="text-center text-sm text-gray-500">
              <p className="mt-20 lg:mt-60">
                By continuing, you're agreeing to Nobody's{" "}
                <span className="text-sky-400">Terms of Service</span>,{" "}
                <span className="text-sky-400">Privacy Policy</span>
                <br /> and <span className="text-sky-400">Cookie Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
