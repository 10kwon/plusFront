import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Avatar, Tabs, Breadcrumb } from "flowbite-react";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Keypad from "../../components/keypad";
import useDarkSide from "../../components/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export const PayPage = (props) => {
  if (props.isLogin == 0) {
    //window.location.href="/signin";
  }

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계를 추적하는 상태

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const [price, setPrice] = useState(0);
  const [sekaiError, setSekaiError] = useState(""); // 경고 메시지 상태
  const [senderName, setSenderName] = useState(""); // 경고 메시지 상태
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false); // '다음' 버튼 활성화 여부 상태
  const [selectedItem, setSelectedItem] = useState("");

  const handleNextStep = () => {
    // 다음 단계로 이동하는 핸들러
    setCurrentStep(currentStep + 1);
    setIsNextButtonDisabled(true);

    if (currentStep == 2 || currentStep == 0) {
      setIsNextButtonDisabled(false);
    }
  };

  const handleNumChange = (event) => {
    const value = event.target.value;
    setPrice(value);

    // 유효성 검사를 수행하고 조건에 따라 '다음' 버튼 활성화 여부 업데이트
    if (!/^(0|[1-9][0-9]*)$/.test(value)) {
      setSekaiError("소수점, 음수 등을 포함하지 않은 정수를 입력하세요.");
      setIsNextButtonDisabled(true); // 유효하지 않은 경우 버튼 비활성화
    } else {
      if (value == 0 || value > 500000) {
        setSekaiError("1원 이상, 500,000원 미만으로만 충전할 수 있어요.");
        setIsNextButtonDisabled(true); // 유효하지 않은 경우 버튼 비활성화
      } else {
        setSekaiError(""); // 유효성 검사 통과 시 경고 메시지 초기화
        setIsNextButtonDisabled(false); // 유효한 경우 버튼 활성화
      }
    }
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedItem(value);
    setIsNextButtonDisabled(false);
  };

  const handleFormSubmit = async () => {
    try {
      const amount = Number(price);
      // 데이터를 PHP 서버로 전송
      const response = await axios.post(
        "https://mapi.pcor.me/api/auth/payment/issue.php",
        {
          amount,
        },
        {
          withCredentials: true, // withCredentials를 true로 설정
          credentials: "same-origin", // credentials를 'same-origin'으로 설정
        }
      );

      if (response.status === 200) {
        if (response.data && response.data.error) {
          // 오류 메시지를 사용자에게 표시
          alert(response.data.error);
          window.location.href = "/";
        } else {
          setSenderName(response.data.sendername);
          setCurrentStep(4);
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
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto dark:bg-gray-800 dark:text-white min-h-screen">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full bg-blue-500 transition-all duration-300 ${
            currentStep === 1 ? "w-1/3" : currentStep === 2 ? "w-2/3" : "w-full"
          }`}
        ></div>
      </div>

      <div className={`${currentStep == 1 ? "block" : "hidden"} py-8 px-5`}>
        <button onClick={() => navigate("/")}>
          <img className="h-10 w-auto" src="/Plus.svg" alt="Plus" />
        </button>
        <h1 className="text-3xl font-bold my-4">
          캐시를 충전하고
          <br />
          아이템 구매에 활용하세요
        </h1>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Plus 캐시를 충전하면 PlusCoin 전환부터 시즌패스+ 등 유료 아이템에까지
          활용할 수 있어요.
        </p>
      </div>
      <div className={`${currentStep == 2 ? "block" : "hidden"} py-8 px-5`}>
        <button onClick={() => navigate("/")}>
          <ChevronLeftIcon className="h-6" />
        </button>
        <p className="dark:text-gray-300 text-gray-700 mt-4">충전하기</p>
        <h1 className="text-3xl font-bold my-4">얼마를 충전할까요?</h1>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handleNumChange}
          placeholder="금액"
          min="1"
          className={`block w-full rounded-xl text-3xl border-0 px-3.5 py-2 text-gray-900 dark:bg-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-blue-500 sm:leading-6 transform ease-in duration-100 active:scale-95 ${
            sekaiError ? "border-red-500" : ""
          }`}
        />
        {sekaiError && (
          <p className="text-red-500 text-sm mt-1">{sekaiError}</p>
        )}
      </div>
      <div className={`${currentStep == 3 ? "block" : "hidden"} py-8 px-5`}>
        <button onClick={() => navigate("/")}>
          <ChevronLeftIcon className="h-6" />
        </button>
        <div class="flex flex-col items-center"></div>
        <h1 className="text-3xl font-bold my-4 text-center">
          {price}원을
          <br />
          정말로 충전하시겠어요?
        </h1>
        <p className="dark:text-gray-300 text-gray-700 mt-5">
          <strong>충전 이전에 확인하세요!</strong>
          <br />
          1. 토스아이디를 통한 입금이 진행돼요.
          <br />
          2. '충전하기' 버튼을 누르면 만 19세 이상 또는 법정대리인이 거래에 대한
          책임을 지고 충전한다는 데에 동의해요.
          <br />
          3. 기존 거래가 종료되지 않았다면 충전할 수 없어요.
          <br />
          4. 아이템 구매에 캐시를 사용했다면 환불이 어려워요.
          <br />
          5. 미성년자의 거래 시 미성년자 또는 법정 대리인에 의해
          plus@sqlare.com으로 계정의 닉네임 또는 ID와 송금확인증을 보내면 아이템
          비활성화 및 감가상각을 조건으로 환불받을 수 있어요.
          <br />
          6. 송금 이후 전산 반영까지 1~10분이 소요될 수 있어요.
        </p>
      </div>
      <div className={`${currentStep == 4 ? "block" : "hidden"} py-8 px-5`}>
        <button onClick={() => navigate("/")}>
          <img className="h-10 w-auto" src="/Plus.svg" alt="Plus" />
        </button>
        <h1 className="text-3xl font-bold my-4 text-center mb-8">
          입금을 진행해주세요
        </h1>
        <div className="border-b py-4">
          <p>
            <span class="bg-blue-500 mr-2 rounded-full py-2 px-3.5 font-bold">
              1
            </span>
            <strong>토스아이디 송금 링크를 방문해 주세요</strong>
          </p>
          <div class="bg-gray-300 dark:bg-gray-600 py-2 rounded-xl text-center mt-4">
            <a href={`https://toss.me/plusp/${price}`} target="_blank">
              <h3 className="text-xl font-bold">
                https://toss.me/plusp/{price}
              </h3>
            </a>
            <p>👆 클릭하면 바로 갈 수 있어요</p>
          </div>
        </div>
        <div className="border-b py-4">
          <p>
            <span class="bg-blue-500 mr-2 rounded-full py-2 px-3.5 font-bold">
              2
            </span>
            <span class="bg-blue-500 rounded-lg px-4 py-2 mr-2">
              익명 송금하기
            </span>
            <strong>를 눌러 주세요</strong>
          </p>
        </div>
        <div className="border-b py-4">
          <p>
            <span class="bg-blue-500 mr-2 rounded-full py-2 px-3.5 font-bold">
              3
            </span>
            <strong>아래 이름으로 {price}원을 보내 주세요</strong>
          </p>
          <div class="bg-gray-300 dark:bg-gray-600 py-2 rounded-xl text-center mt-4">
            <h3 className="text-2xl font-bold">{senderName}</h3>
          </div>
        </div>
      </div>
      <div
        class={`max-w-md mx-auto ${
          currentStep == 4 ? "hidden" : ""
        } px-4 bottom-8 fixed w-full `}
      >
        <div class={`${currentStep >= 2 ? "gap-4 flex" : "mb-2 "}`}>
          {currentStep >= 2 ? (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              class="mt-3 px-3 w-1/2 font-bold bg-gray-300 hover:bg-gray-400 text-black text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 "
            >
              이전
            </button>
          ) : (
            <span></span>
          )}
          <button
            onClick={currentStep !== 3 ? handleNextStep : handleFormSubmit}
            disabled={isNextButtonDisabled}
            class={`${
              isNextButtonDisabled == true ? "opacity-50" : ""
            } mt-3 px-3 w-full bg-blue-500 font-bold text-white text-center m-auto py-3 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700`}
          >
            {currentStep == 3 ? "충전하기" : "다음"}
          </button>
        </div>
      </div>
    </div>
  );
};
