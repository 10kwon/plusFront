import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import AOS from "aos";
import "aos/dist/aos.css";


export const Event231008Page = (props) => {

  useEffect(() => {
    AOS.init();
  })


  return (
    <div>
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
        <div class="relative flex items-center justify-center h-screen overflow-hidden">
  <div
    class="relative flex items-center justify-center h-screen overflow-hidden z-30 w-full bg-black/50"
  >
    <div >
				<h1 class="text-black font-extrabold text-4xl xs:text-5xl md:text-8xl leading-relaxed" >
        <img src="/resources/images/title_design.png" alt="디자인공모전 로고" class="md:w-128 mx-auto" data-aos="fade-down" data-aos-duration="1000"/>
           </h1>
           <div class="md:h-96"></div>
           <div class="h-48"></div>
           <p class="text-white text-center text-xl md:text-2xl" data-aos="fade-up" data-aos-duration="1000"><span class="hidden md:block" >만들어 봐, 네 플코의 빛" </span><strong>PlusCoin 디자인 공모전</strong><br/>행사기간: ~2023.11.18<br/>당선 된 1 시안~3 시안 4000 플코 지급 및 등록카드 상점 업로드 기회!</p>
           </div>
  </div>
  <video autoPlay={true} loop muted 
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"> 
            <source src="/resources/rcp.webm"
                type="video/webm"/> 
        </video> 
</div>

        <div class="bg-gray-800 text-white relative py-16">
        <div class="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">신청 절차</h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            아래 공모 양식 다운로드 후 카드를 디자인 하여 메일을 보내 주세요.<br/>
            Word 2013 이상 버전으로 실행해야 제출 문서가 정상적으로 표시돼요.
          </p>
          <div class="flex">
          <a href="/apply.docx"
class="mt-5 px-3 mr-2 bg-blue-500 font-bold text-white text-center py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-600">
제출용 문서 (*.DOCX)
</a>
          <a href="https://www.figma.com/community/file/1293222287316295832/pluscoin"
class="mt-5 px-3 mr-2 bg-blue-500 font-bold text-white text-center py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-600">
디자인 가이드 (Figma)
</a>
          <a href="mailto:support@pcor.me"
class="mt-5 px-3 mr-2 bg-gray-500 font-bold text-white text-center py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-600">
문의하기
</a>
</div>
        </div>
    </div>

        <Footer/>
   </div>
    
  );
};
