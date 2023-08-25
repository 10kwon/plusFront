import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';

export const AuthPage = (props) => {
    const navigate = useNavigate()
    return(
        <div>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Plus ID로 로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <div>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=1028652743440736317&redirect_uri=https%3A%2F%2Fmapi.pcor.me%2Foauth%2Fdiscord.php&response_type=code&scope=identify">
  <button
    className="w-full text-white bg-indigo-500 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    Discord로 로그인
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/kakao.php?action=login">
  <button
    className="w-full text-black bg-yellow-300 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    카카오로 로그인
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/google.php?action=login">
  <button
    className="w-full text-black bg-gray-100 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    Google으로 로그인
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/twitter.php?action=login">
  <button
    className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    X로 로그인
  </button>
  </a>
  <a href="https://mapi.pcor.me/oauth/ip.php?action=login">
  <button
    className="w-full text-white bg-gray-500 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
  >
    익명으로 로그인
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