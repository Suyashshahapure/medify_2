import herosectionbg from '../Asserts/herosectionpng.png' 
import { Button } from '../Components/Button'
import '../CombineCss.css'
import { HeroSectionCard } from '../Components/HeroSectionCard'

export const HeroSection = () => {
  return (
    <div className='heroBg h-[67vh] relative flex flex-col items-center'>
        {/* upper section  */}
        <div className='flex mx-auto max-w-[1212px]'>
            {/* herosection text  */}
            <div className='mt-[4rem] flex flex-col'>
              <h3 className='font-medium text-[1.938rem]'>Skip the travel! Find Online</h3>
              <h1 className='text-[3.5rem] font-bold mt-[-0.5rem] text-[#1B3C74]'>Medical 
              <span className="text-blueTheme"> Centers</span></h1>
              <p className='text-[#5C6169] text-[1.25rem] mt-[0.5rem] max-w-[35.625rem]'>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
              <Button content={"Find Centers"} flexDesign={"self-start"}
              XPaddingDesign={"px-[2.25rem]"} marginDesign={"mt-[2rem]"}/>
            </div>
            {/* herosection image  */}
            <img src={herosectionbg} alt='Docter' loading='lazy'/>
        </div>
        {/* below section  */}
        <HeroSectionCard/>
    </div>
  )
}
