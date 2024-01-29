import React from 'react';
import { useState } from 'react';
import Navlogo from '../assets/images/web.p/nav-logo.webp';
import { Phone } from './Iconimg';
import Triangle1 from '../assets/images/web.p/web-triangle1.webp';
// import Triangle2 from '../assets/images/web.p/web-triangle2.webp';
import Triangle3 from '../assets/images/web.p/web-triangle3.webp';
import Girlimg from '../assets/images/web.p/hero-girlimg.webp';


const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <ul
                className="inline-flex mb-0 list-none flex-wrap sm:pt-[60px] lg:pt-[80px] pt-[40px] flex-row after:absolute relative after:h-[1px] after:bottom-0 after:left-[1%] after:right-[1%] after:bg-[#e5e5e5] "
                role="tablist"
            >
                <li className="pb-1 relative">
                    <a
                        className={`${openTab === 1 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"
                            } text-[15px] font-semibold ff_poppins leading-normal transition-all duration-300 ease-linear`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        Hosting
                    </a>
                    <div
                        className={`${openTab === 1 ? "bg-[#b00000]" : ""
                            } absolute h-[1px] bottom-0 left-[7%] right-[10%] transition-all duration-300 ease-linear z-[2]`}
                    ></div>
                </li>
                <li className="ml-[23px] pb-1 relative">
                    <a
                        className={`${openTab === 2 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"
                            } text-[15px] font-semibold ff_poppins leading-normal transition-all duration-300 ease-linear`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        Domain
                    </a>
                    <div
                        className={`${openTab === 2 ? "bg-[#b00000]" : ""
                            } absolute h-[1px] bottom-0 left-[7%] right-[10%] transition-all duration-300 ease-linear z-[3]`}
                    ></div>
                </li>
                <li className="ml-[18px] pb-1 relative">
                    <a
                        className={`${openTab === 3 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"
                            } text-[15px] font-semibold ff_poppins leading-normal transition-all duration-300 ease-linear`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                    >
                        SEO
                    </a>
                    <div
                        className={`${openTab === 3 ? "bg-[#b00000]" : ""
                            } absolute h-[1px] bottom-0 left-[7%] right-[10%] transition-all duration-300 ease-linear z-[3]`}
                    ></div>
                </li>
                <li className="ml-[15px] pb-1 relative">
                    <a
                        className={`${openTab === 4 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"
                            } text-[15px] font-semibold ff_poppins leading-normal transition-all duration-300 ease-linear`}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(4);
                        }}
                        data-toggle="tab"
                        href="#link4"
                        role="tablist"
                    >
                        Email
                    </a>
                    <div
                        className={`${openTab === 4 ? "bg-[#b00000]" : ""
                            } absolute h-[1px] bottom-0 left-[7%] right-[10%] transition-all duration-300 ease-linear z-[3]`}
                    ></div>
                </li>
            </ul>
            <div className="relative flex flex-col">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className=" flex flex-row flex-wrap">
                        <div className="lg:w-1/2 w-full pt-[24px]" data-aos="fade-right">
                            <h1 className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[51px] lg:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[20px] lg:mb-[34px] mb-[12px] lg:text-start text-center">
                                Premium Web Hosting for Your Website
                            </h1>
                            <p className="text-[#808080] lg:text-start text-center ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[40px] lg:mb-[60px] mb-[22px] ">
                                Blazing fast web hosting for individuals and businesses of all
                                sizes backed by 24x7x365 Support.
                            </p>
                            <div className="flex sm:flex-row gap-[14px] sm:gap-[24px] lg:justify-start justify-center">
                                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                                    Create an Account
                                </button>
                                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                                    Choose your plan
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center lg:mt-0 mt-10" data-aos="fade-left">
                            <div className="relative">
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                                />
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full max-w-[72px] absolute sm:right-[-8%] right-[2%] bottom-[11%] z-[1] "
                                />
                                <img
                                    src={Triangle3}
                                    alt="Triangle3"
                                    className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                                />
                                <img
                                    src={Girlimg}
                                    alt="Girlimg"
                                    className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className=" flex flex-row flex-wrap">
                        <div className="lg:w-1/2 w-full pt-[24px]">
                            <h1 className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[51px] lg:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[20px] lg:mb-[34px] mb-[12px] lg:text-start text-center">
                                <span className="text-[#B00000]">Premium Web </span> Hosting for
                                Your Website
                            </h1>
                            <p className="text-[#808080] lg:text-start text-center ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[40px] lg:mb-[60px] mb-[22px] ">
                                Blazing fast web hosting for individuals and businesses of all
                                sizes backed by 24x7x365 Support.
                            </p>
                            <div className="flex sm:flex-row gap-[14px] sm:gap-[24px] lg:justify-start justify-center">
                                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                                    Create an Account
                                </button>
                                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                                    Choose your plan
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center lg:mt-0 mt-10">
                            <div className="relative">
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                                />
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full max-w-[72px] absolute sm:right-[-8%] right-[2%] bottom-[11%] z-[1] "
                                />
                                <img
                                    src={Triangle3}
                                    alt="Triangle3"
                                    className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                                />
                                <img
                                    src={Girlimg}
                                    alt="Girlimg"
                                    className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className=" flex flex-row flex-wrap">
                        <div className="lg:w-1/2 w-full pt-[24px]">
                            <h1 className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[51px] lg:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[20px] lg:mb-[34px] mb-[12px] lg:text-start text-center">
                                Premium Web Hosting for
                                Your Website
                            </h1>
                            <p className="text-[#808080] lg:text-start text-center ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[40px] lg:mb-[60px]  mb-[22px] ">
                                Blazing fast web hosting for individuals and businesses of all
                                sizes backed by 24x7x365 Support.
                            </p>
                            <div className="flex sm:flex-row gap-[14px] sm:gap-[24px] lg:justify-start justify-center">
                                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                                    Create an Account
                                </button>
                                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                                    Choose your plan
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center lg:mt-0 mt-10">
                            <div className="relative">
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                                />
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full max-w-[72px] absolute sm:right-[-8%] right-[2%] bottom-[11%] z-[1] "
                                />
                                <img
                                    src={Triangle3}
                                    alt="Triangle3"
                                    className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                                />
                                <img
                                    src={Girlimg}
                                    alt="Girlimg"
                                    className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <div className=" flex flex-row flex-wrap">
                        <div className="lg:w-1/2 w-full pt-[24px]">
                            <h1 className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[51px] lg:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[20px] lg:mb-[34px] mb-[12px] lg:text-start text-center">
                                Premium Web Hosting for{" "}
                                <span className="text-[#B00000]">Your Website</span>
                            </h1>
                            <p className="text-[#808080] lg:text-start text-center ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[40px] lg:mb-[60px] mb-[22px] ">
                                Blazing fast web hosting for individuals and businesses of all
                                sizes backed by 24x7x365 Support.
                            </p>
                            <div className="flex sm:flex-row gap-[14px] sm:gap-[24px] lg:justify-start justify-center">
                                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                                    Create an Account
                                </button>
                                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                                    Choose your plan
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center lg:mt-0 mt-10">
                            <div className="relative">
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                                />
                                <img
                                    src={Triangle1}
                                    alt="Triangle1"
                                    className="w-full max-w-[72px] absolute sm:right-[-8%] right-[2%] bottom-[11%] z-[1] "
                                />
                                <img
                                    src={Triangle3}
                                    alt="Triangle3"
                                    className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                                />
                                <img
                                    src={Girlimg}
                                    alt="Girlimg"
                                    className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <div>
            <div className='container xl:max-w-[1240px] mx-auto xl:px-3 px-6'>
                <div className='flex justify-between items-center relative z-[4] pt-[25px] md:pt-[41px]'>
                    <div className='flex items-center gap-[90px] xl:gap-[135px]'>
                        <div className='flex gap-[55px] xl:gap-[65px] items-center'>
                            <img src={Navlogo} alt="Navlogo" className='sm:max-w-[90px] max-w-[78px] w-full cursor-pointer' />
                            <p><a href='#ourservice' onClick={() => setNav(!nav)} className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] cursor-pointer text-nowrap hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:block hidden'>Our Services</a></p>
                        </div>
                        <ul className={`${nav ? "left-[-100%]" : "left-0 bg-[#ffffff]"} flex items-center gap-[33px] z-[11] flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}>
                            <li ><a onClick={() => setNav(!nav)} href='#ourservice' className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:hidden block'>Our Services</a></li>
                            <li onClick={() => setNav(!nav)}><a href='#about' className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>About </a></li>
                            <li onClick={() => setNav(!nav)}><a href='#Blog&News' className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-4px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-nowrap'>Blog&News</a></li>
                            <li onClick={() => setNav(!nav)}><a href='#contact' className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-3px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Contact </a></li>
                            <li onClick={() => setNav(!nav)}><a href='#account' className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:hidden'>Account</a></li>
                            <li className='flex items-center gap-[6px] lg:gap-[11px] sm:hidden'>
                                <Phone />
                                <a href='' className='m-0 ff_poppins font-semibold text-[16px] text-[#000000] leading-[93.75%]'>+2349067322844</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-[20px] lg:gap-[30px] lg:pr-[60px]'>
                        <div className='flex items-center gap-[31px]'>
                            <p><a href='#account' onClick={() => setNav(!nav)} className='m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-4px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:block hidden'>Account</a></p>
                            <div className='bg-[#DAd8d8] w-[1px] h-[19px] lg:block hidden'></div>
                        </div>
                        <a href='tel:1234567890' className='sm:flex items-center gap-[6px] lg:gap-[11px] cursor-pointer hidden'>
                            <Phone />
                            <p className='m-0 ff_poppins font-semibold text-[16px] text-[#000000] leading-[93.75%]'>+2349067322844</p>
                        </a>
                        <div onClick={() => setNav(!nav)} className='lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[13] flex justify-between flex-col cursor-pointer'>
                            <span className={`${nav ? '' : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            <span className={`${nav ? '' : "hidden"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        </div>
                    </div>
                </div>
            </div >
            <div
                id="account"
                className="container mx-auto xl:max-w-[1239px] xl:px-3 px-6"
            >
                <Tabs />
            </div>
        </div>
    )
}


export default Header;
