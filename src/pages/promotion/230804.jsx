import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import AOS from "aos";
import "aos/dist/aos.css";


export const Event230804Page = (props) => {

  useEffect(() => {
    AOS.init();
  })

  const [shopfData, setShopfData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this line
  useEffect(() => {
    axios.get('https://nmapi.pcor.me/api/board/shopList')
      .then(response => setShopfData(response.data))
      .catch(error => console.log(error));
  }, []);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProductsByCategory = (category) => {
    const categoryInt = parseInt(category, 10); // Convert selected category to integer
    if (isNaN(categoryInt)) {
      setFilteredProducts(shopfData); // If no category selected or invalid category, show all products
    } else {
      const filtered = shopfData.filter((item) => item.productCategory === categoryInt);
      setFilteredProducts(filtered);
    }
  };
  

  useEffect(() => {
    filterProductsByCategory(7);
  }, [3]);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setIsPopupOpen(true);
  };


  const handleModalOpen = (iid) => {
    setSelectedItemId(iid);
  };

  const stats = [
    { id: 1, name: '행사 기간', value: '8월 4일~11일' },
    { id: 2, name: '당첨자 발표', value: '8월 말 ~ 9월 초' },
    { id: 3, name: '참여 대상', value: '전 사용자' },
  ]

  return (
    <div>
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />
        <div class="bg-gray-800 bg-center bg-fixed bg-no-repeat bg-center bg-cover h-1/2 relative py-16" style={{ backgroundImage: `url('/idea-concept-with-light-bulb.jpg')` }}>
		<div class="flex items-center justify-center">
			<div class="mx-2 text-center">

				<h1 class="text-black font-extrabold text-4xl xs:text-5xl md:text-8xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000">
        <img src="/resources/images/luckyItemBox.png" alt="행운의 아이템박스 로고" class="md:w-1/2 mx-auto"/>
           </h1>
           <p></p>
        </div>
    </div>
    <div className=" absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="w-full h-full aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

      {/* Render the products based on the selected category */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((item, index) => (
              <div key={item.iid} className="group relative" onClick={() => handleProductClick(item)}><div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.thumbnail}
                  alt="상품 미리보기 이미지"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                <p className="mt-1 text-sm text-gray-500">{item.merchant}</p>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.product}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{item.price}코인</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Popup component */}
    {isPopupOpen && (
        
        <div as="div" className="relative z-60">
         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

       <div className="fixed inset-0 z-60 overflow-y-auto">
         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
             <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
               <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                 <h4 class="font-bold text-xl">경품 설명</h4>
               {selectedProduct.purchaseCount}명 구매<br/>
               {selectedProduct.productDescription}<br/>
               주의: 한번 구매한 상품은 환불할 수 없어요.
               </div>
               <div className="bg-gray-50 px-4 pt-3 pb-16 sm:flex sm:flex-row-reverse sm:px-6">
                 <a href={`https://nmapi.pcor.me/form/buy?iid=${selectedProduct.iid}`}>
                 <button
                   type="button"
                   className="inline-flex w-full justify-center rounded-xl bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                   onClick={() => setIsPopupOpen(false)}
                 >
                   응모하기
                 </button>
                 </a>
                 <button
                   type="button"
                   className="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                   onClick={() => setIsPopupOpen(false)}
                 >
                   닫기
                 </button>
               </div>
             </div>
         </div>
       </div>
     </div>
)}
        <Footer/>
   </div>
    
  );
};
