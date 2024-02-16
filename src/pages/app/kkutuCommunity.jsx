import React, { Fragment, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Timeline } from 'react-twitter-widgets'
import { register } from 'swiper/element/bundle';

import WidgetBot from '@widgetbot/react-embed'

export const KkutuCommunity = (props) => {
  const [xopen, setxOpen] = useState(false)
  const [dopen, setdOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
<div className="w-[1280px] h-[680px] bg-white flex-col justify-center items-start inline-flex">
  <div className="w-[1280px] h-[510px]">
  <swiper-container pagination={true} className="mySwiper"         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} >
          <swiper-slide>  <a href="https://cafe.naver.com/pluskkutu/58" target="_blank">
  <img src="https://imagestorage.pcor.me/images/2024/02/16/welcomeEvent.png" className="w-[1280px] h-[510px]"/>
  </a></swiper-slide>
    <swiper-slide>  <a href="https://cafe.naver.com/pluskkutu/63" target="_blank">
  <img src="https://imagestorage.pcor.me/images/2024/02/16/HotTime.png" className="w-[1280px] h-[510px]"/>
  </a></swiper-slide>
      </swiper-container>
      </div>
  <div className="self-stretch h-[170px] relative">
    <div onClick={() => setdOpen(true)} className="w-[640px] h-[170px] left-0 top-0 absolute">
      <img className="w-[640px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/02/16/Discord-Banner.png" />
    </div>
    <div className="w-[640px] h-[170px] left-[640px] top-0 absolute">
      <img className="w-[640px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/02/16/Cafe-Banner.png" />
    </div>
  </div>
</div>

<Transition.Root show={dopen} as={Fragment}>
<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setxOpen}>
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  </Transition.Child>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <Dialog.Panel className="relative transform overflow-hidden text-left transition-all sm:my-8 ">
          <div className="">
          <WidgetBot
    server="1207032847152578670"
    channel="1207039278144684042"
    height="540"
    width="800"
  />
          </div>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center text-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => setdOpen(false)}
              ref={cancelButtonRef}
            >
              닫기
            </button>
            <a href="https://discord.gg/yrCCtHYT3U" target="_blank">
          <button
              type="button"
              className="mt-3 mr-2 inline-flex w-full justify-center text-xl bg-gradient-to-r from-indigo-500 to-pink-400 text-white px-3 py-2 text-sm font-bold shadow-sm ring-1 ring-inset ring-purple-500 hover:bg-gray-900 sm:mt-0 sm:w-auto"
              onClick={() => setdOpen(false)}
            >
              공식 서버 참여하기
            </button>
            </a>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition.Root>
</div>
  );
};
