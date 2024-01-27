import React from 'react';
import { Whatsapp } from './Iconimg';
import Triangle1 from '../assets/images/web.p/web-triangle1.webp';
import Triangle2 from '../assets/images/web.p/web-triangle2.webp';
import Triangle3 from '../assets/images/web.p/web-triangle3.webp';

const WebsiteAwesome = () => {
    return (
        <div className='lg:pt-[106px] lg:pb-[110px] sm:py-[70px] py-[50px]'>
            <div id='contact' className='container xl:max-w-[1256px] xl:px-3 px-6 mx-auto relative' data-aos="fade-down">
                <img src={Triangle1} alt="Triangle1" className='absolute max-w-[40px] sm:max-w-[70px] w-full right-[7%] sm:right-[-1%] bottom-[8%]' />
                <img src={Triangle2} alt="Triangle2" className='absolute max-w-[40px] w-full left-[32%]' />
                <img src={Triangle3} alt="Triangle3" className='absolute max-w-[40px] w-full bottom-[20%] left-[6%] sm:left-[0]' />

                <div className='rounded-[16px] bg-[#F7FAFE] py-[65px] lg:pt-[80px] lg:pb-[88px] max-w-[1232px] px-[20px] lg:px-[0]'>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='ff_poppins text-[22px] sm:text-[35px] md:text-[44px] lg:text-[64px] font-semibold leading-[137%] text-[#2E2E2E] max-w-[1024px] text-center mb-[24px] sm:mb-[40px]'>We're here to make your website awesome.</p>
                        <button>
                            <a href='https://web.whatsapp.com/' target='blank' className='flex gap-[9px] items-center bg-[#B00000] rounded-[8px] px-[15px] py-[10px] sm:px-[18.1px] sm:pt-[12px] sm:pb-[11px] hover:shadow-[0_2px_15px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500'>
                                <Whatsapp />
                                <p className='m-0 ff_poppins text-[#FFFFFF] text-[14px] font-normal text-nowrap'>Get  in touch with us</p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WebsiteAwesome;
