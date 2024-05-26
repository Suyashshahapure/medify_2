import React, { useEffect, useState } from 'react';
import { Button } from '../Components/Button';
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import '../CombineCss.css'
import { HospitalCard } from '../Components/HospitalCard';
import findDoctorAdvertisementImg from '../Asserts/Find Doctors/75bf68ac8b03b8adc3d5939338d5479e.png'

function HospitalList() {
  
  
  const [stateList, setStateList] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospital, setHospital] = useState([]);
  
  // changes state to display state and city
  const [isStateVisible,setIsStateVisible] = useState(false);
  const [isCityVisible,setIsCityVisible] = useState(false);
  
  // change current selected state and city 
  const [currentState,setCurrentState] = useState('State');
  const [currentCity,setCurrentCity] = useState('City');

  // Show hospitals 
  const [showHospitalList,setShowHospitalList] = useState(false);
  
  const urlStates = 'https://meddata-backend.onrender.com/states';
  const urlCities = `https://meddata-backend.onrender.com/cities/${currentState}`;
  const urlHospitals = `https://meddata-backend.onrender.com/data?state=${currentState}&city=${currentCity}`;
  

  useEffect(() => {
    fetch(urlStates)
      .then(res => res.json())
      .then(data => {
        setStateList(data);
      })
      .catch(error => console.error('Error fetching states:', error));
  }, []);


  useEffect(() => {
    if (currentState) {
      fetch(urlCities)
        .then(res => res.json())
        .then(data => {setCities(data)})
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [currentState]);

  useEffect(() => {
    if (currentState && currentCity) {
      fetch(urlHospitals)
        .then(res => res.json())
        .then(data => setHospital(data))
        .catch(error => console.error('Error fetching hospitals:', error));
    }
  }, [currentState, currentCity]);

  const handleParentClick = () => {
    setIsCityVisible(false);
    setIsStateVisible(false);
  }

  const handleChildClickState = (e) => {
    e.stopPropagation();
    setIsStateVisible(true);
    setIsCityVisible(false);
  } 

  const handleChildClickCity = (e) => {
    e.stopPropagation();
    setIsCityVisible(true);
    setIsStateVisible(false);
  } 

  const handleChildClickStateDropDown = (data) => {
    setCurrentState(data);
  }
  const handleChildClickCityDropDown = (data) => {
    setCurrentCity(data);
  }

  return (
    <div className='heroBg min-h-[100vh] flex flex-col pb-[4rem]' onClick={handleParentClick}>
      <div className='h-[6rem] bg-blueTheme rounded-b-[1rem]'>
        <div className='flex justify-center items-center bg-white max-w-[1166px] mx-auto p-[1rem] rounded-[0.5rem] relative top-[3rem] shadow-lg gap-x-[1rem]'>
          <label className='flex items-center gap-x-[1rem] bg-[#FAFBFE] border border-[#F0F0F0] p-[0.5rem] rounded-md'>
            <CiLocationOn className='text-[1.5rem] text-[#9CA3AF]'/>
            <div>
              <input type='text' placeholder={currentState} className='bg-[#FAFBFE] outline-none' onClick={handleChildClickState}/>

              <div className={`absolute flex flex-col ${isStateVisible ? 'block' : 'hidden'} max-h-[400px] 
              overflow-y-scroll bg-[#FAFBFE] py-[0.5rem] rounded-b-[0.5rem]`}>
                {
                  stateList?.map((data,index) => (
                    <div key={index} className='p-[0.5rem] cursor-pointer hover:bg-blueTheme hover:text-white' 
                    onClick={() => handleChildClickStateDropDown(data)}>{data}</div>
                  ))
                }
              </div>
            </div>

          </label>
          <label className='flex items-center gap-x-[1rem] bg-[#FAFBFE] border border-[#F0F0F0] p-[0.5rem] rounded-md'>
            <CiLocationOn className='text-[1.5rem] text-[#9CA3AF]'/>
            <div>
              <input type='text' placeholder={currentCity} className='bg-[#FAFBFE] outline-none' onClick={handleChildClickCity}/>

              <div className={`absolute flex flex-col ${isCityVisible ? 'block' : 'hidden'} max-h-[400px] 
              overflow-y-scroll bg-[#FAFBFE] py-[0.5rem] rounded-b-[0.5rem]`}>
                {
                  cities?.map((data,index) => (
                    <div key={index} className='p-[0.5rem] cursor-pointer hover:bg-blueTheme hover:text-white' 
                    onClick={() => handleChildClickCityDropDown(data)}>{data}</div>
                  ))
                }
              </div>
            </div>
          </label>
          <Button content={"Search"} IconLogo={IoSearchSharp} XPaddingDesign={"px-[3.25rem]"} flexDesign={"flex gap-x-[0.5rem]"}
           onClickFuntion={() => setShowHospitalList(true)}/>
        </div>
      </div>
      
      
      {/* Hospital Cards  */}
      {
        showHospitalList ? (
          <div className='mt-[9rem] mx-auto flex flex-col gap-y-[1.5rem]'>
            <div>
                <h3 className='text-[1.5rem] font-medium'>{hospital?.length} medical centers available in {currentState}</h3>
                <div className='flex gap-x-[2rem]'>
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8139 20L10.7021 20.8079L9.08567 19.3149L6.79994 19.3147L5.925 17.364L3.81334 16.5557L3.81311 14.4442L2.19702 12.9509L3.07151 11L2.19702 9.04909L3.81311 7.55584L3.81334 5.44429L5.925 4.63603L6.79994 2.68529L9.08567 2.68507L10.7021 1.19214L12.8139 1.99999L14.9258 1.19214L16.5423 2.68507L18.8279 2.68529L19.7029 4.63603L21.8145 5.44429L21.8147 7.55584L23.4309 9.04909L22.5564 11L23.4309 12.9509L21.8147 14.4442L21.8145 16.5557L19.7029 17.364L18.8279 19.3147L16.5423 19.3149L14.9258 20.8079L12.8139 20Z" fill="#F0F0F5" stroke="#2D2D32" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.4423 11.2123C8.16418 10.9584 7.71326 10.9584 7.43515 11.2123C7.15703 11.4662 7.15703 11.8778 7.43515 12.1317L10.7586 15.1658C11.0367 15.4197 11.4876 15.4197 11.7657 15.1658L18.4127 9.09767C18.6907 8.84377 18.6907 8.43212 18.4127 8.17822C18.1345 7.92432 17.6836 7.92432 17.4055 8.17822L11.2622 13.7866L8.4423 11.2123Z" fill="#2D2D32" stroke="#2D2D32" stroke-width="0.506465"/>
                  </svg>
    
                  <p className='text-[#787887]'>Book appointments with minimum wait-time & verified doctor details</p>
                </div>
            </div>
            <div className='flex gap-x-[2rem]'>
                <div className='flex flex-col gap-y-[1rem]'>
                  {
                    hospital?.map((data,index) => (
                      <HospitalCard key={index} hospitalName={data['Hospital Name']} address={data?.Address}/>
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
  );
}

export default HospitalList;
