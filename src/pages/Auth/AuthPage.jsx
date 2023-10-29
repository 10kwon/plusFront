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
        <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Plus ID로 로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <div>
            <a href="#">
  <button
    className="w-full text-white bg-gray-900 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
<img src="/resources/images/qloat.png" alt="Qloat" className="h-6 w-auto text-white inline-block mr-2"/>  Qloat으로 로그인하기 <span className="inline-flex items-center rounded-xl px-2 ml-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 ring-1 ring-inset ring-blue-700/10">
        예정
      </span>
  </button>
  </a>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=1028652743440736317&redirect_uri=https%3A%2F%2Fmapi.pcor.me%2Foauth%2Fdiscord.php&response_type=code&scope=identify">
  <button
    className="w-full text-white bg-indigo-500 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    <img
            className="h-6 w-auto inline-block mr-2"
            src="/resources/images/discord.svg"
            alt="Discord"
          /> Discord로 로그인하기
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/kakao.php?action=login">
  <button
    className="w-full text-black bg-[#FEE500] text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    <img
            className="h-6 w-auto inline-block mr-2"
            src="/resources/images/kakao.svg"
            alt="Kakao"
          /> 카카오로 로그인하기
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/google.php?action=login">
  <button
    className="w-full text-black bg-gray-100 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    <img
            className="h-6 w-auto inline-block mr-2"
            src="/resources/images/google.svg"
            alt="Google"
          /> Google으로 로그인하기
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/twitter.php?action=login">
  <button
    className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    <svg className="h-4 w-auto text-white inline-block mr-2" fill="currentColor" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg">
 <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
</svg> X로 로그인하기
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/ip.php?action=login">
  <button
    className="w-full text-black border-2 border-black bg-white text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    익명으로 로그인하기
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