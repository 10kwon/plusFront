import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import Iframe from 'react-iframe';

export const CardPage = (props) => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const iframe = document.getElementById("iframeId"); // Replace "iframeId" with the actual ID of the iframe
    if (iframe) {
      const updateIframeHeight = () => {
        setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
      };
      iframe.addEventListener("load", updateIframeHeight);
      return () => {
        iframe.removeEventListener("load", updateIframeHeight);
      };
    }
  }, []);

if (props.isLogin == 0){
  //window.location.href="/signin";
}

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
 설정
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>등록카드 설정</span>
				</h3>
</main>
</div>
<div class="min-h-screen">
        <Iframe url="https://mapi.pcor.me/profilecard.php"
        id="iframeId"
        className="w-full h-screen"
        display="block"
        position="relative"/>
	</div>
        <Footer/>
        
   </div>
    
  );
};
