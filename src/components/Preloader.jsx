import React from 'react';
import Typewriter from 'typewriter-effect';
import Preloaderimg from '../assets/images/web.p/preloader-img.webp';

const Preloader = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col min-h-screen bg-[#B00000]'>
                <div className='flex justify-center items-center'>
                    <img src={Preloaderimg} alt="Preloaderimg" className='max-w-[100px] w-full' />
                </div>
                <h3 className='text-white font-bold text-[20px] text-center tracking-[3px] ff_poppins pt-[5px]'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            deletespeed: true,
                            delay: 90,
                            strings: ['LEMONWARES']

                        }}
                    />
                </h3>
            </div>

        </div>
    )
}

export default Preloader
