import React from 'react';
import { Heart } from './Iconimg';
import Footerlogo from '../assets/images/web.p/footer-logo.webp';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#B00000] md:pt-[64px] md:pb-[80px] py-[50px]'>
                <div className='container xl:max-w-[1296px] lg:px-3 px-6 mx-auto'>
                    <div className='flex flex-wrap flex-row mb-[40px] md:mb-[70px] lg:mb-[104px]'>
                        <div className='lg:w-4/12 w-full'>
                            <img src={Footerlogo} alt="Footerlogo" className='max-w-[120px] w-full cursor-pointer' />
                            <p className='ff_inter font-normal text-[16px] text-[#E6E6E6] lg:max-w-[296px] leading-[200%] m-0 mt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        </div>
                        <div className='lg:w-8/12 w-full pt-[40px] lg:pt-[0]'>
                            <div className='flex flex-row flex-wrap'>
                                <div className='md:w-3/12 w-1/2 flex lg:justify-center'>
                                    <ul>
                                        <li className='text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] mb-[24px]'>Service</li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Domain</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Shared Hosting</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Cloud Hosting</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Private Hosting</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-3/12 w-1/2 flex lg:justify-end md:justify-center'>
                                    <ul>
                                        <li className='text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] mb-[24px]'>Hosting</li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Cheap Hosting</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Hosting Wordpress</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Email Hosting</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Hosting Unlimited</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-3/12 w-1/2 flex lg:justify-end md:justify-center'>
                                    <ul>
                                        <li className='text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] mb-[24px] pt-[14px] md:pt-[0]'>Company</li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>About</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Career</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-3/12 w-1/2 flex lg:justify-end md:justify-center'>
                                    <ul>
                                        <li className='text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] mb-[24px] pt-[14px] md:pt-[0]'>Help</li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px]] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>FAQ</a></li>
                                        <li><a href='' className='ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] mb-[16px] md:mb-[24px] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Help support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <p className='ff_inter text-[16px] leading-[200%] flex items-center font-normal text-[#ffffff]'>Built by Jeremiah with <span className='m-2'> <Heart /></span>  in Lagos. Copyright 2021</p>
                </div>

            </div>

        </div>
    )
}

export default Footer;
