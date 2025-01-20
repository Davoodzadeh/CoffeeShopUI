import { useEffect, useState } from "react";
import './Header.css';
export default function Header() {
  let [DarkMode, setDarkMode] = useState(true);

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


  return (
    <header className="flex items-center justify-between w-11/12 bg-brown-950 fixed top-9 backdrop-blur-sm bg-opacity-50 px-10 py-5 rounded-3xl z-50 ">
      {/* Logo & Menu */}
      <nav className="flex items-center h-14">
        <div className="flex flex-row gap-6 xl:gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./images/app-logo.png" alt="Golden Coffee" />
          </div>
          {/* Menu */}
          <div className="flex gap-4 xl:gap-5">
            <div className="flex items-center text-xl text-orange-200 tracking-tighter xl:tracking-normal ">
              <a href="#">صفحه اصلی</a>
            </div>
            <ul className="flex gap-4 xl:gap-5 font-dana-light text-xl h-full text-gray-200 child:leading-[56px] child-hover:text-orange-50 tracking-tighter xl:tracking-normal">
              <li className="relative group ">
                {/* has sub */}
                <a href="#"> فروشگاه </a>
                {/* submenu */}
                <div className="flex flex-col right-0 top-12 absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in delay-150 bg-white dark:bg-brown-950 dark:text-white text-zinc-950 text-base/8 border-t-[3px] border-t-orange-300 rounded-l-2xl rounded-br-2xl rounded-tr-sm shadow-normal child:w-44 child:pr-5 child-hover:transition-colors child-hover:text-orange-300 group-hover:translate-y-2 ">
                  <a className="pt-5 rounded-2xl" href="#">قهوه ویژه</a>
                  <a href="#">ویژه در سطح جهانی</a>
                  <a href="#">قهوه درجه یک</a>
                  <a href="#">ترکیبات تجاری</a>
                  <a href="#">کپسول قهوه</a>
                  <a className="pb-5 rounded-2xl" href="#">قهوه زینو برزیلی</a>
                </div>
              </li>
              <li>
                <a href="#"> دیکشنری</a>
              </li>
              <li>
                <a href="#"> بلاگ</a>
              </li>
              <li>
                <a href="#"> درباره ما</a>
              </li>
              <li>
                <a href="#"> تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Cart & Theme Toggle & Login */}
      <div className="flex items-center gap-7 xl:gap-10  ">
        {/* Cart & Switch btn */}
        <div className="flex items-center gap-3">
          <div className="flex items-center relative  group ">
            <svg className="w-10 h-10 cursor-pointer stroke-orange-200">
              <use xlinkHref="#Cart"></use>
            </svg>
            {/* Cart Box */}
            <div className="flex flex-col w-80 lx:w-96 overflow-hidden gap-2 top-12 left-0 p-5 absolute opacity-0  invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out delay-300 bg-white dark:bg-brown-950 dark:text-white text-zinc-950  border-t-[3px] border-t-orange-300 rounded-b-2xl rounded-tr-2xl rounded-tl-sm shadow-normal  ">
              {/* cart Header */}
              <div className="flex  justify-between text-xs">
                <span className="font-dana-light text-gray-400 tracking-tighter ">۱ مورد</span>
                <div className="flex items-center gap-1">

                  <a href='#' className="text-orange-200">
                    مشاهده سبد خرید

                  </a>


                </div>

              </div>
              {/* Cart Body (product) */}
              <div className="flex flex-col gap-y-5 overflow-y-auto max-h-[136px] [&::-webkit-scrollbar]:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-200 ">
                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p2.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1 ">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">۱۷۵,۰۰۰
                        <span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p1.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1 ">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">۱۷۵,۰۰۰
                        <span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img className="w-28 h-28" src="./images/products/p3.png" alt="" />
                  <div className="flex flex-col w-full gap-5">
                    <h4 className="font-dana">قهوه اسپرسو بن مانو مدل پریسکا ۲۵۰ گرمی</h4>
                    <div className="flex flex-col gap-1 ">
                      <span className="text-xs tracking-tighter text-teal-600">۱۴,۵۰۰ تومان تخفیف</span>
                      <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">۱۷۵,۰۰۰
                        <span className="font-dana-light text-sm"> تومان</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* Cart Footer */}
              <div className="w-full h-px bg-gray-400 my-5"></div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1 tracking-tighter">
                  <span className="font-dana-light text-xs text-gray-400">مبلغ قابل پرداخت</span>
                  <div className="flex gap-1 items-baseline tracking-wide font-dana-bold">۳۵۰,۰۰۰
                    <span className="font-dana-light text-sm"> تومان</span>
                  </div>
                </div>
                <button className="bg-teal-600 py-3 px-5 rounded-xl text-white dana tracking-tighter ">ثبت سفارش</button>

              </div>

            </div>
          </div>
          <div className="flex items-center">
            {/* <button onClick={tgTheme} >
           
            <svg class=" w-9 h-9 hidden dark:inline-block">
                            <use xlinkHref="#Moon"></use>
                        </svg>
                        <svg class="  w-9 h-9 inline-block dark:hidden ">
              <use xlinkHref="#Sun"  ></use>   
              </svg>
            </button> */}

            <label class="theme-toggle " title="Toggle theme">
              <input type="checkbox" onChange={handleSwitchChange} checked={DarkMode} />
              <svg id="Moon-Sun" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="theme-toggle__within fill-orange-200 w-9 h-9" viewBox="0 0 32 32" fill="currentColor"><clipPath id="theme-toggle__within__clip"> <path d="M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16" /> </clipPath> <g clip-path="url(#theme-toggle__within__clip)"> <path d="M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z" /> </g> <path class="theme-toggle__within__circle" d="M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z" /> <path class="theme-toggle__within__inner" d="M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z" /> </svg>

            </label>
          </div>
        </div>
        {/* Login */}
        <div className="flex items-center gap-7 xl:gap-10 text-xl font-dana-light text-orange-200 before:flex before:h-14 before:w-px before:bg-gray-400 before:text-3xl tracking-tighter xl:tracking-normal">
          <a className="flex items-center gap-2" href="#">
            <svg className="w-8 h-8 stroke-orange-200 ">
              <use xlinkHref="#Login"></use>
            </svg>
            ورود | ثبت نام
          </a>
        </div>
      </div>
    </header>

  );
}