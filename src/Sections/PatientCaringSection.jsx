import React from 'react';
import { PatientCaringData } from '../Data/PatientCaringData';
import '../CombineCss.css';
import img1 from '../Asserts/PatientCaring/65d5b807171dc49fec96d7ce51d323d1.png';
import img2 from '../Asserts/PatientCaring/123cc4f6b10a8de7f4969c5b21b3227b.png';

export const PatientCaringSection = () => {
  return (
    <div className='heroBg'>
      {/* Upper div */}
      <div className='flex items-center w-[60%] mx-auto'>
        {/* Left div */}
        <div className='w-[45%]'>
          <div className='relative top-[9rem] -left-[4.5rem] z-10 bg-white max-w-[14.2rem] rounded-[8px] p-[0.5rem] 
                flex flex-col items-center'>
            <div className='flex items-center gap-x-1'>
              <svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path */}
              </svg>
              <p className='text-[1rem] font-bold text-[#1B3C74]'>Free Consultation</p>
            </div>
            <p className='text-[#77829D] text-[0.938rem] mt-[5px]'>Consultation with the best</p>
          </div>
          <img src={img1} alt='doctor' loading='lazy' className='relative left-[7rem] border-[5px] border-white max-w-[20.75rem]' />
          <img src={img2} alt='doctor' loading='lazy' className='relative -top-[3.2rem] border-[5px] border-white max-w-[20.75rem]' />
        </div>
        {/* Right div */}
        <div className='flex flex-col gap-y-[1.5rem]'>
          <div>
            <p className='text-[#2AA7FF] text-[1rem] font-semibold'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
            <h2 className='text-blueTheme font-semibold text-[3rem] -mt-[0.3rem]'> <span className='text-[#1B3C74]'>Patient</span> Caring</h2>
          </div>
          <p className='text-[#77829D] text-[1.063rem] font-medium leading-[1.813rem] max-w-[36.188rem]'>Our goal is to deliver quality of care in a 
            courteous, respectful, and compassionate manner. 
            We hope you will allow us to care for you and 
            strive to be the first and best choice for 
            healthcare.</p>
          <div className='flex flex-col gap-y-[1rem] mt-[0.5rem]'>
            {
              PatientCaringData?.map((data) => (
                <div key={data.id} id={data.id} className='flex items-center gap-x-2'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path */}
                  </svg>
                  <p className='text-[1.125rem] font-medium'>{data?.content}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
