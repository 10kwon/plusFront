import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const AboutgPage = (props) => {

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
  Gaming+
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>Gaming+</span>
				</h3>
<p class="flex items-center py-4 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            캐주얼한 게임에 어울리는 캐주얼한 포인트, PlusCoin과 함께하는 Gaming+</p>
            <a href="#"
class="mt-3 px-3 ml-4 bg-yellow-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-yellow-500">
홍보페이지 오픈 예정
</a>


<div class="pt-12 pb-1 md:px-4">


<div class="container mx-auto flex flex-col items-center py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container mx-auto">
<div class="block">
<div class="">
<div class="text-3xl text-blue-500 text-left leading-tight h-3">“</div>
<p class="text-2xl text-blue-500 font-bold px-5">PlusCoin과 함께하는 새로운 캐주얼 게이밍, Gaming+로 시작해요.</p>
<div class="text-3xl text-blue-500 text-right leading-tight h-3">”</div>
</div>
</div>
<p class="text-lg">
  Gaming+로 게임을 플레이하여 포인트를 얻고, 잃으며 기프티콘과 같은 재화로 교환하여 성취감을 만들어요.<br/>
  Gaming+는 Plus에서 운영하는 모든 게임들의 포털 사이트와 같은 존재가 되려고 해요.
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
