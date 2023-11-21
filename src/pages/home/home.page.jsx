import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import nl2br from "react-nl2br";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header/header.prod.jsx";
import Footer from "../../components/footer/footer.prod.jsx";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import { Card, Avatar, Tabs } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";

import { Canvas, useFrame } from "@react-three/fiber";
import RotatingImage from "../../components/regCardSpin";

import {
  ChevronRightIcon,
  MegaphoneIcon,
  GiftIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export const HomePage = (props) => {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/banner/index.php")
      .then((response) => setBannerData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/shopPopular.php")
      .then((response) => setShopData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/newsPopular.php")
      .then((response) => setNewsData(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <Header
        isLogin={props.isLogin}
        userName={props.userName}
        userEmail={props.userEmail}
        userImage={props.userImage}
        userCoin={props.userCoin}
        userCash={props.userCash}
      />

<div class="mx-3 mt-8 mb-6 flex lg:hidden">
          {props.isLogin ? (
                        
                        <div className="flex rounded-xl p-2 bg-gray-200 w-full dark:bg-gray-700">
                          <a href="https://ps.pcor.me/pass">
                        <div className="ml-2 my-auto">
                        <img src="/resources/images/pass.svg" className="h-8 inline-block mr-1"/>
                        </div>
                        <div className="ml-2">
                        <span
                          style={{
                            animationDelay: "0.15s",
                            animationFillMode: "forwards",
                          }}
                          class="text-lg animate-fade-up"
                        >
                          {props.userName}님을 위한 소식{" "}
                        </span>
                        <br class="md:hidden block" />
                        <span class="text-xl font-bold">
                        시즌패스 특별가 600원에 얻기<span class="hidden md:visible">.</span>
                        </span>
                        </div>
                        </a>
                      </div>
          ) : (
            <div className="flex rounded-xl p-2 bg-gray-200 w-full dark:bg-gray-700">
              <div className="ml-2 my-auto">
              <img src="https://coin.pcor.me/resources/images/pluscoin.svg" className="h-8 inline-block mr-1"/>
              </div>
              <div className="ml-2">
              <span
                style={{
                  animationDelay: "0.15s",
                  animationFillMode: "forwards",
                }}
                class="text-lg animate-fade-up"
              >
                Plus가 처음이라면?{" "}
              </span>
              <br class="md:hidden block" />
              <span class="text-xl font-bold">
                코인 받고 시작하세요<span class="hidden md:visible">.</span>
              </span>
              </div>
              <div className="ml-auto my-auto justify-end">
              <button
                  onClick={() => navigate("/signin")}
                  class="mr-3 px-3 bg-blue-500 text-white text-center py-2 rounded-lg transform ease-in duration-100 active:scale-95 hover:bg-blue-600"
                >
                  로그인
                </button>
              </div>
            </div>
          )}
        </div>

    <div className="lg:p-0">
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        slidesPerView={1.05}
        effect={'coverflow'}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 5,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper lg:rounded-t-none"
      >
        {bannerData.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <a href={item.link}>
              <div
                class="rounded-xl h-48 lg:h-96 p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div class="rounded-xl absolute bg-black/50 inset-0 z-0"></div>
                <div class="relative flex flex-row items-end max-w-screen-xl mx-auto">
                  <div class="md:p-6 rounded-xl h-full flex flex-col w-full z-10 ">
                    <h2 data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" class="text-2xl md:text-4xl mt-2 my-auto flex items-center text-white font-bold">
                      {nl2br(item.title)}
                    </h2>
                    <p data-aos="fade-left" data-aos-duration="700" data-aos-delay="500" class="text-md md:text-2xl mt-2 my-auto flex items-center text-white">
                      바로가기 →
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <main
        class="my-1 md:pt-16 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto max-w-screen-lg xl:max-w-screen-xl mx-auto"
      >
        <div class="md:grid md:grid-cols-2">
          <div class="md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col rounded-xl">
            <h3
              class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300"
            >
              <span>상점 인기 상품</span>
              <button class="ml-2">
                <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </h3>

            <div class="grid m-0  grid-cols-2  space-x-4 overflow-x-scroll flex justify-center items-center w-full ">
              {shopData.map((item, index) => (
                <a href={item.isCash == 1 ? "/shop" : "/shop"}>
                  <div
                    class="relative flex flex-col justify-between bg-blue-900 shadow-md rounded-xl transform ease-in duration-100 active:scale-95 bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center shadow-md h-64 my-2"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                    key={index}
                  >
                    <div class="absolute bg-gradient-to-b from-transparent to-black  opacity-50 inset-0 z-0"></div>
                    <div class="relative flex flex-row items-end  h-72 w-full ">
                      <div class="p-6 rounded-xl  flex flex-col w-full z-10 ">
                        <h2 class="text-sm flex items-center text-white font-normal">
                          {item.merchant}
                        </h2>
                        <h4 class="mt-1 text-white text-xl font-bold leading-tight truncate">
                          {item.product}
                        </h4>
                        <div class="flex pt-4  text-sm text-gray-300">
                          <div class="flex items-center font-medium text-white ">
                            {item.price}
                            {item.isCash == 1 ? "원" : "코인"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div class="md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col rounded-xl">
            <h3
              class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300"
            >
              <span>혜택 참여하기</span>
              <button class="ml-2">
                <GiftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </h3>

            <div className="mx-auto w-full md:max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
                {newsData.map((item, index) => (
                  <a href="/reward">
                    <div
                      key={item.postid}
                      className="group relative rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <div className="mt-4 flex justify-between">
                        <div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.author}
                          </p>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-200">
                            <img
                              src="https://coin.pcor.me/resources/images/pluscoin.svg"
                              class="h-4 mr-1 inline-block"
                              alt="Coin"
                            />
                            {item.reward.toLocaleString() + "코인 지급"}
                          </p>
                        </div>
                        <div className="justify-end aspect-square w-24 h-24 overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75">
                          <img
                            src={item.thumbnail}
                            alt="상품 미리보기 이미지"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
