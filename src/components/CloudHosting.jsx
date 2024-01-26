import React from "react";
import cloudimg1 from "../assets/images/web.p/Cpanel.webp";
import cloudimg2 from "../assets/images/web.p/securedImg.webp";
import cloudimg3 from "../assets/images/web.p/litespeed.webp";
import cloudimg4 from "../assets/images/web.p/SoftImg.webp";
import cloudimg5 from "../assets/images/web.p/WordPressImg.webp";
import cloudimg6 from "../assets/images/web.p/CloudFlareImg.webp";
import uptime from "../assets/images/web.p/UptimeImg.webp";
import BlazingImg from "../assets/images/web.p/BlazingImg.webp";
import Certificates from "../assets/images/web.p/CertificatesImg.webp";
import Friendly from "../assets/images/web.p/FriendlySupport.webp";

const CloudHosting = () => {
    const Trueweb = [
        {
            Image: uptime,
            heading: "99.9% Uptime",
            content:
                "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
        },
        {
            Image: BlazingImg,
            heading: "Blazing Fast Web Hosting",
            content:
                "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
        },
        {
            Image: Certificates,
            heading: "Free SSL Certificates",
            content:
                "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
        },
        {
            Image: Friendly,
            heading: "24x7 Friendly Support",
            content:
                "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
        },
    ];
    return (
        <>
            <div className="lg:pt-[79px] pt-[60px] lg:pb-[133px] sm:pb-[60px] pb-[50px]">
                <div id="about" className="container xl:max-w-[1308px] lg:px-3 px-6 mx-auto">
                <div className="flex flex-row flex-wrap lg:pb-[100px] sm:pb-[70px] pb-[50px]">
                        <div className="lg:w-6/12 w-full" data-aos="fade-right">
                        <h2 className="text-[#18191F] ff_inter md:text-[42px] lg:text-[36px] xl:text-[48px] text-[28px] font-extrabold leading-[133.333%] mb-[8px] sm:mb-[18px] lg:text-start text-center">
                            True Cloud Web Hosting
                        </h2>
                            <p className="lg:max-w-[573px] ff_inter text-[16px] sm:text-lg font-normal !leading-[177.778%] text-[#18191F] lg:text-start text-center">
                            True Cloud Web Hosting All of the hosting packages we offer are
                            deployed instantly on our SSD powered cloud. We don’t use
                            dedicated servers that operate on single pieces of hardware. Our
                            entire infrastructure is built to be reliable, secure, and
                            scalable.
                        </p>
                    </div>
                        <div className="lg:w-6/12 w-full pt-7 lg:pt-0" data-aos="fade-left">
                        <div className="flex flex-row items-center flex-wrap">
                            <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg1}
                                        alt="cloudimg1"
                                    className="w-full sm:h-[30px] h-[20px] sm:max-w-[140.714px] max-w-[120px] "
                                />
                            </div>
                                <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg2}
                                        alt="cloudimg2"
                                    className="w-full sm:h-[50px] h-[40px] sm:max-w-[125.424px] max-w-[120px]"
                                />
                            </div>
                                <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg3}
                                        alt="cloudimg3"
                                    className="w-full sm:h-[53px] h-[43px] sm:max-w-[125px] max-w-[120px]"
                                />
                            </div>
                                <div className="sm:w-4/12 w-6/12 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg4}
                                        alt="cloudimg4"
                                    className="w-full sm:h-[92px] h-[82px] sm:max-w-[172px] max-w-[120px]"
                                />
                            </div>
                                <div className="sm:w-4/12 w-6/12 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg5}
                                        alt="cloudimg5"
                                    className="w-full sm:h-[56px] h-[46px] sm:max-w-[168px] max-w-[120px]"
                                />
                            </div>
                                <div className="sm:w-4/12 w-6/12 flex lg:justify-end justify-center">
                                <img
                                        src={cloudimg6}
                                        alt="cloudimg6"
                                    className="w-full sm:h-[47px] h-[37px] sm:max-w-[143px] max-w-[120px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-row xl:justify-between sm:gap-[10%] xl:gap-[0] flex-wrap" data-aos="zoom-in-up">
                    {Trueweb.map((a, index) => (
                        <div
                            className="xl:w-[20.2%] lg:w-[45%] sm:w-[45%] cursor-pointer w-full mb-8 xl:mb-0 flex justify-center flex-col items-center"
                            key={index}
                        >
                            <img
                                src={a.Image}
                                alt="image"
                                className="w-full max-w-[100px] "
                            />
                            <h3 className="mt-3 text-black text-center ff_poppins text-[20px] font-bold">
                                {a.heading}
                            </h3>
                            <p className="mt-1 text-black text-[12px] font-light text-center ff_poppins xl:max-w-[252px]">
                                {a.content}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
};

export default CloudHosting;
