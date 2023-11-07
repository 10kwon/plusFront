import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Keypad from '../../components/keypad';
import useDarkSide from '../../components/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const BoxPage = (props) => {
  if (props.isLogin == 0){
    //window.location.href="/signin";
  }
  
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계를 추적하는 상태

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const [price, setPrice] = useState(0);
  const [titleName, setTitleName] = useState(""); // 경고 메시지 상태
  const [senderName, setSenderName] = useState(""); // 경고 메시지 상태
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false); // '다음' 버튼 활성화 여부 상태
  const [selectedItem, setSelectedItem] = useState("");

  const handleNextStep = () => {
    // 다음 단계로 이동하는 핸들러
    setCurrentStep(currentStep + 1);
      setIsNextButtonDisabled(false);
  };

  const handleFormSubmit = async () => {
    try {
      const amount = Number(price);
      // 데이터를 PHP 서버로 전송
      const response = await axios.get("https://mapi.pcor.me/api/auth/pepero/ticket_use.php",
      {
        withCredentials: true, // withCredentials를 true로 설정
        credentials: "same-origin", // credentials를 'same-origin'으로 설정
      });
  
      if (response.status === 200) {
        if (response.data && response.data.error) {
          // 오류 메시지를 사용자에게 표시
          alert(response.data.error);
          if (response.data.error == "로그인해 주세요."){
            window.location.href="/signin";
          }
          else if (response.data.error == "더 이상 티켓이 없어요."){
            window.location.href="/shop/cash";
          }
          else if (response.data.error == "행사 기간이 아닙니다."){
            window.location.href="/";
          }
        
        } else {
          setSenderName(response.data.product);
          setTitleName(response.data.message);
          setCurrentStep(2);
        }
        // 전송이 성공하면 가입 축하 화면으로 이동하거나 작업을 수행하세요.
         // 예시로 5단계로 설정
      } else {
        
      }
    } catch (error) {
      // 오류 처리
      console.error("오류 발생", error);
    }
  };
  const navigate = useNavigate()
  return (

    <div className="max-w-md mx-auto dark:bg-gray-800 dark:text-white min-h-screen">

    <div className={`${currentStep == 1 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => navigate("/")}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
      <h1 className="text-3xl font-bold my-4 text-center"><small>24시간동안 펼쳐지는</small><br/>빼빼로 쟁탈전<i>!</i></h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4 text-center">
        <strong>2023.11.10 00:00 ~ 2023.11.11 23:59</strong><br/>
        기본 지급 티켓 5개 | 추가 1개당 30원<br/>
        <span class="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-2 rounded-full font-bold mr-2">주요 아이템</span>
        빼빼로 아몬드맛 (1명), 빼빼로 오리지널 (1명), Neo Prism, 시즌패스+
      </p>
    </div>
    <div className={`${currentStep == 2 ? 'block' : 'hidden'} py-8 px-5`}>
    <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
      <h1 className="text-3xl font-bold my-4 text-center mb-8">{titleName}</h1>
      <h1 className="text-2xl font-semibold my-4 text-center mb-8">{senderName}</h1>
    </div>
    <div class={`max-w-md mx-auto ${currentStep == 4 ? "hidden" : ""} px-4 bottom-8 fixed w-full `}>
    <div class={`${currentStep >= 2 ? "gap-4 flex" : "mb-2 "}`}>
    {currentStep >= 2 ?
    <button             
                onClick={() => setCurrentStep(currentStep - 1)}
class="mt-3 px-3 w-1/2 font-bold bg-gray-300 hover:bg-gray-400 text-black text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 ">
다시 뽑기
</button>
: <span></span>}
                 <button             
                onClick={currentStep !== 1 ? handleNextStep  : handleFormSubmit}
                disabled={isNextButtonDisabled}
class={`${currentStep == 2 ? "hidden" : ""} mt-3 px-3 w-full bg-blue-500 font-bold text-white text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700`}>
{currentStep == 2 ? "다시 뽑기" : "1개 뽑기"}
</button>
</div>
</div>
   </div>
   
  );
};
