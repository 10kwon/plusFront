import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const AboutmPage = (props) => {

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />
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
  PSP
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>PSP</span>
				</h3>
<p class="flex items-center py-4 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            모든 덕후를 하나로, with PSP</p>
            <a href="https://discord.gg/GKpubCUmtu"
class="mt-3 px-3 ml-4 bg-gradient-to-r from-indigo-500 to-pink-400 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-purple-600">
서버 참여하기
</a>


<div class="pt-12 pb-1 md:px-4">

<div class="container mx-auto flex flex-col py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container">
<p class="text-lg">
당신의 디스코드 생활에 Plus가 될 Plus Social Platforms!<br/>
1년의 역사를 담은 교통 덕후 디스코드 Metro+를 계승한 PSP(Plus Social Platforms)는 Plus의 공식 커뮤니티로,
<br/>“모든 덕후를 하나로” 잇는 종합 교통덕후/서브컬처/게임/IT 디스코드 서버에요.<br/>
<br/>
이런 분들 와 주세요!<br/>
철덕, 버덕 등 교통덕후 모두 환영<br/>
최애의 아이 덕후, 이파리 모두 환영<br/>
트릭컬: 리바이브, 얼불춤, 프세카 플레이어 환영<br/>
삼엽충, 앱등이, Google 팬 모두 환영<br/>
<br/><br/>
우리 서버에서는<br/>
19금•정치 절대 사절<br/>
적정선의 친목<br/>
<br/><br/>
진보된 관리 시스템<br/>
Plus답게 깔끔한 서버 관리<br/>
관리자 5명+a의 24시간 채팅 단속<br/>
채팅 코인 PlusCoin을 통한 개인채널 구매

</p>
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
