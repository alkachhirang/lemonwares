import React, { useState } from "react";
import { Blacktick } from "./Iconimg";

const GetStarted = () => {
    const [show, setshow] = useState(true);
    const [line, setLine] = useState(true);
    return (
        <>
            <div id="ourservice" className="container max-w-[1121px] mx-auto lg:px-3 px-6">
                <div className="flex justify-center items-center flex-col" data-aos="fade-down">
                    <h2 className="text-black text-center ff_poppins font-semibold lg:text-[50px] sm:text-[40px] text-[21px] leading-[120%] lg:max-w-[650px] sm:mb-[38px] mb-[20px]">
                        Ready to get started with Lemon Wares?
                    </h2>
                    <p className="text-center text-black ff_poppins font-normal sm:text-[25px] text-[15px] leading-[100%] ">
                        Choose the package that suits you
                    </p>
                </div>
                <div className="flex sm:gap-[31px] gap-[20px] items-center justify-center sm:pt-[57px] pt-[30px] sm:pb-[71px] pb-[40px]" data-aos="fade-down">
                    <p className="text-black ff_poppins sm:text-[25px] text-[20px] leading-[100%] font-normal">
                        Monthly
                    </p>
                    <div
                        onClick={() => setshow(!show)}
                        className={`${show
                            ? "after:translate-x-0"
                            : "sm:after:translate-x-[140%] after:translate-x-[220%]"
                            } sm:w-[93px] w-[83px] cursor-pointer sm:h-[50px] h-[40px] rounded-[73px] bg-[#B00000] relative after:absolute after:bg-white sm:after:w-[30px] after:w-[20px] sm:after:h-[30px] after:h-[20px] after:rounded-[30px]  after:transition-all after:ease-in-out after:duration-500 after:top-[10px] after:bottom-[10px] after:left-[9px]`}
                    ></div>
                    <div className="flex gap-[17px] ">
                        <p className="text-black ff_poppins font-normal sm:text-[25px] text-[20px] leading-[100%] ">
                            Yearly
                        </p>
                        <button className="text-black sm:block hidden ff_poppins text-[10px] leading-[90%] font-medium py-[7px] px-[8px] rounded-[8px] bg-[#FFE87A] ">
                            20% discount
                        </button>
                    </div>
                </div>
                <div className="flex flex-row max-w-[856px] w-full mx-auto flex-wrap sm:pb-[85px] pb-[40px]">
                    <div onClick={() => setLine(true)} className="w-6/12">
                        <h3 className="text-black cursor-pointer pb-[6px] text-center leading-[133.333%] sm:text-[30px] text-[22px] ff_poppins font-semibold ">
                            Basic
                        </h3>
                        <div
                            className={`${line ? "bg-[#b00000]" : "bg-[#c4c4c4]"
                                } h-[4px] bg-[#B00000] transition-all ease-in-out duration-500`}
                        ></div>
                    </div>
                    <div onClick={() => setLine(false)} className="w-6/12">
                        <h3 className="text-black cursor-pointer pb-[6px] text-center leading-[133.333%] sm:text-[30px] text-[22px] ff_poppins font-semibold ">
                            Premium
                        </h3>
                        <div
                            className={`${line ? "" : "bg-[#b00000]"
                                } h-[4px] bg-[#C4C4C4] transition-all duration-500 ease-in-out`}
                        ></div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center lg:justify-between justify-center gap-7" data-aos="zoom-in">
                    <div className="border-[2px] lg:max-w-[299px] sm:w-[80%] md:w-[48%] w-full shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)inset] hover:bg-[#F7FAFE] cursor-pointer rounded-[15px] border-[#C4C4C4] border-solid bg-white pt-[34px] pl-[35px] pr-[29px] pb-[48px] hover:scale-[1.01] transition-all ease-linear duration-300 ">
                        <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
                            Starter
                        </p>
                        <p className="text-black ff_poppins text-xs !leading-[150%] font-normal lg:max-w-[235px] mb-[28px] ">
                            with all your customers via all conversation channels in one
                            central dashboard.
                        </p>
                        {line ? (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $2.80
                            </p>
                        ) : (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $3.80
                            </p>
                        )}
                        {show ? (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per month
                            </p>
                        ) : (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per year
                            </p>
                        )}
                        <button className="rounded-[12px] border-[2px] border-solid border-black text-black hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 ease-linear ff_poppins font-semibold text-sm !leading-[228.571%] py-[9px] sm:pl-[56px] sm:pr-[57px] px-10 whitespace-nowrap mb-[35px]">
                            Choose this Plan
                        </button>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                2GB SSD
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                10GB Bandwidth
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                15 Email Accounts
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                Unlimited Database
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                4 Subdomains
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                1 Parked Domain
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                2 Websites
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Free SSL
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Softaculous
                            </p>
                        </div>
                    </div>
                    <div className="border-[2px] lg:max-w-[299px] sm:w-[80%] md:w-[48%] cursor-pointer w-full shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)inset] hover:bg-[#F7FAFE] rounded-[15px] border-[#C4C4C4] border-solid bg-white pt-[34px] pl-[35px] pr-[29px] pb-[48px] hover:scale-[1.01] transition-all ease-linear duration-300">
                        <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
                            Standard
                        </p>
                        <p className="text-black ff_poppins text-xs !leading-[150%] font-normal lg:max-w-[235px] mb-[28px] ">
                            with all your customers via all conversation channels in one
                            central dashboard.
                        </p>
                        {line ? (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $4.20
                            </p>
                        ) : (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $5.80
                            </p>
                        )}
                        {show ? (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per month
                            </p>
                        ) : (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per year
                            </p>
                        )}
                        <button className="rounded-[12px] border-[2px] border-solid border-black hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 ease-linear text-black ff_poppins font-semibold text-sm !leading-[228.571%] py-[9px] sm:pl-[56px] sm:pr-[57px] px-10 whitespace-nowrap mb-[35px]">
                            Choose this Plan
                        </button>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                2GB SSD
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                10GB Bandwidth
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                15 Email Accounts
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                Unlimited Database
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                4 Subdomains
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                1 Parked Domain
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                2 Websites
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Free SSL
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Softaculous
                            </p>
                        </div>
                    </div>
                    <div className="border-[2px] lg:max-w-[299px] sm:w-[80%] md:w-[48%] cursor-pointer w-full shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)inset] hover:bg-[#F7FAFE] rounded-[15px] border-[#C4C4C4] border-solid bg-white pt-[34px] pl-[35px] pr-[29px] pb-[48px] hover:scale-[1.01] transition-all ease-linear duration-300">
                        <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
                            Suprem
                        </p>
                        <p className="text-black ff_poppins text-xs !leading-[150%] font-normal lg:max-w-[235px] mb-[28px] ">
                            with all your customers via all conversation channels in one
                            central dashboard.
                        </p>
                        {line ? (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $7.00
                            </p>
                        ) : (
                            <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                                $8.00
                            </p>
                        )}
                        {show ? (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per month
                            </p>
                        ) : (
                            <p className="text-black ff_poppins text-sm !leading-[100%] font-light pb-[35px]">
                                Per year
                            </p>
                        )}
                        <button className="rounded-[12px] border-[2px] border-solid border-black hover:bg-[#000000] hover:text-[#ffffff] transition-all duration-300 ease-linear text-black ff_poppins font-semibold text-sm !leading-[228.571%] py-[9px] sm:pl-[56px] sm:pr-[57px] px-10 whitespace-nowrap mb-[35px]">
                            Choose this Plan
                        </button>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                2GB SSD
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                10GB Bandwidth
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                15 Email Accounts
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-bold">
                                Unlimited Database
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                4 Subdomains
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                1 Parked Domain
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                2 Websites
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Free SSL
                            </p>
                        </div>
                        <div className="flex gap-6 pb-[15px]">
                            <Blacktick />
                            <p className="text-[#808080] ff_inter text-base !leading-[150%] font-semibold">
                                Softaculous
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetStarted;