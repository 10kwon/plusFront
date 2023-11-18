import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import AOS from "aos";
import "aos/dist/aos.css";


export const Event231118Page = (props) => {

  useEffect(() => {
    AOS.init();
  })

  const features = [
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    }
  ]

  return (
    <div>
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />
        <div class="relative flex items-center justify-center h-screen overflow-hidden">
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden z-30 w-full bg-black/50"
  >
    <div >
				<h1 class="text-black font-extrabold text-4xl xs:text-5xl md:text-8xl leading-relaxed" >
        <img src="/resources/images/title_osu.png" alt="osu! 배포 로고" class="md:w-128 mx-auto" data-aos="fade-down" data-aos-duration="1000"/>
           </h1><br/>
           <p class="text-white text-center text-xl md:text-2xl" data-aos="fade-up" data-aos-duration="1000">osu! 계정 연동하고 osu!mania, osu!를 위한 스킨 받아가세요</p>
           </div>
  </div>
  <video autoPlay={true} loop muted 
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"> 
            <source src="/resources/ad_PlcoOsu_1.mp4"
                type="video/mp4"/> 
        </video> 
</div>
<div className="overflow-hidden bg-white dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="lg:max-w-lg">
              <p className="text-4xl font-bold tracking-tight text-black dark:text-gray-100 sm:text-6xl">osu!에서 만나는<br/>Plus의 심플함과<br/>미려한 UI</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                osu!에서도 플러스럽게 깔끔한 UI를 경험해 보세요.<br/>
                보다 현대적인 osu! | osu! mania 테마를 Plus ID만 연동하면 무료로 제공해요.
              </p>
            </div>
          </div>
          <img
            src="https://imagestorage.pcor.me/images/2023/11/05/osu---Hige-Driver---Miracle-Sugite-Yabai-feat.-shully-Easy-2023-11-05--7_54_39.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            data-aos="fade-left" data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
<div className="dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-4xl" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-gray-100 sm:text-6xl">osu! 계정 연동</h2>
          <p className="mt-6 text-lg leading-8 text-black dark:text-gray-100">
            osu! 계정을 지금 연동하면 곧 출시되는 osu! 업적 시스템에서 관련 보상을 받거나, PlusCoin을 통해 등록카드에 osu! 관련 위젯을 달 수 있어요.
            <br/><br/>
            ⚠️ 로그인 전 Plus ID로 먼저 로그인 해야 해요. 이미 연동했다면 스킨 재 다운로드가 가능해요.
          </p>
        </div>
        <div className="max-w-md gap-x-4 dark:text-white" data-aos="fade-left" data-aos-duration="1000">
            <a href="https://mapi.pcor.me/oauth/osu.php?action=login"
class="mt-3 border-2 shadow-xl border-white px-6 text-2xl bg-pink-500 font-bold text-white text-center py-4 transform ease-in duration-100 active:scale-95 hover:bg-pink-600">
<LockClosedIcon className="h-6 inline-block mr-2"/>osu! 계정 지금 연동하기
</a>

            </div>
      </div>
    </div>
        <Footer/>
   </div>
    
  );
};
