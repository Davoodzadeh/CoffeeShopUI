import React from 'react';
import './Footer.css';

export default function Footer() {


    return (
        <footer className='w-full relative  lg:bg-brown-950 bg-white dark:bg-brown-950  '>
            {/* Curve */}
            <svg className=' hidden md:block rotate-180 text-gray-100 dark:text-brown-920 w-[100px] h-[22px] absolute left-0 right-0 top-0 mx-auto ' >
                <use href='#curve'></use>
            </svg>
            {/* button */}
            <div className="hidden md:flex items-center justify-center w-7 h-7 border border-orange-300 rounded-full absolute left-0 right-0 -top-3 mx-auto ">
                <svg className='w-4 h-4 text-brown-950 rotate-180 dark:text-gray-100'>
                    <use href='#chevron-down'></use>
                </svg>
            </div>
            {/* content */}
            <div className="footer-content flex flex-col gap-8   sm:w-[97%] lg:w-[95%] mx-auto text-gray-300 px-4 md:px-0">
                <div className="flex justify-center lg:justify-between flex-wrap items-center mt-20 gap-y-10">
                    {/* About Us */}
                    <div className="flex flex-col  gap-2 ">
                        {/* Logo */}
                        <div className="flex items-center justify-center lg:justify-start pl-20 lg:pl-0 gap-4">
                            <svg className='w-16 h-16  fill-orange-300'>
                                <use href='#Logo'></use>
                            </svg>
                            <svg className='w-40 h-20  fill-orange-300'>
                                <use href='#Logo-Type'></use>
                            </svg>
                        </div>
                        {/* Detail */}
                        <p className=' xl:max-w-[550px] font-dana-light leading-loose text-lg '>
                            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                        </p>
                    </div>
                    {/* Policy & MOre detail */}
                    <div className="grid grid-cols-2 w-full   lg:w-auto  lg:gap-x-14 ">
                        {/* Policy */}
                        <div className="flex flex-col items-center gap-4">
                            <h4 className=' font-dana-bold text-xl ml-5' >شرایط و ضوابط</h4>
                            <div className="flex flex-col gap-4">
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    حریم خصوصی
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    شرایط استفاده
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    پرسش های متداول
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    ضمانت نامه ها
                                </a>
                            </div>

                        </div>
                        {/* More Detail */}
                        <div className="flex flex-col items-center gap-4">
                            <h4 className=' font-dana-bold text-xl ml-5' >
                                اطلاعات بیشتر
                            </h4>
                            <div className="flex flex-col gap-4">
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    عودت کالا
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    ثبت سفارش
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    فرصت های شغلی
                                </a>
                                <a href="#" className='flex items-center gap-2 group hover:text-orange-300 transition-all'>
                                    <span class="inline-block w-2 h-1 bg-white rounded-full group-hover:bg-orange-300 "></span>
                                    ارتباط با ما
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* contact Us */}
                    <div className="inline-flex flex-col gap-4">
                        <h4 className=' font-dana-bold text-xl' >
                            تماس با ما
                        </h4>
                        {/* Email & Phone & social Media */}
                        <div className="flex flex-col gap-4 ">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <svg className='w-6 h-6'>
                                        <use href='#Map'></use>
                                    </svg>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                    </p>
                                </div>
                                <div className="flex gap-8 ">
                                    <a href="mailto:e80.ermia@gmail.com" className='flex gap-4 '>
                                        <svg className='w-6 h-6 stroke-orange-300'>
                                            <use href='#Mail'></use>
                                        </svg>
                                        <p className='text-orange-300'>
                                        e80.ermia@gmail.com
                                        </p>
                                    </a>
                                    <a href="tel:09981106611" className='flex gap-4 '>
                                        <svg className='w-6 h-6 '>
                                            <use href='#Phone'></use>
                                        </svg>
                                        <p className=''>
                                        ۰۹۹۸۱۱۰۶۶۱۱
                                        </p>
                                    </a>
                                </div>
                                
                            </div>
                            {/* Social Media */}
                            <div className="flex items-center justify-center md:justify-start gap-5">
                                <a href='#' className=' '>
                                <svg className='w-8 h-8 fill-white hover:fill-orange-300 transition-all'>
                                        <use href='#Insta'></use>
                                    </svg>
                                </a>
                                <a href='#'>
                                <svg className='w-8 h-8 fill-white hover:fill-orange-300 transition-all'>
                                        <use href='#Telegram'></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                {/* Copyright */}
                <div className="block text-center mb-4  ">
                .Copyright © 2023 Golden Coffee. All rights reserved
                </div>
            </div>

        </footer>


    )
}
