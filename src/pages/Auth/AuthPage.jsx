import { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import useDarkSide from '../../components/useDarkSide';

export const AuthPage = (props) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

    const navigate = useNavigate()
    return(
        <div className="dark:bg-gray-800 dark:text-white min-h-screen">
  <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <button className='flex' onClick={() => navigate('/')}>
        <img className="h-8 w-auto" src="/Plus.svg" alt="Logo" />
                    <svg className="h-8 py-1.5 ml-2 w-auto dark:text-gray-300 text-gray-700" width="126" height="48" viewBox="0 0 126 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.590881 47V0.454529H9.31818H18.0455C21.6212 0.454529 24.6212 1.12119 27.0455 2.45452C29.4849 3.78786 31.3258 5.62119 32.5682 7.95452C33.8258 10.2727 34.4545 12.9091 34.4545 15.8636C34.4545 18.8485 33.8258 21.5 32.5682 23.8182C31.3106 26.1364 29.4545 27.9621 27 29.2955C24.5455 30.6136 21.5227 31.2727 17.9318 31.2727H13.9999L9.0227 24.3409H16.7955C18.8864 24.3409 20.5985 23.9773 21.9318 23.25C23.2652 22.5227 24.25 21.5227 24.8864 20.25C25.5379 18.9773 25.8636 17.5152 25.8636 15.8636C25.8636 14.2121 25.5379 12.7576 24.8864 11.5C24.25 10.2424 23.2576 9.26513 21.9091 8.56816C20.5758 7.85604 18.8561 7.49998 16.75 7.49998H9.0227V47H0.590881ZM49.642 0.454529V47H41.4148V0.454529H49.642ZM80.3523 32.0682L80.2386 12.0909H88.5795V47H80.6023V40.7955H80.2386C79.4508 42.75 78.1553 44.3485 76.3523 45.5909C74.5644 46.8333 72.3598 47.4545 69.7386 47.4545C67.4508 47.4545 65.428 46.947 63.6705 45.9318C61.928 44.9015 60.5644 43.4091 59.5795 41.4545C58.5947 39.4848 58.1023 37.1061 58.1023 34.3182V12.0909H66.3295V33.0455C66.3295 35.2576 66.9356 37.0152 68.1477 38.3182C69.3598 39.6212 70.9508 40.2727 72.9205 40.2727C74.1326 40.2727 74.8636 39.5909 76 39C77.1363 38.4091 77.7728 37.8712 78.5 36.7045C79.2425 35.5227 80.3523 33.8409 80.3523 32.0682ZM124.631 21.3182L117.131 22.1364C116.919 21.3788 116.547 20.6667 116.017 20C115.502 19.3333 114.805 18.7955 113.926 18.3864C113.047 17.9773 111.972 17.7727 110.699 17.7727C108.987 17.7727 107.547 18.1439 106.381 18.8864C105.229 19.6288 104.661 20.5909 104.676 21.7727C104.661 22.7879 105.032 23.6136 105.79 24.25C106.563 24.8864 107.835 25.4091 109.608 25.8182L115.562 27.0909C118.866 27.803 121.32 28.9318 122.926 30.4773C124.547 32.0227 125.366 34.0455 125.381 36.5455C125.366 38.7424 124.722 40.6818 123.449 42.3636C122.191 44.0303 120.441 45.3333 118.199 46.2727C115.956 47.2121 113.381 47.6818 110.472 47.6818C106.199 47.6818 102.759 46.7879 100.153 45C97.5473 43.197 95.9943 40.6894 95.4943 37.4773L103.517 36.7045C103.881 38.2803 104.653 39.4697 105.835 40.2727C107.017 41.0758 108.555 41.4773 110.449 41.4773C112.403 41.4773 113.972 41.0758 115.153 40.2727C116.35 39.4697 116.949 38.4773 116.949 37.2955C116.949 36.2955 116.563 35.4697 115.79 34.8182C115.032 34.1667 113.85 33.6667 112.244 33.3182L106.29 32.0682C102.941 31.3712 100.464 30.197 98.858 28.5455C97.2519 26.8788 96.4564 24.7727 96.4716 22.2273C96.4564 20.0758 97.0398 18.2121 98.2216 16.6364C99.4186 15.0455 101.078 13.8182 103.199 12.9545C105.335 12.0758 107.797 11.6364 110.585 11.6364C114.676 11.6364 117.896 12.5076 120.244 14.25C122.608 15.9924 124.07 18.3485 124.631 21.3182Z" fill="currentColor"/>
                    </svg>
          </button>
          <h2 className="mt-10 text-4xl text-center font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          만나서 반가워요!
          </h2>
          <p className="mt-4 text-xl text-center tracking-tight text-gray-900 dark:text-gray-100">
          아래 로그인 수단 중 하나로 계속하세요
          </p>
        </div>

        <div className="mt-10 mx-auto w-full md:max-w-sm">

            <div className='grid grid-cols-4'>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=1182357439333531688&redirect_uri=https%3A%2F%2Fmapi.pcor.me%2Foauth%2Fdiscord.php&response_type=code&scope=identify">
  <button
    className="text-white bg-[#5865F2] text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-full m-auto p-4 font-bold"
  >
    <img
            className="h-8 w-auto inline-block"
            src="/resources/images/discord.svg"
            alt="Discord"
          />
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/kakao.php?action=login">
  <button
    className="text-black bg-[#FEE500] text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-full m-auto p-4 font-bold"
  >
    <img
            className="h-8 w-auto inline-block"
            src="/resources/images/kakao.svg"
            alt="Kakao"
          />
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/google.php?action=login">
  <button
    className="text-black bg-gray-100 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-full m-auto p-4 font-bold"
  >
    <img
            className="h-8 w-auto inline-block"
            src="/resources/images/google.svg"
            alt="Google"
          />
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/twitter.php?action=login">
  <button
    className="text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-full m-auto p-4 font-bold"
  >
    <svg className="w-8 h-8 text-white inline-block" fill="currentColor" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg">
 <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
</svg>
  </button>
  </a>
            </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            
          </p>
        </div>
      </div>
 <Footer/>
        </div>
    )
}
