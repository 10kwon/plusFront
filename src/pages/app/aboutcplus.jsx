import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const AboutcPage = (props) => {

  return (
    <div>
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
        <div class="mx-auto w-full max-w-screen-xl">
        <main
		class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">

<Breadcrumb class="pt-6 md:px-4" aria-label="Default breadcrumb example">
  <Breadcrumb.Item
  >
    메인
  </Breadcrumb.Item>
  <Breadcrumb.Item>
  Class+
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>Class+</span>
				</h3>
<p class="flex items-center py-4 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            교사 중심의 커뮤니티에서, 학생 중심의 커뮤니티로, 우리가 운영해서 더욱 자유로운 Class+</p>
            <a href="https://classplus.pcor.me"
class="mt-3 px-3 ml-4 bg-green-400 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-green-500">
웹사이트 방문하기
</a>


<div class="pt-12 pb-1 md:px-4">

<div class="container mx-auto flex flex-col items-center py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container mx-auto">
<div class="block">
<div class="">
<div class="text-3xl text-blue-500 text-left leading-tight h-3">“</div>
<p class="text-2xl text-blue-500 font-bold px-5">진보된 학급 경험, Class+로부터.</p>
<div class="text-3xl text-blue-500 text-right leading-tight h-3">”</div>
</div>
</div>
<img src="https://classplus.pcor.me/resources/images/heroImage.png" alt="Hero Image" class="h-64"></img>
<p class="text-lg">
Class+는 학생들이 주도하는 학급 커뮤니티와 교내 정보를 모바일에서 쉽게 접근할 수 있는 어플리케이션이에요.<br/>
학급 회장이나 학생회원들은 수업 일정, 과제, 행사 정보 등을 빠르게 전달하고, 학급 내 소외되는 학생 없이 모두가 적극적으로 참여할 수 있는 환경을 조성해요.<br/>
또한, 학생들끼리의 교류와 공유도 가능하여 학생들이 자유롭게 의견을 나누고 소통할 수 있어요.<br/>
클래스+와 함께 학생 주도의 새로운 학급 커뮤니티를 만들어 보아요!
</p>
<div class="mt-5 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
<div>
<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 lg:w-6 lg:h-6 dark:text-green-300">
<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"></path>
</svg>
</div>
<h3 class="mb-2 text-xl font-bold dark:text-white">학생, 교직원 외 출입 금지</h3>
<p class="text-gray-500 dark:text-gray-400">가입하는 순간부터 시작하는 학생, 교직원 인증을 통해 외부인이 들어올 염려도, 피해를 끼칠 염려도 하지 않아도 돼요.</p>
</div>
<div>
<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-400 lg:w-6 lg:h-6 dark:text-green-300">
<path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z"></path>
<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z" clip-rule="evenodd"></path>
</svg> </div>
<h3 class="mb-2 text-xl font-bold dark:text-white">전국의 학교와 이어주는 다리</h3>
<p class="text-gray-500 dark:text-gray-400">서울부터 부산까지 전국의 모든 학교가 소통할 수 있는 커뮤니티 기능을 제공해요.</p>
</div>
<div>
<div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-green-100 lg:h-12 lg:w-12 dark:bg-green-900">
<svg class="w-5 h-5 text-green-400 lg:w-6 lg:h-6 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
</div>
<h3 class="mb-2 text-xl font-bold dark:text-white">심플한 UI</h3>
<p class="text-gray-500 dark:text-gray-400">심플하면서도 간편한 UI를 통해 보다 편하고 보다 쉽게 앱을 사용할 수 있어요</p>
</div>
</div>
</div>
</div>
</div>
</div>

      </main>
      </div>
        <Footer/>
   </div>
    
  );
};
