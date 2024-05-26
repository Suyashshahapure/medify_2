import "../CombineCss.css";
import React from "react";
import hero from "../Asserts/FrequentlyAskedQuestionSection/hero.jpg";

function FrequentlyAskedSection() {
  return (
    <div>
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center pb-12">
        <p className="text-[#2AA7FF] text-xl"> Get Your Answer</p>
        <h1 className="text-[#1B3C74] text-5xl font-bold"> 
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex items-center">
        <div >
          <img src={hero} alt="Docter" loading="lazy" />
        </div>

        <div className=" flex flex-col items-start align-center ">
          <div className="flex p-5">
            <p className="text-[#1B3C74] font-light">
              Why choose our medical for your family?
            </p>
            <p className="text-[#2AA7FF] pl-[5.2rem]">+</p>
          </div>
          <div className="flex pl-5 pb-5 pt-5 ">
            <p className="text-[#1B3C74] font-light">Why we are different from others?</p>
            <p className="text-[#2AA7FF] pl-[8.6rem]">+</p>
          </div>
          <div className="flex pl-5 pb-5 pt-5">
            <p className="text-[#1B3C74]">
              Trusted & experience senior care & love
            </p>
            <p className="text-[#2AA7FF] pl-[5.8rem]">+</p>
          </div>
          <div className="flex pl-5 pb-5 pt-5">
            <p className="text-[#1B3C74] font-light">
              How to get appointment for emergency cases?
            </p>
            <p className="text-[#2AA7FF] pl-[2rem]">+</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FrequentlyAskedSection;
