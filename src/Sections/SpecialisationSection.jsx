import React from 'react';
import { Button } from '../Components/Button';
import specialisationData from '../Data/SpecialisationData';
import '../CombineCss.css';

export const SpecialisationSection = () => {
  return (
    <div className='heroBg flex flex-col items-center py-[2rem]'>
      <h2 className='font-semibold text-[3rem] text-[#1B3C74]'>Find by specialisation</h2>
      <div className='grid grid-cols-4 gap-[2rem] mt-[2rem]'>
        {specialisationData?.map((Data, index) => (
          <div
            key={index}
            className='bg-white rounded-[0.5rem] flex flex-col gap-y-[1rem] justify-center items-center py-[1rem] px-[3rem] shadow-lg'
          >
            {Data?.Logo}
            <p className='text-[#ABB6C7]'>{Data?.content}</p>
          </div>
        ))}
      </div>
      <Button content={"View All"} XPaddingDesign={"px-[2.25rem]"} marginDesign={"mt-[3rem]"} />
    </div>
  );
};
