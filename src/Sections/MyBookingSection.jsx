import { useEffect, useState } from 'react';
import '../CombineCss.css'
import { Button } from '../Components/Button';
import { IoSearchSharp } from "react-icons/io5";
import { MyBookingCard } from '../Components/MyBookingCard';
import findDoctorAdvertisementImg from '../Asserts/Find Doctors/75bf68ac8b03b8adc3d5939338d5479e.png'
import '../CombineCss.css'

export const MyBookingSection = () => {
    const [myBookingData,setMyBookingData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('bookingData'));
        setMyBookingData(data);
    },[]);

  return (
    <div className='heroBg min-h-[100vh] flex flex-col pb-[4rem]'>
        <div className='h-[6rem] bg-blueTheme rounded-b-[1rem]'>
            <div className='relative top-[2rem] left-[15rem] font-bold text-[2.5rem] text-white'>My Bookings</div>
            <div className='flex justify-between items-center bg-white max-w-[700px] mx-auto p-[1rem] rounded-[0.5rem] relative left-[21rem]
            -top-[1rem] shadow-lg gap-x-[1rem]'>
                <label className='flex items-center gap-x-[1rem] bg-[#FAFBFE] border border-[#F0F0F0] p-[0.5rem] rounded-md w-full'>
                    <input type='text' placeholder="Search By Hospital" className='bg-[#FAFBFE] outline-none px-[1rem]'/>
                </label>
                <Button content={"Search"} IconLogo={IoSearchSharp} XPaddingDesign={"px-[3.25rem]"} flexDesign={"flex gap-x-[0.5rem]"}/>
            </div>
        </div>

        {/* My booking cards  */}
        {
            myBookingData ? (
                <div className='mt-[9rem] mx-auto flex flex-col gap-y-[1.5rem]'>
                    <div className='flex gap-x-[2rem]'>
                        <div className='flex flex-col gap-y-[1.5rem]'>
                        {
                            myBookingData?.map((data,index) => (
                            <MyBookingCard key={index} hospitalName={data?.hospitalName} address={data?.hospitalAddress} time={data?.time} dateAndDay={data?.dateAndDay}/>
                            ))
                        }
                        </div>
                        <img src={findDoctorAdvertisementImg} alt='Advertisement' loading='lazy' className='max-w-[22.688rem] rounded-xl self-start'/>
                    </div>
                </div>
            ) :
            (<div className='text-center mt-[10rem] font-semibold text-[2rem] text-[#414146]'>No Record Found</div>)
      }
    </div>
  )
}
