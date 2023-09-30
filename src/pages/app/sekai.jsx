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

import useDarkSide from '../../components/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const SekaiIssuePage = (props) => {
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


  const [sekaiValue, setSekaiValue] = useState("");
  const [sekaiError, setSekaiError] = useState(""); // 경고 메시지 상태
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false); // '다음' 버튼 활성화 여부 상태
  const [selectedItem, setSelectedItem] = useState("");

  const handleNextStep = () => {
    // 다음 단계로 이동하는 핸들러
    setCurrentStep(currentStep + 1);
    setIsNextButtonDisabled(true);

    if (currentStep == 3 || currentStep == 1){
      setIsNextButtonDisabled(false);
    }
  };

  const handleSekaiChange = (event) => {
    const value = event.target.value;
    setSekaiValue(value);

    // 유효성 검사를 수행하고 조건에 따라 '다음' 버튼 활성화 여부 업데이트
    if (value.length !== 11 || !/^[A-Za-z0-9]+$/.test(value)) {
      setSekaiError("영/숫자 11자로 입력하세요.");
      setIsNextButtonDisabled(true); // 유효하지 않은 경우 버튼 비활성화
    } else {
      setSekaiError(""); // 유효성 검사 통과 시 경고 메시지 초기화
      setIsNextButtonDisabled(false); // 유효한 경우 버튼 활성화
    }
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedItem(value);
    setIsNextButtonDisabled(false);
  };

  const handleFormSubmit = async () => {
    try {
      // 데이터를 PHP 서버로 전송
      const response = await axios.post("https://mapi.pcor.me/api/auth/sekai/issue.php", {
        sekaiValue,
        selectedItem
      },
      {
        withCredentials: true, // withCredentials를 true로 설정
        credentials: "same-origin", // credentials를 'same-origin'으로 설정
      });
  
      if (response.status === 200) {
        if (response.data && response.data.error) {
          // 오류 메시지를 사용자에게 표시
          alert(response.data.error);
          window.location.href = "/";
        } else {
          // 오류 응답에 오류 메시지가 없는 경우 기본 오류 메시지 출력
          setCurrentStep(5);
        }
        // 전송이 성공하면 가입 축하 화면으로 이동하거나 작업을 수행하세요.
         // 예시로 5단계로 설정
      } else {
        // 전송이 실패한 경우 오류 처리
       
  
        // 메인 페이지로 리디렉션 (예시 URL로 변경)
        
      }
    } catch (error) {
      // 오류 처리
      console.error("오류 발생", error);
    }
  };
  
  const navigate = useNavigate()
  return (

    <div className="max-w-md mx-auto dark:bg-gray-800 dark:text-white min-h-screen">
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full bg-blue-500 transition-all duration-300 ${
            currentStep === 1 ? 'w-1/4' : currentStep === 2 ? 'w-2/4' : currentStep === 3 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      </div>

          <div className={`${currentStep == 1 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
      <h1 className="text-3xl font-bold my-4">우리, 함께, 플코해!<br/>PlusCoin 시작하기</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4">
        다양한 곳에서 모으고 사용하는 포인트,<br/>PlusCoin을 만나보세요.
      </p>
      <img
            className="h-52 mt-16 mx-auto"
            src="/onboarding/image 3.png"
            alt="등록카드 Example"
          />
    </div>
    <div className={`${currentStep == 2 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => setCurrentStep(currentStep - 1)}>
            <ChevronLeftIcon className="h-6"/>
          </button>
      <h1 className="text-3xl font-bold my-4">Sekai 번호<br/>지정하기</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4">
        PlusCoin을 주고 받는데 사용하는 Sekai 번호를 입력하세요.
      </p>

      <input
                type="text"
                name="sekai"
                id="sekai"
                value={sekaiValue}
                onChange={handleSekaiChange}
                placeholder="영/숫자 11자"
                className={`block w-full rounded-xl text-3xl border-0 px-3.5 py-2 text-gray-900 dark:bg-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:leading-6 transform ease-in duration-100 active:scale-95 ${sekaiError ? 'border-red-500' : ''}`}
                 />
                      {sekaiError && (
          <p className="text-red-500 text-sm mt-1">{sekaiError}</p>
        )}
    </div>
    <div className={`${currentStep == 3 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => setCurrentStep(currentStep - 1)}>
            <ChevronLeftIcon className="h-6"/>
          </button>
      <h1 className="text-3xl font-bold my-4">아이템 지원 받기</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4">
        지금 가입하시는 {props.userName}님만을 위한 혜택!
      </p>

      <fieldset class="mt-5">
        <legend class="sr-only">
            혜택을 선택하세요
        </legend>

        <div class="flex items-center mt-4">
            <input id="benefit1" type="radio" name="benefit" value="lightcyan" checked={selectedItem === "lightcyan"}
              onChange={handleRadioChange} class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 text-blue-600 dark:text-blue-600 bg-gray-100"/>
            <label class="text-xl ml-2 block">
            LIGHT CYAN 등록카드<br/>
            <span class="text-gray-500 text-sm">등록카드를 얻으면 프로필로 사용할 수 있어요</span>
            </label>
        </div>
        <div class="flex items-center mt-4">
            <input id="benefit2" type="radio" name="benefit" value="100coin" checked={selectedItem === "100coin"}
              onChange={handleRadioChange} class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 text-blue-600 dark:text-blue-600 bg-gray-100"/>
            <label class="text-xl ml-2 block">
            100 PlusCoin (10원)<br/>
            <span class="text-gray-500 text-sm">PlusCoin을 얻으면 상점에서 사용할 수 있어요</span>
            </label>
        </div>
    </fieldset>
    </div>
    <div className={`${currentStep == 4 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => setCurrentStep(currentStep - 1)}>
            <ChevronLeftIcon className="h-6"/>
          </button>
      <h1 className="text-3xl font-bold my-4 text-center">아래의 정보로<br/>계속할까요?</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4 text-center">
        계속 진행하면 수정하기 어려울 수 있어요
      </p>
      <div className="mt-6 border-t border-gray-100 dark:border-gray-700">
        <dl className="divide-y divide-gray-100 dark:divide-gray-700">
          <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-bold leading-6 text-gray-900 dark:text-gray-100">Sekai 번호</dt>
            <dd className="mt-1 leading-6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">{sekaiValue}</dd>
          </div>
          <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-bold leading-6 text-gray-900 dark:text-gray-100">신규 가입 혜택</dt>
            <dd className="mt-1 leading-6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">{selectedItem}</dd>
          </div>
        </dl>
      </div>
    </div>
    <div className={`${currentStep == 5 ? 'block' : 'hidden'} py-8 px-5`}>
    <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
      <h1 className="text-3xl font-bold my-4 text-center">가입을 축하해요!</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4 text-center">
        이제 PlusCoin을 이용할 수 있어요.
      </p>
    </div>
    <div class={`max-w-md mx-auto ${currentStep == 5 ? "hidden" : ""} px-4 bottom-8 fixed w-full `}>
    <div class={`${currentStep >= 2 ? "gap-4 flex" : "mb-2 "}`}>
    {currentStep >= 2 ?
    <button             
                onClick={() => setCurrentStep(currentStep - 1)}
class="mt-3 px-3 w-1/2 font-bold bg-gray-300 hover:bg-gray-400 text-black text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 ">
이전
</button>
: <span></span>}

                 <button             
                onClick={currentStep !== 4 ? handleNextStep : handleFormSubmit}
                disabled={isNextButtonDisabled}
class={`${isNextButtonDisabled == true ? "opacity-50" : ""} mt-3 px-3 ${currentStep >= 2 ? "w-1/2" : "w-full"} bg-blue-500 font-bold text-white text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700`}>
{currentStep !== 4 ? "다음" : "완료하기"}
</button>
</div>
<button onClick={() => navigate('/')} class={`${currentStep !== 1 ? "opacity-0 -mb-64" : ""} text-blue-500 w-full py-2 hover:bg-gray-100 dark:hover-bg-gray-800 rounded-xl transform ease-in duration-100 active:scale-95`}>나중에 가입하기</button>
</div>
   </div>
   
  );
};
