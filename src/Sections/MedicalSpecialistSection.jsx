import React from 'react'
import { medicalSpecialistData } from '../Data/MedicalSpecialistData'
import { Slider } from '../Components/Slider'

export const MedicalSpecialistSection = () => {
  return (
    <div className='flex flex-col items-center pt-[3.3rem] gap-y-[2.3rem] pb-[3rem]'>
        <h2 className='font-semibold text-[3rem] text-[#1B3C74]'>Our Medical Specialist</h2>
        <div className='flex gap-x-[1rem] mt-[2rem]'>
            {
                medicalSpecialistData?.map((data) => (
                    <div key={data?.id} className='flex flex-col items-center gap-[1rem]'>
                        <div className={`${data?.id === 1 ? "-ml-[13rem]" : data?.id === 5 ? "-mr-[7rem]" : ""} 
                        medicalSpecialistbg rounded-t-[11rem] p-[1.5rem] pb-[0rem] overflow-hidden
                        border-[0.5rem] border-white shadow-lg`}>
                            <img src={data?.img} alt='doctor' loading='lazy' 
                            className='w-[20.563rem] h-[25.625rem] relative top-[2.5rem]'/>
                        </div>
                        <p className='text-[#1B3C74] text-[1.5rem]'>{data?.personName}</p>
                        <p className='text-[#2AA7FF] text-[1.063rem] -mt-[0.6rem]'>{data?.profession}</p>
                    </div>
                ))
            }
        </div>
        <Slider/>
    </div>
  )
}
