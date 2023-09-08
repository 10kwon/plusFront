import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
export const AboutpPage = (props) => {

  useEffect(() => {
    AOS.init();
  })

  const people = [
    {
      name: '마넌',
      role: 'Plus 리더',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1698226856137527296/VkOkQMHU_400x400.jpg',
    },
    {
      name: '등대',
      role: 'Class+ 개발팀',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1586900429580816386/god7cKBM_400x400.jpg',
    },
    {
      name: '토끼',
      role: 'UI 디자이너',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1658030364307369989/bTacYB0a_400x400.jpg',
    },
  ]

  const links = [
    { name: '채용 공고', href: 'javascript:alert("현재 열린 채용공고가 없어요.")' },
  ]
  const stats = [
    { name: '원격 근무', value: '100%' },
    { name: '휴가', value: '무제한' },
    { name: '경력', value: '도움 안됨' },
    { name: '꼽주기', value: '쌉가능' },
  ]

  
  return (
    <div>
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
        <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80b3ff] to-[#89fca6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-transparent bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text font-bold tracking-tight text-6xl md:text-9xl" data-aos="fade-up" data-aos-duration="1000">
              모든&nbsp;<br/>플랫폼을&nbsp;<br/>하나로.
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-600" data-aos="fade-up" data-aos-duration="1000">
              사용자들을 위한 혁신을 추구하고, Plus라는 이름 아래 일관성 있는 플랫폼을 개발하고 있어요.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">팀원 소개</h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Plus의 팀원들을 만나보세요.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 md:grid-cols-6 sm:gap-y-12 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="items-center gap-x-6">
                <img className="h-16 w-16 rounded-full mx-auto" src={person.imageUrl} alt="" />
                <div class="text-center my-2">
                  <h3 className="text-base font-bold leading-7 text-xl tracking-tight text-gray-100">{person.name}</h3>
                  <p className="text-md font-semibold leading-6 text-blue-200">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

        <Footer/>
   </div>
    
  );
};
