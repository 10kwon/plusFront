import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import {Tab} from '@headlessui/react';
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

        <div class="border-b border-transparent pt-1 pb-1 md:px-4">
<Tab.Group>
      <Tab.List className="w-full -mb-px flex space-x-8 ">
        <Tab className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300' : 'border-transparent text-gray-900 dark:text-gray-100',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }>등록카드</Tab>
        <Tab className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300' : 'border-transparent text-gray-900 dark:text-gray-100',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }>데코</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
        <div class="min-h-screen mb-8">
        <Iframe url="https://mapi.pcor.me/profilecard.php"
        id="iframeId"
        className="w-full h-screen"
        display="block"
        position="relative"/>
	</div>
        </Tab.Panel>
        <Tab.Panel>
        <div class="min-h-screen mb-8">
        <Iframe url="https://mapi.pcor.me/profiledeco.php"
        id="iframeId"
        className="w-full h-screen"
        display="block"
        position="relative"/>
	</div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
</div>

        <Footer/>
        
   </div>
    
  );
};
