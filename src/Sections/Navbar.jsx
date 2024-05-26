import React from 'react';
import { NavbarData } from '../Data/NavbarData';
import '../CombineCss.css';
import { Button } from '../Components/Button';
import HospitalList from '../Sections/HospitalList';

function Navbar({ handleNavbarLinkClick, showHospitalList,bgColor }) {
  return (
    <div>
      <div className='bg-[#2AA7FF] flex justify-center items-center p-4'>
        <p className='text-white'>The Health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      </div>
      <div style={{backgroundColor: bgColor}} className=' flex justify-between items-center p-4'>
        <a href="/" className='text-xl font-bold text-blue-500'>Medify</a>
        <div className='flex space-x-4'>
          {NavbarData.map(item => (
            <div key={item.id} onClick={() => handleNavbarLinkClick(item.id)} className='text-gray-700 hover:text-blue-500 cursor-pointer'>
              {item.content}
            </div>
          ))}
        </div>
        <div>
        <Button content="My Bookings" onClickFuntion={() => handleNavbarLinkClick(7)} XPaddingDesign={"px-[2rem]"}/>
      </div>
      </div>
     
      {showHospitalList && <HospitalList />}
    </div>
  );
}

export default Navbar;
