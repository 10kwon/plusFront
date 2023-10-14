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
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />
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
           <p class="text-white text-center text-xl md:text-2xl" data-aos="fade-up" data-aos-duration="1000"><span class="hidden md:block" >만들어 봐, 네 플코의 빛" </span><strong>PlusCoin 디자인 공모전</strong><br/>행사기간: 2023.10.11 조기 종료<br/>당선 된 1 시안~3 시안 4000 플코 지급 및 등록카드 상점 업로드 기회!</p>
           </div>
  </div>
  <video autoPlay={true} loop muted 
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"> 
            <source src="/resources/rcp.webm"
                type="video/webm"/> 
        </video> 
</div>

        <Footer/>
   </div>
    
  );
};
