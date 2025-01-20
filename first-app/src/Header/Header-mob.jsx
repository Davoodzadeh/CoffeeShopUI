// this Header is for 1024px size less systems
import { useEffect, useState, useRef } from "react";
import './Header.css';
export default function MobileHeader() {
  const [DarkMode, setDarkMode] = useState(true);
  const [ShowMenu, setShowMenu] = useState(false);
  const [CartMenu, setCartMenu] = useState(false);

  useEffect(() => {

    if (DarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }


  }, [DarkMode]);

  const handleSwitchChange = () => {
    setDarkMode(!DarkMode);
  };


  const toggleMenu = () => {
    setShowMenu(!ShowMenu);
  };
  const closeMenu = () => {

    setShowMenu(false);
  }
  const toggleCart = () => {
    setCartMenu(!CartMenu);
  };
  const closeCart = () => {

    setCartMenu(false);
  }



  return (
    <header className=" shrink-0 flex   items-center  pr-6 sm:pr-8 md:pr-5  pl-5 py-5 fixed -top-2 justify-between bg-white dark:bg-brown-950 w-full  h-32 sm:h-48 z-50 ">
      {/* Hum menu */}
      <div className="flex items-center   " >
        <div className="  flex items-center cursor-pointer gap-2 text-lg text-brown-950 dark:text-orange-200 " onClick={toggleMenu}>
          <svg className="w-7 sm:w-10 h-7 sm:h-10 cursor-pointer ">
            <use xlinkHref="#Hum-Menu"></use>
          </svg>
          <span className="hidden md:flex">منو</span>
        </div>

        {/* Sub-Menu */}

        <div className={` bg-white/50 dark:bg-brown-950/50 overflow-y-auto  backdrop-blur-sm  min-h-screen absolute top-0 bottom-0 right-0 transition-all duration-500 overflow-x-hidden   ${ShowMenu ? 'w-full child:transition-opacity child: child:duration-[3s] child:ease-in-out  child:opacity-100 ' : 'w-0    child:opacity-0'}`} >


          <div className="flex flex-col gap-5 sm:gap-16   ">
            <div className="flex items-center justify-between px-5 min-h-28 sm:min-h-44 ">

              {/* Home */}
              <div className="flex  ">
                <a href="#" className="hidden sm:flex items-center text-brown-950 dark:text-orange-300 font-dana-bold gap-2 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                  <svg className="w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 fill-brown-950 dark:fill-orange-300 ">
                    <use href="#Logo"></use>
                  </svg>
                  صفحه اصلی</a>
              </div>
              {/* Exit the menu */}
              <div onClick={closeMenu} className="flex cursor-pointer  ">
                <a className="flex items-center text-brown-950 dark:text-orange-300 font-dana-bold gap-1 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                  <svg className=" w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 fill-brown-950 dark:fill-orange-300 ">
                    <use href="#Exit"></use>
                  </svg>
                  <span className="hidden sm:flex"> بازگشت به صفحه </span>
                </a>
              </div>
            </div>

            {/* fr-subMenu */}
            <div className="flex flex-col  gap-8 sm:gap-40 ">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-around  gap-38   overflow-hidden ">
                {/* Shop */}
                <div className="flex flex-col  rounded-3xl bg-transparent sm:bg-brown-950/20 dark:bg-brown-950/5 backdrop-blur-sm  ">
                  <a className="flex items-center sm:items-end  justify-center sm:justify-normal text-orange-300  border-b-2 border-orange-300 sm:border-white dark:border-brown-920 p-4  font-dana-bold gap-2  text-lg md:text-xl tracking-tighter md:tracking-normal">
                    <svg className="w-7 md:w-8  h-7 md:h-8 fill-orange-300  ">
                      <use href="#Shop"></use>
                    </svg>
                    فروشگاه</a>

                  <ul className="flex flex-col  items-center  gap-2  tracking-tighter md:tracking-normal    text-brown-950 dark:text-white text-base/8 child-hover:dark:list-disc list-none sm:child-hover:dark:list-inside w-full child:py-2 sm:child:py-0  not-last:child:border-b-2 child:border-orange-300 child:dark:border-brown-920 sm:child:border-none child:text-center sm:child:text-right child:w-full sm:child:w-44 md:child:w-48  sm:child:pr-8 child-hover:text-orange-300 child-hover:dark:text-orange-300  ">
                    <li className="mt-auto sm:mt-5 "><a href="#">قهوه ویژه
                    </a>
                    </li>
                    <li ><a href="#">ویژه در سطح جهانی
                    </a> </li>
                    <li > < a href="#"> قهوه درجه یک
                    </a>
                    </li>
                    <li ><a href="#">
                      ترکیبات تجاری
                    </a>
                    </li>
                    <li ><a href="">
                      کپسول قهوه
                    </a>
                    </li>
                    <li className=" mb-auto sm:mb-5 " href="#"><a href="#">

                      قهوه زینو برزیلی
                    </a>
                    </li>
                  </ul>



                </div>
                {/* Dictionary */}
                <div className="flex flex-row sm:flex-col  gap-0 sm:gap-44">
                  <a href="#" className="flex items-center justify-center w-full sm:w-40  text-white dark:text-orange-300 transition-all border-orange-300  dark:border-brown-920 border-2 bg-brown-950/20 hover:bg-orange-300 dark:bg-brown-800/5 hover:dark:bg-brown-900/30 backdrop-blur-sm  p-5  rounded-bl-full sm:rounded-full   font-dana-bold gap-2 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                    <svg className="w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 stroke-white dark:stroke-orange-300 ">
                      <use href="#dic"></use>
                    </svg>
                    دیکشنری</a>
                  <a href="#" className="flex items-center justify-center w-full sm:w-40  text-white dark:text-orange-300 transition-all border-orange-300  dark:border-brown-920 border-2 bg-brown-950/20 hover:bg-orange-300 dark:bg-brown-800/5 hover:dark:bg-brown-900/30 backdrop-blur-sm  p-5 rounded-br-full sm:rounded-full  font-dana-bold gap-2 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                    <svg className="w-4 sm:w-6 md:w-7  h-4 sm:h-6 md:h-7 stroke-white dark:stroke-orange-300">
                      <use href="#blog"></use>
                    </svg>
                    بلاگ</a>
                </div>
                {/* About-Us */}
                <div className="flex flex-row sm:flex-col sm:gap-44">
                  <a href="#" className="flex items-center justify-center w-full sm:w-40  text-white dark:text-orange-300 border-orange-300  dark:border-brown-920 border-2 transition-all bg-brown-950/20 hover:bg-orange-300 dark:bg-brown-800/5 hover:dark:bg-brown-900/30 backdrop-blur-sm  p-5 rounded-tl-full sm:rounded-full  font-dana-bold gap-2 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                    <svg className="w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 fill-white dark:fill-orange-300 ">
                      <use href="#About-Us"></use>
                    </svg>
                    درباره ما</a>
                  <a href="#" className="flex items-center justify-center w-full sm:w-40  text-white dark:text-orange-300 transition-all border-orange-300  dark:border-brown-920 border-2 bg-brown-950/20 hover:bg-orange-300 dark:bg-brown-800/5 hover:dark:bg-brown-900/30 backdrop-blur-sm p-5 rounded-tr-full sm:rounded-full   font-dana-bold gap-2 text-base sm:text-lg md:text-[17px] tracking-tighter md:tracking-normal">
                    <svg className="w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 stroke-white dark:stroke-orange-300 stroke-2">
                      <use href="#call"></use>
                    </svg>
                    تماس با ما</a>
                </div>

              </div>
              {/* Cart & Theme Toggle & Login */}
              <div className="flex flex-row justify-center   gap-20   overflow-hidden">
                {/* switch btn */}
                <div className="hidden sm:flex  cursor-pointer items-center  flex-row">
                  <label className="theme-toggle flex gap-2 text-brown-950 dark:text-orange-300 text-lg md:text-xl tracking-tighter md:tracking-normal font-dana-bold items-center flex-row justify-center " title="Toggle theme">
                    <input type="checkbox" onChange={handleSwitchChange} checked={DarkMode} />
                    <svg id="Moon-Sun" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="theme-toggle__within fill-brown-950 dark:fill-orange-300  w-7 md:w-8 h-7 md:h-8" viewBox="0 0 32 32" fill="currentColor"><clipPath id="theme-toggle__within__clip"> <path d="M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16" /> </clipPath> <g clip-path="url(#theme-toggle__within__clip)"> <path d="M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z" /> </g> <path class="theme-toggle__within__circle" d="M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z" /> <path class="theme-toggle__within__inner" d="M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z" /> </svg>
                    <span>روشن | تاریک </span>
                  </label>

                </div>
                {/* login */}
                <div className="flex flex-col z-30 ">
                  <a className="flex items-center  text-brown-950 dark:text-orange-300 font-dana-bold gap-2 text-lg md:text-xl tracking-tighter md:tracking-normal ">
                    <svg className="w-7 md:w-8 h-7 md:h-8 stroke-brown-950 dark:stroke-orange-300">
                      <use href="#Login"></use>
                    </svg>
                    ورود | ثبت نام</a>
                </div>
                {/*cart */}
                <div className="flex flex-col ">
                  <a className="flex items-center  text-brown-950 dark:text-orange-300 font-dana-bold gap-2 text-lg md:text-xl tracking-tighter md:tracking-normal">
                    <svg className="w-7 md:w-8 h-7 md:h-8 stroke-brown-950 dark:stroke-orange-300 ">
                      <use href="#Cart"></use>
                    </svg>
                    سبد خرید</a>
                </div>



              </div>
            </div>
          </div>


        </div>


      </div>
      {/* Logo */}
      <div className="flex relative pr-6 sm:pr-5 z-30 "  >
        <svg className="w-48 sm:w-64 h-14 sm:h-28  fill-orange-300 ">
          <use href="#Logo-Type"></use>
        </svg>


      </div>
      {/* Cart & Switch btn */}
      <div className="flex items-center gap-4">

        {/* CartMenu */}
        <div className="flex items-center ">
          {/* Cart Icon */}
          <div className="flex items-center cursor-pointer " onClick={toggleCart}>
            <svg className="w-7 sm:w-10 h-7 sm:h-10 ">
              <use xlinkHref="#Mob-Cart" />
            </svg>
          </div>
          {/* Overlay */}
          <div className={` fixed inset-0 w-full min-h-screen bg-brown-950/20 ${CartMenu ? 'hidden sm:flex' : 'hidden'}`}></div>
          {/* sub-CartMenu */}
          <div className={`bg-white/50 sm:bg-white/70 overflow-y-auto dark:bg-brown-950/50 backdrop-blur-sm  min-h-screen absolute top-0 bottom-0 left-0 transition-all duration-500 overflow-x-hidden z-20 sm:z-40 ${CartMenu ? 'w-full sm:w-1/2 child:transition-opacity child: child:duration-[3s] child:ease-in-out  child:opacity-100 ' : 'w-0    child:opacity-0'} `}>

            <div className="flex flex-col">
              <div className="flex flex-row justify-between px-5">
                <div className="flex items-center  min-h-28 sm:min-h-44   ">
                  <div onClick={closeCart} className="flex cursor-pointer   ">
                    <a className="flex items-center text-brown-950 dark:text-orange-300 font-dana-bold gap-1 text-base sm:text-lg md:text-xl tracking-tighter md:tracking-normal">
                      <svg className=" w-5 sm:w-7 md:w-8  h-5 sm:h-7 md:h-8 fill-brown-950 dark:fill-orange-300 ">
                        <use href="#Exit"></use>
                      </svg>
                      <span className="hidden sm:flex"> بازگشت به صفحه </span>
                    </a>
                  </div>
                </div>
                <span className="flex items-center font-dana-bold tracking-tighter md:tracking-normal text-base sm:text-lg md:text-xl  text-brown-950 dark:text-orange-300">سبدخرید</span>
              </div>
              {/* Cart Body (product) */}
              <div className="flex flex-col text-brown-950 dark:text-white gap-y-5 overflow-y-auto max-h-[60vh] [&::-webkit-scrollbar]:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-200">
                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p2.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p1.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p3.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p4.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div> <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p3.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div> <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p3.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">
                        ۱۷۵,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* Cart Footer */}
              <div className="w-full h-px bg-orange-300 dark:bg-white my-5"></div>

              <div className="flex flex-row items-center justify-between px-5   tracking-tighter">
                <span className="font-dana-light text-l text-brown-950 dark:text-white">مبلغ قابل پرداخت</span>
                <div className="flex gap-1 items-baseline tracking-wide font-dana-bold text-brown-950 dark:text-white">

                  ۳۵۰,۰۰۰<span className="font-dana-light text-sm"> تومان</span>
                </div>
              </div>



              <button className="flex items-center p-5 justify-center fixed bg-teal-600  w-full bottom-0   text-white dana tracking-tighter ">ثبت سفارش</button>
            </div>
          </div>


        </div>
        <label className="theme-toggle " title="Toggle theme">
          <input type="checkbox" onChange={handleSwitchChange} checked={DarkMode} />
          <svg id="Moon-Sun" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="theme-toggle__within fill-brown-950 dark:fill-orange-200 w-6 sm:w-9 h-6 sm:h-9" viewBox="0 0 32 32" fill="currentColor"><clipPath id="theme-toggle__within__clip"> <path d="M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16" /> </clipPath> <g clip-path="url(#theme-toggle__within__clip)"> <path d="M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z" /> </g> <path class="theme-toggle__within__circle" d="M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z" /> <path class="theme-toggle__within__inner" d="M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z" /> </svg>

        </label>
      </div>

    </header>






  )




}