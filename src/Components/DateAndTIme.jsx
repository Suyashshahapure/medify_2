import React, { useEffect, useState } from 'react'
import { bookingTimeData } from '../Data/BookingTimeData';

export const DateAndTIme = ({setBookingTime,setBookingDateDay}) => {
    const [twoDayLaterDate,setTwoDayLaterDate] = useState('');
    const [isDivHasBorder,setIsDivHasBorder] = useState([false,true,false,false]);
    const [selectedTime,setSelectedTime] = useState([[],[false],[false,false,false,false,false],[false,false,false,false]]);

    const dayData = [
        {
            day: 'Today',
            slot: '11 Slot Available',
            id:1
        },
        {
            day: 'Tomorrow',
            slot: '17 Slot Available',
            id:2
        },
        {
            day: twoDayLaterDate,
            slot: '18 Slot Available',
            id:3
        }
    ]
    
    useEffect(() => {

        // calculating date 2 days later
        const currentData = new Date();
        const twoDayLater = new Date(currentData);
        twoDayLater.setDate(currentData.getDate() + 2);

        // Format the date in IST
        const formattedDate = twoDayLater.toLocaleDateString('en-US', {
            timeZone: 'Asia/Kolkata', // Set the timezone to IST
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });

        // Formate time in day, date, month
        const changeTimeFormate = (dateString) => {
            // Append a year to the date string to ensure it's parsed correctly
            const date = new Date(Date.parse(dateString + ", 2024"));

            // Create options for formatting
            const options = { weekday: 'short', day: '2-digit', month: 'short' };
            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

            // Rearrange the formatted date into the desired format
            const [weekday, month, day] = formattedDate.split(' ');
            return `${weekday} ${day} ${month}`;
        };

        // Format the date into the desired format
        const outputDate = changeTimeFormate(formattedDate);
        setTwoDayLaterDate(outputDate);
    },[]);

    // setting the booking date and time on first render
    useEffect(() => {
        let fang = false ;
        for(let i = 0 ; i < selectedTime.length ; i++){
            for(let j = 0 ; j < selectedTime[i].length ; j++){
                if(selectedTime[i][j]) fang = true ;
            }
        }

        if(!fang) return ;

        let id = 0 ;
        for(let i = 1 ; i <= 3 ; i++){
            if(isDivHasBorder[i]) id = i ;
        }
        handleClick(id);
    },[selectedTime]);

    
    function getFormattedDate(addedDays = 0) {
        // Create a new Date object
        const date = new Date();
    
        // Add the specified number of days
        date.setDate(date.getDate() + addedDays);
    
        // Convert to IST by adding the IST offset (UTC+5:30)
        const offset = 5.5 * 60; // 5.5 hours in minutes
        const istDate = new Date(date.getTime() + (offset * 60 * 1000));
    
        // Define month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        // Get day, month, and year from the IST date
        const day = istDate.getUTCDate();
        const month = monthNames[istDate.getUTCMonth()];
        const year = istDate.getUTCFullYear();
    
        // Format the date as "DD MMMM YYYY"
        return `${day} ${month} ${year}`;
    }

    // handle bottom border change 
    const handleClick = (id) => {
        const arr = [false,false,false,false];
        arr[id] = true ;
        setIsDivHasBorder(arr);
        if(id === 1){
            const todayDate = getFormattedDate();
            setBookingDateDay(todayDate);
        }
        else if(id === 2){
            const tomorrowDate = getFormattedDate(1);
            setBookingDateDay(tomorrowDate);
        }
        else{
            const dayAfterTomorrowDate = getFormattedDate(2);
            setBookingDateDay(dayAfterTomorrowDate)
        }
    }

    const handleArrowClick = (id) => {

        let index = -1 ;
        for(let i = 1 ; i <= 3 ; i++){
            if(isDivHasBorder[i]){
                index = i ;
                break ;
            }
        }

        if(id === 0){
            index-- ;
            if(index <= 0) index = 3 ;
            handleClick(index);
        }
        else{
            index++ ;
            if(index > 3) index = 1 ;
            handleClick(index);
        }
    }

    // Booking time handler
    const bookingTimeHandler = (id1, id2, timeData) => {
        setBookingTime(timeData);
        const arr = [[],[false],[false,false,false,false,false],[false,false,false,false]];
        arr[id1][id2] = true ;
        setSelectedTime(arr);
    }

  return (
    <div className='pt-[3rem] px-[1rem]'>
        <div className='flex justify-between'>
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleArrowClick(0)}
            className='cursor-pointer'>
            <rect x="0.5" y="1.12012" width="47" height="47" rx="23.5" stroke="#E0E0E4"/>
            <path d="M23.0239 24.6207L27.1487 28.7455L25.9702 29.924L20.6668 24.6207L25.9702 19.3174L27.1487 20.4959L23.0239 24.6207Z" fill="#2AA7FF"/>
            </svg>
            
            {/* Booking date and day  */}
            <div className='flex gap-x-[6rem]'>
                {
                    dayData?.map((data) => (
                        <div key={data?.id} className={`cursor-pointer ${isDivHasBorder[data?.id] && 'border-b-4'} border-[#2AA7FF] px-[2rem]`} 
                        onClick={() => handleClick(data?.id)}>
                            <p className='text-[1rem] text-[#414146]'>{data?.day}</p>
                            <p className='text-[#01A400] text-[0.75rem]'>{data?.slot}</p>
                        </div>
                    ))
                }
            </div>

            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleArrowClick(1)}
            className='cursor-pointer'>
            <rect x="0.5" y="1.12012" width="47" height="47" rx="23.5" stroke="#E0E0E4"/>
            <path d="M24.9761 24.6196L20.8513 20.4947L22.0298 19.3162L27.3332 24.6196L22.0298 29.9229L20.8513 28.7443L24.9761 24.6196Z" fill="#2AA7FF"/>
            </svg>
        </div>

        {/* Time shedule  */}
        <div>
            {
                bookingTimeData?.map((data) => (
                    <div key={data?.id} className={`flex ${data?.id === 2 ? 'gap-x-[2.2rem]' : 'gap-x-[3rem]'} 
                    ${data?.id !== 3 ? 'py-[2rem]' : 'pt-[2rem]'} px-[3rem] ${data?.id !== 3 && 'border-b-[1px]'}`}>
                        <p className='text-[0.875rem]'>{data?.Day}</p>
                        <div className='flex gap-x-[2rem]'>
                            {
                                data?.Time?.map((timeData,id) => (
                                    <div key={id} className={`text-[#2AA7FF] border-[1px] border-[#2AA7FF] rounded-[3px] px-[0.8rem]
                                    py-[0.3rem] cursor-pointer hover:bg-blueTheme hover:text-white ${selectedTime[data?.id][id] && 'bg-blueTheme text-white'}`}
                                    onClick={() => bookingTimeHandler(data?.id,id,timeData)}>{timeData}</div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
