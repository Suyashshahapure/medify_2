import React, { useState } from 'react'
import img from '../Asserts/Find Doctors/b3e2f8072c3b5c69af5f4bb1596a887f.png'
import { Button } from './Button'
import { DateAndTIme } from './DateAndTIme';

export const HospitalCard = ({hospitalName, address}) => {

    const [showDateAndTimeSchedule,setShowDateAndTimeSchedule] = useState(false);
    const [bookingTime,setBookingTime] = useState('');
    const [bookingDateDay,setBookingDateDay] = useState('');

    const showShedule = (e) => {
        e.stopPropagation();
        setShowDateAndTimeSchedule(!showDateAndTimeSchedule);
    } 

    // Booking hospital 
    const bookHospitalHandler = () => {
        const hospitalData = {
            hospitalName : hospitalName,
            hospitalAddress : address,
            time : bookingTime,
            dateAndDay : bookingDateDay
        }

        if(!hospitalData.time || !hospitalData.dateAndDay) return ;

        const bookingData = localStorage.getItem('bookingData');
        if(bookingData === null){
            let data = [hospitalData];
            localStorage.setItem('bookingData', JSON.stringify(data));
            console.log(data);
        }
        else{
            let data = JSON.parse(bookingData);
            for(let i = 0 ; i < data.length ; i++){
                if(JSON.stringify(data[i]) === JSON.stringify(hospitalData)) return ;
            }
            data.push(hospitalData);
            localStorage.setItem('bookingData', JSON.stringify(data));
            console.log(data);
        }
    }

  return (
    <div className='flex flex-col bg-white rounded-xl p-[2rem] cursor-pointer'>
        <div className='flex gap-x-[2rem]' onClick={(e) => showShedule(e)}>
            <div className='bg-[#8CCFFF] p-[1.5rem] rounded-full relative self-start'>
                <img src={img} alt='tick' loading='lazy' className='w-[5rem]'/>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[7rem] top-[5rem]'>
                    <g clip-path="url(#clip0_1_1442)">
                    <g clip-path="url(#clip1_1_1442)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9995 19.17L8.10061 19.9563L6.64717 18.5031L4.59191 18.5029L3.8052 16.6042L1.90647 15.8175L1.90626 13.7622L0.453125 12.3088L1.23944 10.4099L0.453125 8.51101L1.90626 7.05757L1.90647 5.00231L3.8052 4.2156L4.59191 2.31687L6.64717 2.31666L8.10061 0.863525L9.9995 1.64984L11.8984 0.863525L13.3518 2.31666L15.4071 2.31687L16.1938 4.2156L18.0925 5.00231L18.0927 7.05757L19.5459 8.51101L18.7596 10.4099L19.5459 12.3088L18.0927 13.7622L18.0925 15.8175L16.1938 16.6042L15.4071 18.5029L13.3518 18.5031L11.8984 19.9563L9.9995 19.17Z" fill="#2AA7FF" stroke="#F0F0F5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.56082 10.5123C6.31635 10.2927 5.92 10.2927 5.67554 10.5123C5.43107 10.732 5.43107 11.088 5.67554 11.3077L8.59682 13.9321C8.84129 14.1518 9.23764 14.1518 9.4821 13.9321L15.3247 8.6832C15.5691 8.46357 15.5691 8.10749 15.3247 7.88786C15.0802 7.66824 14.6839 7.66824 14.4394 7.88786L9.03946 12.7391L6.56082 10.5123Z" fill="white" stroke="white" stroke-width="0.5"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_1442">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.409912)"/>
                    </clipPath>
                    <clipPath id="clip1_1_1442">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.409912)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>


            <div className='flex flex-col gap-y-[1rem]'>
                <h3 className='text-[#14BEF0] font-semibold text-[1.25rem]'>{hospitalName}</h3>
                <div className='flex flex-col gap-y-[0.5rem]'>
                    <div className='text-[#414146] text-[0.875rem]'>
                        <p className='font-bold'>{address}</p>
                        <p>Smilessence Center for Advanced Dentistry + 1</p>
                        <p>more</p>
                    </div>
                    <div className='text-[0.875rem] flex gap-x-[0.4rem]'>
                        <p className='text-[#02A401] font-bold'>FREE</p>
                        <p className='line-through text-[#787887]'>₹500</p>
                        <p>Consultation fee at clinic</p>
                    </div>
                </div>
                {
                    !showDateAndTimeSchedule && 
                    <svg width="45" height="24" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.879883" width="44.08" height="22.5" rx="3.5" fill="#00A500"/>
                    <g clip-path="url(#clip0_1_1462)">
                    <path d="M11.9674 10.6299H13.7174V17.6299H11.9674C11.6452 17.6299 11.384 17.3687 11.384 17.0465V11.2132C11.384 10.891 11.6452 10.6299 11.9674 10.6299ZM15.0549 9.87568L18.7885 6.14207C18.8911 6.03943 19.0536 6.02789 19.1697 6.11498L19.6671 6.48798C19.9498 6.70004 20.0772 7.06136 19.99 7.40385L19.3172 10.0465H23.0507C23.695 10.0465 24.2174 10.5689 24.2174 11.2132V12.4407C24.2174 12.5931 24.1875 12.7441 24.1295 12.8849L22.3244 17.2686C22.2344 17.4872 22.0214 17.6299 21.785 17.6299H15.4674C15.1452 17.6299 14.884 17.3687 14.884 17.0465V10.2882C14.884 10.1334 14.9455 9.98508 15.0549 9.87568Z" fill="white"/>
                    </g>
                    <path opacity="0.5" d="M30.432 10.9329C30.656 10.8862 30.8706 10.8535 31.076 10.8349C31.2813 10.8115 31.4796 10.7999 31.671 10.7999C32.203 10.7999 32.672 10.8792 33.078 11.0379C33.484 11.1965 33.8246 11.4159 34.1 11.6959C34.3753 11.9759 34.583 12.3049 34.723 12.6829C34.863 13.0562 34.933 13.4599 34.933 13.8939C34.933 14.4305 34.8373 14.9205 34.646 15.3639C34.4593 15.8072 34.198 16.1875 33.862 16.5049C33.526 16.8175 33.127 17.0602 32.665 17.2329C32.2076 17.4055 31.7083 17.4919 31.167 17.4919C30.8496 17.4919 30.5486 17.4592 30.264 17.3939C29.9793 17.3285 29.711 17.2422 29.459 17.1349C29.2116 17.0229 28.9806 16.8969 28.766 16.7569C28.556 16.6122 28.367 16.4605 28.199 16.3019L28.731 15.5669C28.843 15.4082 28.99 15.3289 29.172 15.3289C29.2886 15.3289 29.4076 15.3662 29.529 15.4409C29.6503 15.5155 29.788 15.5972 29.942 15.6859C30.1006 15.7745 30.285 15.8562 30.495 15.9309C30.7096 16.0055 30.9663 16.0429 31.265 16.0429C31.5823 16.0429 31.8623 15.9915 32.105 15.8889C32.3476 15.7862 32.5483 15.6439 32.707 15.4619C32.8703 15.2752 32.9916 15.0559 33.071 14.8039C33.155 14.5472 33.197 14.2695 33.197 13.9709C33.197 13.4202 33.036 12.9909 32.714 12.6829C32.3966 12.3702 31.9253 12.2139 31.3 12.2139C30.8193 12.2139 30.327 12.3025 29.823 12.4799L28.745 12.1719L29.585 7.25788H34.583V7.99288C34.583 8.24022 34.506 8.44088 34.352 8.59488C34.198 8.74888 33.9366 8.82588 33.568 8.82588H30.789L30.432 10.9329Z" fill="white"/>
                    <defs>
                    <clipPath id="clip0_1_1462">
                    <rect width="14" height="14" fill="white" transform="translate(10.8 5.37988)"/>
                    </clipPath>
                    </defs>
                </svg>
                }
            </div>

            <div className='text-[0.875rem] flex flex-col gap-y-[0.5rem] items-center self-end'>
                <p className='text-[#01A400] font-medium'>Available Today</p>
                <Button content={"Book FREE Center Visit"} XPaddingDesign={"px-[2rem]"} onClickFuntion={bookHospitalHandler} 
                />
            </div>
        </div>
        {
            showDateAndTimeSchedule && <DateAndTIme setBookingTime={setBookingTime} setBookingDateDay={setBookingDateDay}/>
        }
    </div>
  )
}
