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
    <div className="w-[1280px] h-[680px] bg-white justify-center items-start inline-flex">
  <div className="w-[118px] h-[680px] relative">
    <div className="w-[118px] h-[680px] left-0 top-0 absolute bg-white" />
    <a href="https://cafe.naver.com/pluskkutu" target="_blank">
    <div className="w-[75px] h-[75px] pl-[10.65px] pr-[10.64px] pt-[9.38px] pb-[9.37px] left-[22px] top-[10px] absolute justify-center items-center inline-flex">
    <FontAwesomeIcon icon={faCoffee} className="w-[50px] h-[50px] text-[#2db400]"/>
    </div>
    </a>

    <div onClick={() => setxOpen(true)} className="w-[75px] h-[75px] pl-[10.65px] pr-[10.64px] pt-[9.38px] pb-[9.37px] left-[22px] top-[95px] absolute justify-center items-center inline-flex">
    <FontAwesomeIcon icon={faXTwitter} className="w-[50px] h-[50px] text-[#000000]"/>
    </div>

    <a href="https://youtube.com/@PlusPlatforms" target="_blank">
    <div className="w-[75px] h-[75px] pl-[10.65px] pr-[10.64px] pt-[9.38px] pb-[9.37px] left-[22px] top-[180px] absolute justify-center items-center inline-flex">
    <FontAwesomeIcon icon={faYoutube} className="w-[50px] h-[50px] text-[#ff0000]"/>
    </div>
    </a>

    <div onClick={() => setdOpen(true)} className="w-[75px] h-[75px] pl-[10.65px] pr-[10.64px] pt-[9.38px] pb-[9.37px] left-[22px] top-[265px] absolute justify-center items-center inline-flex">
    <FontAwesomeIcon icon={faDiscord} className="w-[50px] h-[50px] text-[#5865f2]"/>
    </div>
  </div>


<div className=" w-[680px] h-[680px]">
  <swiper-container pagination={true} className="mySwiper"         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} >
          <swiper-slide>  <a href="https://cafe.naver.com/pluskkutu/58" target="_blank">
  <img src="https://imagestorage.pcor.me/images/2024/02/07/welcomeEvent.png" className="w-[680px] h-[680px]"/>
  </a></swiper-slide>
    <swiper-slide>  <a href="https://cafe.naver.com/pluskkutu/63" target="_blank">
  <img src="https://imagestorage.pcor.me/images/2024/02/07/Placehplder08bd1dabd39f56e7.png" className="w-[680px] h-[680px]"/>
  </a></swiper-slide>
        <swiper-slide>  <a href="https://cafe.naver.com/pluskkutu/45?tc=shared_link" target="_blank">
  <img src="https://imagestorage.pcor.me/images/2024/01/21/image26f6be73bb78647d.png" className="w-[680px] h-[680px]"/>
  </a></swiper-slide>
      </swiper-container>
      </div>

  <div className="w-[482px] self-stretch relative">
    <a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=31109813&search.menuid=14&search.boardtype=L" target="_blank">
    <div className="w-[482px] h-[170px] left-0 top-[510px] absolute">
    <img className="w-[482px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/02/07/BugReport.png" />
    </div>
    </a>
    <a href="https://plus.oqupie.com/portal/2568" target="_blank">
    <div className="w-[482px] h-[170px] left-0 top-[340px] absolute">
      <img className="w-[482px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/02/07/Maintenance.png" />
    </div>
    </a>
    <a href="https://discord.gg/hmBgZ3nVSA" target="_blank">
      <div className="w-[482px] h-[170px] left-0 top-0 absolute">
      <img className="w-[482px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/01/25/1136_20240125002035.png" />
      </div>
    </a>
    <a href="https://cafe.naver.com/ArticleList.nhn?search.clubid=31109813&search.menuid=7&search.boardtype=L" target="_blank">
      <div className="w-[482px] h-[170px] left-0 top-[170px] absolute">
      <img className="w-[482px] h-[170px] left-0 top-0 absolute object-cover object-center bg-cover" src="https://imagestorage.pcor.me/images/2024/02/07/Notice.png" />
      </div>
    </a>
  </div>
</div>

<Transition.Root show={xopen} as={Fragment}>
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
                  <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'PlusPlatforms'
          }}
          options={{
            height: '540',
            width: '800'
          }}
        />
          </div>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center text-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => setxOpen(false)}
              ref={cancelButtonRef}
            >
              닫기
            </button>
            <a href="https://x.com/@PlusPlatforms" target="_blank">
          <button
              type="button"
              className="mt-3 mr-2 inline-flex w-full justify-center text-xl bg-black text-white px-3 py-2 text-sm font-bold shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-900 sm:mt-0 sm:w-auto"
              onClick={() => setxOpen(false)}
            >
              X에서 자세히 알아보기
            </button>
            </a>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition.Root>


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
    server="1144989383569715291"
    channel="1183794227684069487"
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
            <a href="https://discord.com/invite/GKpubCUmtu" target="_blank">
          <button
              type="button"
              className="mt-3 mr-2 inline-flex w-full justify-center text-xl bg-gradient-to-r from-indigo-500 to-pink-400 text-white px-3 py-2 text-sm font-bold shadow-sm ring-1 ring-inset ring-purple-500 hover:bg-gray-900 sm:mt-0 sm:w-auto"
              onClick={() => setdOpen(false)}
            >
              PSP 참여하기
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
