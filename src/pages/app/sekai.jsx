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
import { ChevronDownIcon, ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

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

    if (currentStep == 3 || currentStep == 0){
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

          <div className={`${currentStep == 1 ? 'block' : 'hidden'} py-8 px-5 overflow-y-scroll`}>
          <button  onClick={() => navigate('/')}>
          <img
            className="h-10 w-auto"
            src="/Plus.svg"
            alt="Plus"
          />
          </button>
      <h1 className="text-3xl font-semibold my-4 text-center">
      <svg className="h-6 inline-block mr-1" viewBox="0 0 266 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.590881 49V2.45452H18.0455C21.6212 2.45452 24.6212 3.12119 27.0455 4.45452C29.4849 5.78786 31.3258 7.62119 32.5682 9.95452C33.8258 12.2727 34.4545 14.9091 34.4545 17.8636C34.4545 20.8485 33.8258 23.5 32.5682 25.8182C31.3106 28.1364 29.4545 29.9621 27 31.2955C24.5455 32.6136 21.5227 33.2727 17.9318 33.2727H14L9.02 26.3409H16.7955C18.8864 26.3409 20.5985 25.9773 21.9318 25.25C23.2652 24.5227 24.25 23.5227 24.8864 22.25C25.5379 20.9773 25.8636 19.5152 25.8636 17.8636C25.8636 16.2121 25.5379 14.7576 24.8864 13.5C24.25 12.2424 23.2576 11.2652 21.9091 10.5682C20.5758 9.85604 18.8561 9.49998 16.75 9.49998H9.0227V49H0.590881ZM49.642 2.45452V49H41.4148V2.45452H49.642ZM80.3523 34.3182V14.0909H88.5795V49H80.6023V42.7955H80.2386C79.4508 44.75 78.1553 46.3485 76.3523 47.5909C74.5644 48.8333 72.3598 49.4545 69.7386 49.4545C67.4508 49.4545 65.428 48.947 63.6705 47.9318C61.928 46.9015 60.5644 45.4091 59.5795 43.4545C58.5947 41.4848 58.1023 39.1061 58.1023 36.3182V14.0909H66.3295V35.0455C66.3295 37.2576 66.9356 39.0152 68.1477 40.3182C69.3598 41.6212 70.9508 42.2727 72.9205 42.2727C74.1326 42.2727 75.3068 41.9773 76.4432 41.3864C77.5795 40.7955 78.5114 39.9167 79.2386 38.75C79.9811 37.5682 80.3523 36.0909 80.3523 34.3182ZM124.631 23.3182L117.131 24.1364C116.919 23.3788 116.547 22.6667 116.017 22C115.502 21.3333 114.805 20.7955 113.926 20.3864C113.047 19.9773 111.972 19.7727 110.699 19.7727C108.987 19.7727 107.547 20.1439 106.381 20.8864C105.229 21.6288 104.661 22.5909 104.676 23.7727C104.661 24.7879 105.032 25.6136 105.79 26.25C106.563 26.8864 107.835 27.4091 109.608 27.8182L115.562 29.0909C118.866 29.803 121.32 30.9318 122.926 32.4773C124.547 34.0227 125.366 36.0455 125.381 38.5455C125.366 40.7424 124.722 42.6818 123.449 44.3636C122.191 46.0303 120.441 47.3333 118.199 48.2727C115.956 49.2121 113.381 49.6818 110.472 49.6818C106.199 49.6818 102.759 48.7879 100.153 47C97.5473 45.197 95.9943 42.6894 95.4943 39.4773L103.517 38.7045C103.881 40.2803 104.653 41.4697 105.835 42.2727C107.017 43.0758 108.555 43.4773 110.449 43.4773C112.403 43.4773 113.972 43.0758 115.153 42.2727C116.35 41.4697 116.949 40.4773 116.949 39.2955C116.949 38.2955 116.563 37.4697 115.79 36.8182C115.032 36.1667 113.85 35.6667 112.244 35.3182L106.29 34.0682C102.941 33.3712 100.464 32.197 98.858 30.5455C97.2519 28.8788 96.4564 26.7727 96.4716 24.2273C96.4564 22.0758 97.0398 20.2121 98.2216 18.6364C99.4186 17.0455 101.078 15.8182 103.199 14.9545C105.335 14.0758 107.797 13.6364 110.585 13.6364C114.676 13.6364 117.896 14.5076 120.244 16.25C122.608 17.9924 124.07 20.3485 124.631 23.3182ZM172.369 18.1591H163.869C163.627 16.7652 163.18 15.5303 162.528 14.4545C161.877 13.3636 161.066 12.4394 160.097 11.6818C159.127 10.9242 158.021 10.3561 156.778 9.97725C155.551 9.58331 154.225 9.38634 152.801 9.38634C150.271 9.38634 148.028 10.0227 146.074 11.2955C144.119 12.553 142.589 14.4015 141.483 16.8409C140.377 19.2652 139.824 22.2273 139.824 25.7273C139.824 29.2879 140.377 32.2879 141.483 34.7273C142.604 37.1515 144.134 38.9848 146.074 40.2273C148.028 41.4545 150.263 42.0682 152.778 42.0682C154.172 42.0682 155.475 41.8864 156.688 41.5227C157.915 41.1439 159.013 40.5909 159.983 39.8636C160.968 39.1364 161.794 38.2424 162.46 37.1818C163.142 36.1212 163.612 34.9091 163.869 33.5455L172.369 33.5909C172.051 35.803 171.362 37.8788 170.301 39.8182C169.256 41.7576 167.884 43.4697 166.188 44.9545C164.491 46.4242 162.506 47.5758 160.233 48.4091C157.96 49.2273 155.438 49.6364 152.665 49.6364C148.574 49.6364 144.922 48.6894 141.71 46.7955C138.498 44.9015 135.968 42.1667 134.119 38.5909C132.271 35.0152 131.347 30.7273 131.347 25.7273C131.347 20.7121 132.278 16.4242 134.142 12.8636C136.006 9.28786 138.544 6.55301 141.756 4.65907C144.968 2.76513 148.604 1.81816 152.665 1.81816C155.256 1.81816 157.665 2.1818 159.892 2.90907C162.119 3.63634 164.104 4.70453 165.847 6.11362C167.589 7.50755 169.021 9.21968 170.142 11.25C171.278 13.2652 172.021 15.5682 172.369 18.1591ZM194.955 49.6818C191.545 49.6818 188.591 48.9318 186.091 47.4318C183.591 45.9318 181.652 43.8333 180.273 41.1364C178.909 38.4394 178.227 35.2879 178.227 31.6818C178.227 28.0758 178.909 24.9167 180.273 22.2045C181.652 19.4924 183.591 17.3864 186.091 15.8864C188.591 14.3864 191.545 13.6364 194.955 13.6364C198.364 13.6364 201.318 14.3864 203.818 15.8864C206.318 17.3864 208.25 19.4924 209.614 22.2045C210.992 24.9167 211.682 28.0758 211.682 31.6818C211.682 35.2879 210.992 38.4394 209.614 41.1364C208.25 43.8333 206.318 45.9318 203.818 47.4318C201.318 48.9318 198.364 49.6818 194.955 49.6818ZM195 43.0909C196.848 43.0909 198.394 42.5833 199.636 41.5682C200.879 40.5379 201.803 39.1591 202.409 37.4318C203.03 35.7045 203.341 33.7803 203.341 31.6591C203.341 29.5227 203.03 27.5909 202.409 25.8636C201.803 24.1212 200.879 22.7348 199.636 21.7045C198.394 20.6742 196.848 20.1591 195 20.1591C193.106 20.1591 191.53 20.6742 190.273 21.7045C189.03 22.7348 188.098 24.1212 187.477 25.8636C186.871 27.5909 186.568 29.5227 186.568 31.6591C186.568 33.7803 186.871 35.7045 187.477 37.4318C188.098 39.1591 189.03 40.5379 190.273 41.5682C191.53 42.5833 193.106 43.0909 195 43.0909ZM218.665 49V14.0909L226.892 19V49H218.665ZM222.801 9.13634C221.498 9.13634 220.377 8.70453 219.438 7.84089C218.498 6.9621 218.028 5.90907 218.028 4.6818C218.028 3.43937 218.498 2.38634 219.438 1.5227C220.377 0.643922 221.498 0.204529 222.801 0.204529C224.119 0.204529 225.241 0.643922 226.165 1.5227C227.104 2.38634 227.574 3.43937 227.574 4.6818C227.574 5.90907 227.104 6.9621 226.165 7.84089C225.241 8.70453 224.119 9.13634 222.801 9.13634ZM243.58 28.5455V49H235.352V14.0909H243.216V20.0227H243.625C244.428 18.0682 245.708 16.5152 247.466 15.3636C249.239 14.2121 251.428 13.6364 254.034 13.6364C256.443 13.6364 258.542 14.1515 260.33 15.1818C262.133 16.2121 263.527 17.7045 264.511 19.6591C265.511 21.6136 266.004 23.9848 265.989 26.7727V49H257.761V28.0455C257.761 25.7121 257.155 23.8864 255.943 22.5682C254.746 21.25 253.087 20.5909 250.966 20.5909C249.527 20.5909 248.246 20.9091 247.125 21.5455C246.019 22.1667 245.148 23.0682 244.511 24.25C243.89 25.4318 243.58 26.8636 243.58 28.5455Z" fill="currentColor"/>
      </svg> 가입하고<br/>
      <span className="font-bold">지금 특전 받으세요</span>
        </h1>
      <p className="text-center dark:text-gray-300 text-gray-700 mb-4">
        다양한 곳에서 모으고 사용하는 포인트,<br/>PlusCoin을 만나보세요.
      </p>
      <img
            className="h-84 mt-16 mx-auto"
            src="/onboarding/image 3.png"
            alt="등록카드 Example"
          />
    <div className="animate-bounce items-center py-4">
      <ChevronDownIcon className="w-full h-8"/>
    </div>
    <h1 className="text-3xl font-semibold my-4">
    무궁무진한 데코와 등록카드<br/>
    분명 만족할 거예요
    </h1>
    <p className="dark:text-gray-300 text-gray-700 mb-4">
    매 시즌마다 등장하는 테마별 등록카드부터<br/>
    등록카드에 금상첨화를 해 줄 데코까지!
    </p>
    <h1 className="text-3xl font-semibold my-4">
    Discord부터 <svg className="inline-block h-6 ml-1 w-auto" width="126" height="48" viewBox="0 0 126 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.590881 47V0.454529H9.31818H18.0455C21.6212 0.454529 24.6212 1.12119 27.0455 2.45452C29.4849 3.78786 31.3258 5.62119 32.5682 7.95452C33.8258 10.2727 34.4545 12.9091 34.4545 15.8636C34.4545 18.8485 33.8258 21.5 32.5682 23.8182C31.3106 26.1364 29.4545 27.9621 27 29.2955C24.5455 30.6136 21.5227 31.2727 17.9318 31.2727H13.9999L9.0227 24.3409H16.7955C18.8864 24.3409 20.5985 23.9773 21.9318 23.25C23.2652 22.5227 24.25 21.5227 24.8864 20.25C25.5379 18.9773 25.8636 17.5152 25.8636 15.8636C25.8636 14.2121 25.5379 12.7576 24.8864 11.5C24.25 10.2424 23.2576 9.26513 21.9091 8.56816C20.5758 7.85604 18.8561 7.49998 16.75 7.49998H9.0227V47H0.590881ZM49.642 0.454529V47H41.4148V0.454529H49.642ZM80.3523 32.0682L80.2386 12.0909H88.5795V47H80.6023V40.7955H80.2386C79.4508 42.75 78.1553 44.3485 76.3523 45.5909C74.5644 46.8333 72.3598 47.4545 69.7386 47.4545C67.4508 47.4545 65.428 46.947 63.6705 45.9318C61.928 44.9015 60.5644 43.4091 59.5795 41.4545C58.5947 39.4848 58.1023 37.1061 58.1023 34.3182V12.0909H66.3295V33.0455C66.3295 35.2576 66.9356 37.0152 68.1477 38.3182C69.3598 39.6212 70.9508 40.2727 72.9205 40.2727C74.1326 40.2727 74.8636 39.5909 76 39C77.1363 38.4091 77.7728 37.8712 78.5 36.7045C79.2425 35.5227 80.3523 33.8409 80.3523 32.0682ZM124.631 21.3182L117.131 22.1364C116.919 21.3788 116.547 20.6667 116.017 20C115.502 19.3333 114.805 18.7955 113.926 18.3864C113.047 17.9773 111.972 17.7727 110.699 17.7727C108.987 17.7727 107.547 18.1439 106.381 18.8864C105.229 19.6288 104.661 20.5909 104.676 21.7727C104.661 22.7879 105.032 23.6136 105.79 24.25C106.563 24.8864 107.835 25.4091 109.608 25.8182L115.562 27.0909C118.866 27.803 121.32 28.9318 122.926 30.4773C124.547 32.0227 125.366 34.0455 125.381 36.5455C125.366 38.7424 124.722 40.6818 123.449 42.3636C122.191 44.0303 120.441 45.3333 118.199 46.2727C115.956 47.2121 113.381 47.6818 110.472 47.6818C106.199 47.6818 102.759 46.7879 100.153 45C97.5473 43.197 95.9943 40.6894 95.4943 37.4773L103.517 36.7045C103.881 38.2803 104.653 39.4697 105.835 40.2727C107.017 41.0758 108.555 41.4773 110.449 41.4773C112.403 41.4773 113.972 41.0758 115.153 40.2727C116.35 39.4697 116.949 38.4773 116.949 37.2955C116.949 36.2955 116.563 35.4697 115.79 34.8182C115.032 34.1667 113.85 33.6667 112.244 33.3182L106.29 32.0682C102.941 31.3712 100.464 30.197 98.858 28.5455C97.2519 26.8788 96.4564 24.7727 96.4716 22.2273C96.4564 20.0758 97.0398 18.2121 98.2216 16.6364C99.4186 15.0455 101.078 13.8182 103.199 12.9545C105.335 12.0758 107.797 11.6364 110.585 11.6364C114.676 11.6364 117.896 12.5076 120.244 14.25C122.608 15.9924 124.07 18.3485 124.631 21.3182Z" fill="currentColor"/>
                    </svg>까지<br/>
    언제 어디서나
    </h1>
    <p className="dark:text-gray-300 text-gray-700 mb-4">
    Discord 서버 내 PlusCoin 봇으로 채팅 코인 모으고,<br/>
    Plus 서비스에서 자유롭게 소비하세요.
    </p>
    <div className="py-12"></div>
    </div>
    <div className={`${currentStep == 2 ? 'block' : 'hidden'} py-8 px-5`}>
          <button  onClick={() => setCurrentStep(currentStep - 1)}>
            <ChevronLeftIcon className="h-6"/>
          </button>
      <h1 className="text-3xl font-bold my-4">Sekai 코드<br/>지정하기</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4">
        Plus 속 작은 세계, Sekai.<br/>
        코인 송금, 프로필 카드에 사용될 Sekai를 입력하세요.<br/>
        불건전 Sekai는 관리자에 의해 변경될 수 있어요.
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
          <XMarkIcon  className="h-6"/>
          </button>
      <h1 className="text-3xl font-bold my-4 text-center">가입을 축하해요!</h1>
      <p className="dark:text-gray-300 text-gray-700 mb-4 text-center">
        이제 PlusCoin을 이용할 수 있어요.
      </p>
      <div class="flex flex-col items-center">
<img src="/congrats_sekai.png" alt="축하 캐릭터" class="h-64"/>
</div>
    </div>
    <div class={`dark:bg-gray-800 max-w-md mx-auto ${currentStep == 5 ? "hidden" : ""} px-4 bottom-0 pb-8 fixed w-full `}>
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
<button onClick={() => navigate('/')} class={`${currentStep !== 1 ? "opacity-0 -mb-64" : ""} text-blue-500 w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transform ease-in duration-100 active:scale-95`}>나중에 가입하기</button>
</div>
   </div>
   
  );
};
