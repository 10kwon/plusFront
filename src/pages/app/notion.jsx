import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const NotionPage = (props) => {



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
  Plus 알아보기
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>Plus 알아보기</span>
				</h3>
<p class="flex items-center pt-4 pb-12 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            모든 플랫폼을 잇는 Plus에 대해 알아봐요.</p>



<div class="pt-1 pb-1 md:px-4">

<div class="container mx-auto flex flex-col items-center py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container mx-auto">
<div class="block">
<div class="">
<div class="text-3xl text-blue-500 text-left leading-tight h-3"></div>
<p class="text-2xl text-blue-500 font-bold px-5">“다양한 컨텐츠를 한 곳에서, Plus.”</p>
<div class="text-3xl text-blue-500 text-right leading-tight h-3"></div>
</div>
</div>
<p class="text-lg">
  Metro+부터 PlusCoin에 이르기까지. Plus는 모든 플랫폼을 잇는 통합 브랜드예요.<br/>
  지난 2021년<span class="text-sm">(pcor.me 도메인 등록 기준)</span>부터 지금에 이르기까지, Plus는 다양한 프로젝트를 도전해봤고, 그 과정에서 씁슬한 실패도 맛봤죠.<br/><br/>
  하지만 이번 Plus를 통해 만들어지는 플랫폼 간의 일관성과 사용자 수를 더 끌어모으려 해요.<br/>
  기존에 시도하지 않았던 Gaming+나 Virtual+(버츄얼 마켓플레이스) 부문까지 도전해보려고 해요.<br/>
  아직 그 출발 단계라 많이 미비하지만, 앞으로의 모습을 기대해 주세요.
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
