import React from 'react'
import img1 from '../Asserts/NewsSection/e0f1c8f91238e726af61b531dfa4b505.png'
import img2 from '../Asserts/NewsSection/8432b7bc2559a85010e594f78aacfc8c.jpeg'

export const NewsSections = () => {
  return (
    <div className='pt-[3rem]'>
        <div className='flex flex-col gap-y-[1.8rem]'>
            {/* Heading divs  */}
            <div>
                <h3 className='text-[1rem] font-semibold text-center text-blueTheme'>Blog & News</h3>
                <h2 className='text-[3rem] text-center font-semibold text-[#1B3C74]'>Read Our Latest News</h2>
            </div>
            {/* card divs  */}
            <div className='flex justify-center gap-x-[2rem]'>
                {
                    Array.from({length : 3}, (_ , i) => (
                        <div key={i} className='rounded-[10px] shadow-md max-w-[22.688rem]'>
                            <img src={img1} alt='News' loading='lazy' className='rounded-[10px] w-full'/>
                            <div className='p-[1.1rem] flex flex-col gap-y-[0.3rem]'>
                                <p className='text-[1.063rem] text-[#77829D] font-medium'>Medical 
                                    <span className='font-normal text-[#DDDDDD]'> |</span> <span className='text-[1rem]'>March 31, 2022</span></p>
                                <p className='text-[1.125rem] text-[#1B3C74] font-medium leading-[1.688rem] mt-[0.6rem]'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                                <div className='flex items-center gap-x-3'>
                                    <img src={img2} alt='Doctor' loading='lazy' className='w-[2rem] rounded-full'/>
                                    <p className='text-[1.063rem] text-[#1B3C74] font-medium'>Rebecca Lee</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <svg width="14" height="66" viewBox="0 0 14 66" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative -top-[1rem]'>
            <g clip-path="url(#clip0_1_1061)">
            <path d="M8.39216 3.87416C2.74797 12.1323 -2.33512 20.7464 -6.84768 29.651C-9.32599 28.3816 -11.8418 27.1872 -14.3951 26.0817C-11.0656 20.0391 -7.74084 13.9919 -4.41138 7.94936C-2.64376 4.74541 -7.54439 1.87402 -9.31202 5.07797C-12.7725 11.3594 -16.2281 17.6409 -19.6885 23.9223C-22.0266 23.0276 -24.3881 22.1985 -26.7777 21.4397C-30.2661 20.3295 -31.7625 25.8147 -28.2881 26.9202C-26.3241 27.5431 -24.3787 28.227 -22.4569 28.9484C-23.2238 30.3349 -23.986 31.7261 -24.7529 33.1126C-26.7777 31.5668 -28.737 29.9274 -30.6215 28.1896C-33.3057 25.7164 -37.3319 29.7306 -34.6337 32.2086C-32.3564 34.307 -29.9716 36.2697 -27.5072 38.1152C-30.6169 43.7597 -33.7219 49.4041 -36.8315 55.0485C-38.5992 58.2524 -33.6985 61.1238 -31.9309 57.9198C-28.896 52.4113 -25.8611 46.9027 -22.831 41.3895C-20.1328 43.1554 -17.3411 44.7808 -14.4745 46.247C-16.4106 50.9405 -18.2015 55.6996 -19.8288 60.5149C-21.0025 63.9858 -15.5267 65.4754 -14.3577 62.0278C-12.8286 57.517 -11.1544 53.0624 -9.34469 48.6686C-5.08468 50.5142 -0.670349 52.0319 3.86091 53.2029C7.40078 54.1163 8.91123 48.6359 5.37136 47.7225C1.0832 46.617 -3.08794 45.1836 -7.11883 43.4411C-6.23502 41.4364 -5.31853 39.4408 -4.37862 37.4642C-0.226082 39.8484 3.79546 42.4668 7.67202 45.3242C10.618 47.4929 13.4517 42.5605 10.5385 40.4151C6.55437 37.4829 2.41128 34.7942 -1.8628 32.3585C2.6217 23.5148 7.686 14.9615 13.2928 6.75022C15.3597 3.71489 10.445 0.866932 8.39216 3.87416ZM-12.2347 41.01C-14.9329 39.6236 -17.5562 38.0918 -20.0907 36.4149C-19.1087 34.6349 -18.1313 32.855 -17.1494 31.0703C-14.5119 32.2039 -11.912 33.4217 -9.36349 34.7333C-10.3548 36.813 -11.3088 38.9069 -12.2347 41.01Z" fill="#CFEAFF"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1061">
            <rect width="51" height="65" fill="white" transform="translate(-37.21 0.789978)"/>
            </clipPath>
            </defs>
        </svg>
    </div>
  )
}
