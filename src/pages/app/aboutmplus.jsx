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
  Metro+
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>Metro+</span>
				</h3>
<p class="flex items-center py-4 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            이 세상 모-든 교통덕후를 이음, 메트로+.</p>
            <a href="https://kr.dicoall.com/i/977198448266870824"
class="mt-3 px-3 ml-4 bg-purple-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-purple-600">
서버 참여하기
</a>
<a href="https://kr.dicoall.com/server/977198448266870824"
class="mt-3 px-3 ml-4 bg-gray-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-600">
Dicoall
</a>


<div class="pt-12 pb-1 md:px-4">

<div class="container mx-auto flex flex-col items-center py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container mx-auto">
<div class="block">
<div class="">
<div class="text-3xl text-blue-500 text-left leading-tight h-3">“</div>
<img src="https://media.discordapp.net/attachments/936620635889729558/1078573800326713384/1cc5ccd7aa4e7d20.png" alt="이 세상 모든 교통덕후를 이음" class="h-12"></img>
<div class="text-3xl text-blue-500 text-right leading-tight h-3">”</div>
</div>
</div>

<p class="text-lg">
  지난 2022년, 철도 동호인을 위한 디스코드 서버에서 출발한 메트로+는 이제 굿즈도 판매하고 이벤트도 운영하는 규모있는 플랫폼으로 발전했어요.<br/>
  비록 지금은 시련을 맞이하고 있지만, 그 시련을 극복하기 위해 Plus의 일원이 되어 철도 동호인 뿐만 아닌 모든 교통 동호인을 환영하는 플랫폼으로 발전하려고 해요.<br/>
  앞으로 생겨 날 교통 자료 공유, 가상 철도 홈페이지, 오프라인 미팅 캘린더는 그런 계획의 첫발을 내딛는 것이라고 생각해주세요.
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
