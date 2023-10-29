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
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />

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
