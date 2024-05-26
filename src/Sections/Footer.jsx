import React from "react";
import phone from "../Asserts/FooterSection/Screenshot 2024-05-25 at 7.54.48 PM (1).png";
import { Button } from "../Components/Button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
function Footer() {
    return (
        <div className="flex flex-col">
            <div className="bg-[#E7F0FF] flex justify-center items-center pt-12 pl-12 pr-12 space-x-8 ">
                <div>
                    <img src={phone} alt="" />
                </div>
                <div>
                    <svg
                        width="49"
                        height="111"
                        viewBox="0 0 49 111"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.8"
                            d="M35.0792 83.5227C38.4391 91.4377 42.2341 97.0022 47.9265 105.349C49.824 108.131 47.0564 110.05 44.7238 109.618C40.0586 108.755 37.2909 110.673 32.6258 109.81C27.9606 108.946 25.1929 110.865 20.5278 110.001C18.1952 109.569 18.6303 107.219 21.3979 105.3C24.1656 103.382 28.8308 104.245 33.496 105.109L35.8285 105.541C33.4959 105.109 31.1634 104.677 29.2659 101.895C25.0358 98.6807 18.4731 95.0348 14.2431 91.8208C6.21802 83.0423 0.960647 72.345 0.803534 60.1609C0.64642 47.9768 7.92215 34.7375 14.3277 26.1992C17.5305 21.9301 23.5009 15.7422 29.0363 11.9049C31.8039 9.98618 34.5716 8.06749 37.3393 6.1488C40.107 4.23012 42.8747 2.31143 45.6423 0.392743C47.9749 0.824526 50.3075 1.25631 47.5398 3.175C44.7721 5.09368 42.0045 7.01237 41.5694 9.36284C38.8017 11.2815 36.034 13.2002 33.2663 15.1189C27.731 18.9563 24.5282 23.2254 21.3254 27.4946C13.0224 33.2506 8.51437 44.5712 6.3389 56.3236C6.49602 68.5077 9.4208 78.7731 17.8809 85.2012C22.111 88.4152 26.3411 91.6293 30.5711 94.8433C32.9037 95.2751 35.2363 95.7069 34.8012 98.0573C32.9037 95.2751 29.1088 89.7106 27.2113 86.9283C28.0815 82.2274 33.1817 80.7405 35.0792 83.5227Z"
                            fill="#2AA7FF"
                        />
                    </svg>
                </div>
                <div>
                    <p className="text-[#1B3C74] text-4xl font-bold">
                        Download The
                    </p>
                    <p className="text-[#1B3C74] text-4xl font-bold"><a href="/" className="text-[#2AA7FF] text-4xl font-bold">Medify</a> App</p>
                    <p className="pb-2">Get the link to download the app </p>
                    <div className="flex space-x-3">
                        <div className="flex bg-white border items-center rounded-s-lg px-[1rem]">+91</div>
                        <input type="text" placeholder="Enter your number" className="text-xs w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                        <Button content={"Send SMS"} XPaddingDesign={"px-[2rem]"}/>
                    </div>
                    <div className="flex pt-2 space-x-2">
                        <button className="flex border rounded shadow bg-white pr-3 items-center px-[2rem] py-[0.4rem]">
                            <IoLogoGooglePlaystore />
                            Google Play
                        </button>
                        <button className="flex border rounded shadow bg-white items-center px-[2rem] py-[0.4rem]">
                            <FaApple />
                            App Store
                        </button>
                    </div>
                </div>
            </div>







            <div className="flex bg-[#1B3C74] p-12 space-x-8 justify-center">
                <div>
                    <h1 className="text-[#2AA7FF] text-3xl font-bold pb-20">Medify</h1>
                    <div className="flex">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                fill="white"
                                fillOpacity="0.99"
                            />
                            <rect
                                x="0.5"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                stroke="white"
                            />
                            <path
                                d="M21.3088 18.5901L21.7463 15.7151H18.9651V13.8401C18.9651 13.0276 19.3401 12.2776 20.5901 12.2776H21.8713V9.80884C21.8713 9.80884 20.7151 9.59009 19.6213 9.59009C17.3401 9.59009 15.8401 10.9963 15.8401 13.4963V15.7151H13.2776V18.5901H15.8401V25.5901H18.9651V18.5901H21.3088Z"
                                fill="#2AA7FF"
                            />
                        </svg>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.699951"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                fill="white"
                                fillOpacity="0.99"
                            />
                            <rect
                                x="0.699951"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                stroke="white"
                            />
                            <path
                                d="M24.1338 14.3401C24.7588 13.8713 25.3213 13.3088 25.7588 12.6526C25.1963 12.9026 24.54 13.0901 23.8838 13.1526C24.5713 12.7463 25.0713 12.1213 25.3213 11.3401C24.6963 11.7151 23.9775 11.9963 23.2588 12.1526C22.6338 11.4963 21.79 11.1213 20.8525 11.1213C19.04 11.1213 17.5713 12.5901 17.5713 14.4026C17.5713 14.6526 17.6025 14.9026 17.665 15.1526C14.9463 14.9963 12.5088 13.6838 10.8838 11.7151C10.6025 12.1838 10.4463 12.7463 10.4463 13.3713C10.4463 14.4963 11.0088 15.4963 11.915 16.0901C11.3838 16.0588 10.8525 15.9338 10.415 15.6838V15.7151C10.415 17.3088 11.54 18.6213 13.04 18.9338C12.79 18.9963 12.4775 19.0588 12.1963 19.0588C11.9775 19.0588 11.79 19.0276 11.5713 18.9963C11.9775 20.3088 13.1963 21.2463 14.6338 21.2776C13.5088 22.1526 12.1025 22.6838 10.5713 22.6838C10.29 22.6838 10.04 22.6526 9.79004 22.6213C11.2275 23.5588 12.9463 24.0901 14.8213 24.0901C20.8525 24.0901 24.1338 19.1213 24.1338 14.7776C24.1338 14.6213 24.1338 14.4963 24.1338 14.3401Z"
                                fill="#2AA7FF"
                            />
                        </svg>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.890137"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                fill="white"
                                fillOpacity="0.99"
                            />
                            <rect
                                x="0.890137"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                stroke="white"
                            />
                            <path
                                d="M26.1365 13.4963C25.949 12.7463 25.3552 12.1526 24.6365 11.9651C23.2927 11.5901 17.9802 11.5901 17.9802 11.5901C17.9802 11.5901 12.6365 11.5901 11.2927 11.9651C10.574 12.1526 9.98022 12.7463 9.79272 13.4963C9.41772 14.8088 9.41772 17.6213 9.41772 17.6213C9.41772 17.6213 9.41772 20.4026 9.79272 21.7463C9.98022 22.4963 10.574 23.0588 11.2927 23.2463C12.6365 23.5901 17.9802 23.5901 17.9802 23.5901C17.9802 23.5901 23.2927 23.5901 24.6365 23.2463C25.3552 23.0588 25.949 22.4963 26.1365 21.7463C26.5115 20.4026 26.5115 17.6213 26.5115 17.6213C26.5115 17.6213 26.5115 14.8088 26.1365 13.4963ZM16.2302 20.1526V15.0901L20.6677 17.6213L16.2302 20.1526Z"
                                fill="#2AA7FF"
                            />
                        </svg>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="1.09009"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                fill="white"
                                fillOpacity="0.99"
                            />
                            <rect
                                x="1.09009"
                                y="0.5"
                                width="34.2"
                                height="34.2"
                                rx="17.1"
                                stroke="white"
                            />
                            <path
                                d="M25.1802 17.5901C25.1802 13.3088 21.7114 9.84009 17.4302 9.84009C13.1489 9.84009 9.68018 13.3088 9.68018 17.5901C9.68018 20.9026 11.7114 23.6838 14.5864 24.8088C14.5239 24.2151 14.4614 23.2776 14.6177 22.5901C14.7739 21.9963 15.5239 18.7463 15.5239 18.7463C15.5239 18.7463 15.3052 18.2776 15.3052 17.5901C15.3052 16.5276 15.9302 15.7151 16.7114 15.7151C17.3677 15.7151 17.6802 16.2151 17.6802 16.8088C17.6802 17.4651 17.2427 18.4651 17.0239 19.4026C16.8677 20.1526 17.4302 20.7776 18.1802 20.7776C19.5552 20.7776 20.6177 19.3401 20.6177 17.2463C20.6177 15.3713 19.2739 14.0901 17.3989 14.0901C15.1802 14.0901 13.8989 15.7463 13.8989 17.4338C13.8989 18.1213 14.1489 18.8401 14.4614 19.2151C14.5239 19.2776 14.5239 19.3713 14.5239 19.4338C14.4614 19.6838 14.3052 20.2151 14.3052 20.3088C14.2739 20.4651 14.1802 20.4963 14.0239 20.4338C13.0552 19.9651 12.4614 18.5588 12.4614 17.4026C12.4614 14.9651 14.2427 12.7151 17.5864 12.7151C20.2739 12.7151 22.3677 14.6526 22.3677 17.2151C22.3677 19.8713 20.6802 22.0276 18.3364 22.0276C17.5552 22.0276 16.8052 21.6213 16.5552 21.1213C16.5552 21.1213 16.1802 22.6213 16.0864 22.9651C15.8989 23.6526 15.4302 24.4963 15.1177 24.9963C15.8364 25.2463 16.6177 25.3401 17.4302 25.3401C21.7114 25.3401 25.1802 21.8713 25.1802 17.5901Z"
                                fill="#2AA7FF"
                            />
                        </svg>
                    </div>
                    </div>
                    <div className="flex pl-10">
                        <div className="p-10">
                            <p className="text-white">&gt; about us</p>
                            <p className="text-white">&gt; Our Pricing</p>
                            <p className="text-white">&gt; Our Gallery</p>
                            <p className="text-white">&gt; Appointment</p>
                            <p className="text-white">&gt; Privacy Policy</p>
                        </div>
                        <div className="p-10">
                            <p className="text-white">&gt; Orthology</p>
                            <p className="text-white">&gt; Neurology</p>
                            <p className="text-white">&gt; Dental Care</p>
                            <p className="text-white">&gt; Ophthalmology</p>
                            <p className="text-white">&gt; Cardiology</p>
                        </div>
                        <div className="p-10">
                            <p className="text-white">&gt; About Us</p>
                            <p className="text-white">&gt; Our Pricing</p>
                            <p className="text-white">&gt; Our Gallery</p>
                            <p className="text-white">&gt; Appointment</p>
                            <p className="text-white">&gt; Privacy Policy</p>
                        </div>
                    </div>
                
                   
            </div>
            <div className="flex justify-center space-x-0 text-white bg-[#1B3C74] pb-8">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
        </div>
    );
}

export default Footer;
