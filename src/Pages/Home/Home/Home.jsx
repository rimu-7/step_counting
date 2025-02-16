import React, { useState } from "react";

const data = ["Learn Ract ✅", "Get Job 💰", "Invest Your Encome🤑"];

function Home() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div className="h-screen bg-[#212121]  text-center p-10 items-center flex justify-center  text-xl">
      <div className=" w-[600px] bg-[#f7f7f7] rounded-lg px-5 py-5 my-[100px] mx-auto ">
        <div className=" flex text-white font-bold justify-between">
          <div
            className={`h-10 aspect-square rounded-full flex items-center justify-center text-[18px] ${
              step >= 1 ? "bg-blue-500" : "bg-[#e7e7e7] text-black"
            }`}
          >
            1
          </div>
          <div
            className={`h-10 aspect-square rounded-full flex items-center justify-center text-[18px] ${
              step >= 2 ? "bg-blue-500" : "bg-[#e7e7e7] text-black"
            }`}
          >
            2
          </div>
          <div
            className={`h-10 aspect-square rounded-full flex items-center justify-center text-[18px] ${
              step >= 3 ? "bg-blue-500" : "bg-[#e7e7e7] text-black"
            }`}
          >
            3
          </div>
        </div>
        <p className=" p-10">
          Step{step}: {data[step - 1]}
        </p>

        <div className="flex justify-between text-white">
          <button
            className="bg-blue-500  rounded-md px-2 cursor-pointer hover:bg-blue-600 duration-300"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-blue-500  rounded-md px-2 cursor-pointer hover:bg-blue-600 duration-300"
            onClick={handleNext}
            // onMouseEnter={() => alert("Test")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
