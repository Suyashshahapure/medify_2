import React from 'react'
import {imgData} from '../Data/DiscountData'
import { Slider } from '../Components/Slider'

export const DiscountSection = () => {
  return (
    <div className='flex flex-col items-center gap-y-[1.5rem] pb-[2rem]'>
        <div className='flex gap-[2rem] justify-center mt-[9rem]'>
            {
                imgData?.map((data) => (
                    <img key={data?.id} src={data?.data} alt='Discount' loading='lazy' className='w-[24.894rem] 
                    rounded-[1.25rem]' /> 
                ))
            }
        </div>
        <Slider/>
    </div>
  )
}
