import { IoSearchSharp } from "react-icons/io5";
import { Button } from "./Button";
import { heroSectionCardData } from "../Data/HeroSectionCardData";


export const HeroSectionCard = () => {
  return (
    <div className="absolute shadow-lg top-[23.6rem] bg-white 
    px-[2rem] py-[4rem] rounded-[1rem] flex flex-col gap-[2.5rem]">
        {/* Search section */}
        <div className="flex justify-around">
            <label className="flex items-center gap-2 bg-[#FAFBFE] rounded-md p-[0.5rem]">
                <IoSearchSharp className="text-[#9CA3AF] text-[1.3rem]"/>
                <input type="text" placeholder="State" className="bg-[#FAFBFE] outline-none"/>
            </label>

            <label className="flex items-center gap-2 bg-[#FAFBFE] rounded-md p-[0.5rem]">
                <IoSearchSharp className="text-[#9CA3AF] text-[1.3rem]"/>
                <input type="text" placeholder="City" className="bg-[#FAFBFE] outline-none"/>
            </label>
            <Button content={"Search"} flexDesign={"flex items-center gap-2"} XPaddingDesign={"px-[1rem]"}
             IconLogo={IoSearchSharp} />
        </div>
        {/* Options sections  */}
        <div className="flex flex-col gap-5">
            <p className="text-center font-medium text-[1.25rem]">You may be looking for</p>
            <div className="flex gap-[2rem]">
                {
                    heroSectionCardData?.map(data => (
                        <div key={data?.id} 
                        className="bg-[#FAFBFE] px-[3rem] py-[1rem] flex 
                        flex-col justify-center items-center gap-[1rem] rounded-md">
                            {data?.logo}
                            <p className="text-[1.125rem] text-[#ABB6C7]">{data?.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
