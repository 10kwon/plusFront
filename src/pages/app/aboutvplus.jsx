import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const AboutvPage = (props) => {

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
  Virtual+
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>Virtual+</span>
				</h3>
<p class="flex items-center py-4 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300">
            요즘 인기있는 건 가상 세계! Virtual+로 가상 세계에 한발짝 더 가까워져요.</p>

<div class="pt-12 pb-1 md:px-4">


<div class="container mx-auto flex flex-col items-center py-2">
<div class="max-w-screen-xl " id="ceoIntroduction">
<div class="container mx-auto">
<div class="block">
<div class="">
<div class="text-3xl text-blue-500 text-left leading-tight h-3">“</div>
<p class="text-2xl text-blue-500 font-bold px-5">MPPoint와 함께하는 새로운 캐주얼 게이밍, Gaming+로 시작해요.</p>
<div class="text-3xl text-blue-500 text-right leading-tight h-3">”</div>
</div>
</div>
<p class="text-lg">
  계획중에 있어요.
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
