import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const SekaiIssuePage = (props) => {



  return (
    <>
    <div class="h-64 lg:h-96"></div>
    <div class="m-auto max-w-lg ">
            <Swiper 
        spaceBetween={30}
        centeredSlides={true} pagination={true} modules={[Pagination]} className="mySwiper block">
        <SwiperSlide >
          <div class="block pb-16">
        <h3 class="font-bold text-2xl w-full text-center mb-4">커뮤니티별로 복잡한<br/>
          포인트 시스템</h3>
          <img src="/onboarding/Group 4.png" alt="다양한 종류의 포인트" class="w-3/4 mx-auto" /></div></SwiperSlide>
      <SwiperSlide>
      <div class="block pb-16">
        <h3 class="font-bold text-2xl w-full text-center mb-4">관리하기 귀찮아서<br/>디젯포인트와 미라클이 만났어요</h3>
          <img src="/onboarding/Group 5.png" class="w-3/4 mx-auto" /></div></SwiperSlide>
          <SwiperSlide>
      <div class="block pb-16">
        <h3 class="font-bold text-2xl w-full text-center mb-4">미려한 디자인의<br/>등록카드를 경험하세요</h3>
          <img src="/onboarding/image 3.png" class="w-3/4 mx-auto" /></div></SwiperSlide>
          <SwiperSlide>
      <div class="block pb-16">
        <h3 class="font-bold text-2xl w-full text-center mb-4">상점에서 모은<br/>포인트를 소모하세요</h3>
          <img src="/onboarding/shop.png" class="h-48 mx-auto" /></div></SwiperSlide>
          </Swiper>
          <a href={`https://mapi.pcor.me/regSekai.php`}>
                  <button 
class="mx-auto mt-3 px-16 bg-blue-500 font-bold text-white text-center py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700">
Sekai 발급 받기
</button>
</a>
   </div>

   </>
  );
};
