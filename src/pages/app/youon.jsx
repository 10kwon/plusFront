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


export const YouOnPage = (props) => {

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
          <p class="text-white text-center text-8xl font-bold" data-aos="fade-up" data-aos-duration="1000">유온시</p><br/>
           <p class="text-white text-center text-xl md:text-2xl" data-aos="fade-up" data-aos-duration="1000">Minecraft 서버 유온시에서 도시를 건축해 보아요!</p><br/>
          <div class="mx-auto justify-center items-center flex">
            <a href="https://discord.gg/UTzP6dyTTj">
          <button class="flex items-center justify-center text-white text-lg lg:text-3xl h-full px-2 lg:py-4 lg:px-12 transform ease-in duration-100 active:scale-95 bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 lg:hover:text-4xl"><span class="font-bold tracking-wide">게임시작</span></button>
          </a></div>
           </div>
  </div>
        <img src="https://imagestorage.pcor.me/images/2024/01/21/image.png" class="absolute z-10 w-auto min-w-full min-h-full max-w-none"></img>
</div>
        <Footer/>
   </div>
    
  );
};
