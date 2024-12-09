import React from "react";
import { Link } from "react-router-dom";

function Verify() {
  return (
    <>
      <section className="">
        <div className="container flex flex-wrap font-sans max-w-screen-2xl">
          {/* Layout */}
          <div className="container bg-gradient-to-t from-purple-400 to-stone-700 w-full lg:w-1/2">
            <Link to={`/`}>
              <div className="flex items-center gap-2 m-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
                <h4 className="text-white">Back</h4>
              </div>
            </Link>
            <h3 className="text-center font-bold text-3xl mt-24 text-white p-9">
              Layout Cards
            </h3>
            <div className="absolute top-[140px] left-[-4px] translate-x-[-50%] w-1/2 h-full bg-gradient-to-tl from-yellow-500 via-purple-600 to-stone-950- rounded-full rounded-bl-none"></div>
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

          {/* Verify part */}
          <div className="container w-full lg:w-1/2">
            <div className="flex flex-wrap items-center justify-center m-8 lg:justify-start lg:m-20">
              <img className="w-16 h-16" src="/logo.JPG" alt="" />
              <h3 className="text-red-600 font-bold text-3xl">Logoipsum</h3>
            </div>
            <div className="ml-5 lg:ml-20">
              <h3 className="font-bold text-3xl">Verify Your Email</h3>
              <p className="py-3 text-gray-500">
                Please enter the 6 digits code we just sent to s****a@xyz.com
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-8">
                <div className="flex gap-3 lg:gap-5">
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex gap-3 lg:gap-5">
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="w-10 h-10 lg:w-12 lg:h-12 border rounded text-center"
                    maxLength={1}
                  />
                </div>
              </div>
              <Link to={`/form`}>
                <button className="bg-red-600 my-4 py-3 px-16 lg:px-48 rounded-xl text-lg font-semibold text-white hover:bg-gray-600">
                  Verify
                </button>
              </Link>
              <p className="text-gray-500">
                Didn't receive a code?
                <span className="text-sky-400">Resend Code.</span>
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

export default Verify;
