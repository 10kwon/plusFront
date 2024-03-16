import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import nl2br from "react-nl2br";
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon, XMarkIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Iframe from "react-iframe";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const GamePage = (props) => {
  const [wopen, setWOpen] = useState(false);

  const [shopfData, setShopfData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this line

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/board/newsList.php')
      .then(response => setShopfData(response.data))
      //.then(response => setFilteredProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setWOpen(true);
  };


  const handleModalOpen = (iid) => {
    setSelectedItemId(iid);
  };

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
 게임
  </Breadcrumb.Item>
</Breadcrumb>
<h3
					class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>게임</span>
				</h3>




        <h2
					class=" pt-8 pb-1 md:px-4 text-2xl font-bold
					capitalize dark:text-gray-300 text-center w-full">
            Plus와 파트너에서 운영하는 게임을<br/>
            지금 즐겨보세요
				</h2>
        <div class="md:flex overflow-x-scroll md:justify-center md:items-center">
</div>


      </main>
      </div>
   
      <Transition.Root show={wopen} as={Fragment}>
      <Dialog as="div" className="relative z-100" onClose={setWOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition w-screen">
                <div className="relative flex w-full items-center overflow-hidden bg-white ">
                  <button
                    type="button"
                    className="z-100 absolute right-4 top-4 text-white hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setWOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {wopen && (
                  <Iframe url={`https://mapi.pcor.me/form/open_news.php?postid=${selectedProduct.postid}`}
        id=""
        className="w-screen h-screen"
        display="block"
        position="relative"/>
                  )}
                  {/*
                  <div class="w-full h-128 mt-8 relative block">
                  <div class="px-6 py-8 md:px-16 md:py-16">
                  <h3 class="text-xl md:text-2xl font-semibold">결제할 상품의 이름</h3>
                  <h3 class="text-3xl md:text-4xl font-bold">697,400,400 코인</h3>
                  
                  <div class="py-2 border-b"></div>
                  <div class="bg-gray-100 rounded-xl px-2 py-2 mt-4">
                  <strong class="text-lg">PlusCoin Vault 계좌</strong><br/>
                  10kwonadmin
                  </div>
                  </div>
                  </div>*/}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

        <Footer/>
   </div>

  );
};
