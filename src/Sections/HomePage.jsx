import React, { useState } from 'react'
import Navbar from './Navbar'
import { HeroSection } from './HeroSection'
import { DiscountSection } from './DiscountSection'
import { SpecialisationSection } from './SpecialisationSection'
import { MedicalSpecialistSection } from './MedicalSpecialistSection'
import { PatientCaringSection } from './PatientCaringSection'
import { NewsSections } from './NewsSections'
import OurFamiliesSection from './OurFamiliesSection'
import FrequentlyAskedSection from './FrequentlyAskedSection'
import Footer from './Footer'
import HospitalList from './HospitalList'
import { MyBookingSection } from './MyBookingSection'

export const HomePage = () => {
    const [showHospitalList, setShowHospitalList] = useState(false);
    const [renderBookingComponent,setRenderBookingComponent] = useState(false);

    const handleNavbarLinkClick = (id) => {
      if (id === 1) {
          setShowHospitalList(true);
          setRenderBookingComponent(false);
      } 
      else if(id === 7){
        setShowHospitalList(false);
        setRenderBookingComponent(true);
      }
      else {
        setShowHospitalList(false);
        setRenderBookingComponent(false);
      }
    };

  return (
    <div className='font-Poppins'>
        <Navbar handleNavbarLinkClick={handleNavbarLinkClick} bgColor="#E7F0FF" />
        {
            showHospitalList ? (
                <HospitalList/>
            ) : renderBookingComponent ? (<MyBookingSection/>) :
            (
                <>
                    <HeroSection />
                    <DiscountSection />
                    <SpecialisationSection />
                    <MedicalSpecialistSection />
                    <PatientCaringSection />
                    <NewsSections />
                    <OurFamiliesSection />
                </>
            )
        }
        <FrequentlyAskedSection />
        <Footer />
       
    </div>
  )
}
