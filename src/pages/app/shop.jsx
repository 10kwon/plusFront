import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header.prod.jsx";
import Footer from "../../components/footer/footer.prod.jsx";
import ShopTab from "../../components/shopTypes.jsx";
import nl2br from "react-nl2br";
import { Card, Avatar, Tabs, Breadcrumb } from "flowbite-react";
import {
  HomeIcon,
  ChevronRightIcon,
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Iframe from "react-iframe";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export const ShopPage = (props) => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/shopPopular.php")
      .then((response) => setShopData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [shopiData, setShopiData] = useState(null); // null로 초기화
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/shopInventory.php", {
        withCredentials: true,
        credentials: "same-origin",
      })
      .then((response) => setShopiData(response.data))
      .catch((error) => setShopiData([])); // 빈 배열로 초기화
  }, []);

  const [wopen, setWOpen] = useState(false);
  const [isPay, setPay] = useState(false);
  const [shopfData, setShopfData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this line

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/shopList.php")
      .then((response) => setShopfData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filterProductsByCategory = (category) => {
    const categoryInt = parseInt(category, 10); // Convert selected category to integer
    console.log(category);
    console.log(categoryInt);
    if (isNaN(categoryInt) || categoryInt == null) {
      setFilteredProducts(shopfData); // If no category selected or invalid category, show all products
    } else if (categoryInt == 7) {
      const sortedByPurchaseCount = [...shopfData].sort(
        (a, b) => b.purchaseCount - a.purchaseCount
      );
      setFilteredProducts(sortedByPurchaseCount);
    } else if (categoryInt == 8) {
      const sortedByPurchaseCount = [...shopfData].sort(
        (a, b) => a.stockCount - b.stockCount
      );
      setFilteredProducts(sortedByPurchaseCount);
    } else if (categoryInt == 9) {
      const sortedByPurchaseCount = [...shopfData].sort(
        (a, b) => b.viewCount - a.viewCount
      );
      setFilteredProducts(sortedByPurchaseCount);
    } else {
      const filtered = shopfData.filter(
        (item) => item.productCategory === categoryInt
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    filterProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setIsPopupOpen(true);
  };

  const handleModalOpen = (iid) => {
    setSelectedItemId(iid);
  };

  useEffect(() => {
    AOS.init();
    setFilteredProducts(shopfData);
  })

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <Header
        isLogin={props.isLogin}
        userName={props.userName}
        userEmail={props.userEmail}
        userImage={props.userImage}
        userCoin={props.userCoin}
        userCash={props.userCash}
      />
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {shopData.map((item, index) => (
          <SwiperSlide key={index}>
              <div
                class="h-64 lg:h-96 p-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.feature_Bg})` }}
                onClick={() => handleProductClick(item)}
              >
                <div class="absolute bg-black/50 inset-0 z-0"></div>
                <div class="relative flex items-end max-w-screen-xl mx-auto">
                  <div class="md:p-6 rounded-xl h-full flex justify-between w-full z-10 " >
                 <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                  <p class="text-lg md:text-2xl mt-4 my-auto flex items-center text-white">
                    {nl2br(item.merchant)}
                    </p>
                    <p class="font-semibold text-lg md:text-2xl my-auto flex items-center text-white">
                    {nl2br(item.product)}
                    </p>
                    <h2 class="text-3xl md:text-5xl mt-4 my-auto flex items-center text-white font-bold">
                      {nl2br(item.feature_Title)}
                    </h2>
                    <p class="text-lg md:text-2xl mt-4 my-auto flex items-center text-white">
                    {item.price.toLocaleString()}{item.isCash == 1 ? "원" : "코인"}
                    </p>
                    </div> 
                    <div className="aspect-square hidden lg:block items-end" data-aos="fade-left" data-aos-duration="1000">
                    <img src={item.thumbnail} className=" h-72"/>
                    </div> 

                  </div>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="mx-auto w-full max-w-screen-xl">
        <main
          class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <select
            value={selectedCategory}
            className="rounded-xl mt-2 lg:ml-2 text-black"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">카테고리를 선택하세요</option>
            <optgroup label="정렬">
              <option value="7">인기 상품순</option>
              <option value="8">품절 임박순</option>
              <option value="9">추천 상품순</option>
            </optgroup>
            <optgroup label="카테고리">
              <option value="1">PlusCoin 아이템</option>
              <option value="2">음료</option>
              <option value="3">상품권</option>
              <option value="4">음식</option>
              <option value="5">편의점</option>
              <option value="6">디지털 아이템</option>
            </optgroup>
            {/* Add more options as needed */}
          </select>

          {/* Render the products based on the selected category */}
          <div className="">
            <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((item, index) => (
                  <div
                    key={item.iid}
                    className="group relative rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => handleProductClick(item)}
                  >
                    <div className="hidden lg:block aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:h-60 lg:w-60">
                      <img
                        src={item.thumbnail}
                        alt="상품 미리보기 이미지"
                        className="dark:bg-gray-900 h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.merchant}
                        </p>
                        <h3 className="text-sm text-gray-700 dark:text-gray-200">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {item.product}
                        </h3>
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {item.price.toLocaleString()}
                          {item.isCash == 1 ? "원" : "코인"}
                        </p>
                      </div>
                      <div className="lg:hidden w-24 h-24 overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:h-60 lg:w-60">
                        <img
                          src={item.thumbnail}
                          alt="상품 미리보기 이미지"
                          className="dark:bg-gray-900 h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Transition.Root show={isPopupOpen} as={Fragment}>
        <Dialog as="div" className="relative z-100" onClose={setIsPopupOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setIsPopupOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-900 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          상세 보기
                        </Dialog.Title>
                      </div>
                      {isPopupOpen && (
                        <>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="w-full overflow-hidden rounded-xl bg-gray-200">
                      <Zoom>
                      <img
                    src={selectedProduct.thumbnail}
                    alt="상품 미리보기 이미지"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  </Zoom>
                  </div>
                  <p class="text-gray-500 text-xs text-center">이미지를 클릭하면 크게 볼 수 있어요</p>
                  <div class="pt-4">
                  <h4 class="dark:text-white">{selectedProduct.merchant}</h4>
                  <h3 class="font-bold text-2xl dark:text-white">{selectedProduct.product}</h3>
                  <h4 class="text-gray-500">{selectedProduct.purchaseCount}회 구매 | 1인 구매 한도 {selectedProduct.purchaseLimit}개</h4>
                  </div>
                  <div class="py-2 border-b">
                  <h3 class="font-bold text-2xl text-blue-500 dark:text-blue-300">{selectedProduct.price.toLocaleString()}{selectedProduct.isCash == 1 ? "원" : "코인"}</h3>
                  </div>
                  <div class="py-2 border-b dark:text-white ">
                  
                  <div class="bg-red-100 dark:bg-red-950 dark:text-white rounded-xl px-2 py-2 text-center mb-4">
                    {
                    selectedProduct.isCash == 0 ?
                    <div><ExclamationCircleIcon class="h-6 w-6 text-red-500 dark:text-red-300 inline-block mr-1"/> PlusCoin 상점에서 판매하는 모든 상품은 유료로 결제되지 않았다면 <span class="text-red-500 dark:text-red-300">환불할 수 없어요</span>.</div>
                    :
                    <div><ExclamationCircleIcon class="h-6 w-6 text-red-500 dark:text-red-300 inline-block mr-1"/> 미성년자의 거래 시 미성년자 또는 법정 대리인에 의해 plus@sqlare.com으로 계정의 닉네임 또는 ID와 송금확인증을 보내면 아이템 비활성화 및 감가상각을 조건으로 환불받을 수 있어요.</div>
                    }
                              
                            </div>
                            {nl2br(selectedProduct.productDescription)}
                          </div>
                          <div class="px-4 bottom-0 sticky w-full">
                            <button
                              onClick={() => setWOpen(true)}
                              class="mt-3 px-3 w-full bg-blue-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700"
                            >
                              구매하기
                            </button>
                          </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

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
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl lg:max-w-screen-sm">
                  <div className="md:rounded-xl relative flex w-full items-center bg-white dark:bg-gray-800">
                    <button
                      type="button"
                      className="z-100 absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setWOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {isPay && (
                      <Iframe
                        url={`https://mapi.pcor.me/form/buy${
                          selectedProduct.isCash == 1 ? "_cash" : ""
                        }.php?iid=${selectedProduct.iid}`}
                        id=""
                        className="w-full h-128 mt-8"
                        display="block"
                        position="relative"
                      />
                      )}
                    {
                      isPopupOpen && (
                  <div class="w-full h-128 mt-8 relative block dark:text-white">
                  <div class="px-6 py-8 md:px-16 md:py-16">
                  <div className="text-center">
                  <h3 class="text-xl md:text-2xl font-semibold">{selectedProduct.merchant}</h3>
                  <h3 class="text-xl md:text-3xl font-bold mb-4">{selectedProduct.product}</h3>
                  <h3 class="text-3xl md:text-4xl font-bold">{selectedProduct.price.toLocaleString()}{selectedProduct.isCash == 1 ? "원" : "코인"}</h3>
                  </div>
                  <div class="py-2 border-b dark:border-gray-500"></div>
                  <div class="bg-gray-100 dark:bg-gray-700 rounded-xl px-2 py-2 mt-4">
                  <strong class="text-lg">{selectedProduct.isCash == 1 ? "캐시를 출금할 계정의 Sekai" : "코인을 출금할 Sekai"}</strong><br/>
                  {props.userSekai}
                  </div>

                  <div class="bg-gray-100 dark:bg-gray-700 rounded-xl px-2 py-2 mt-4">
                  <strong class="text-lg">결제 예정 금액</strong><br/>
                  결제 이전 : {selectedProduct.isCash == 1 ? props.userCash+"원" : props.userCoin+"코인"}<br/>
                  상품 금액 : {selectedProduct.price.toLocaleString()}{selectedProduct.isCash == 1 ? "원" : "코인"}<br/>
                  결제 이후 : {selectedProduct.isCash == 1 ? props.userCash - selectedProduct.price : props.userCoin - selectedProduct.price}{selectedProduct.isCash == 1 ? "원" : "코인"}
                  </div>
                  
                  <div class="py-2 border-b dark:border-gray-500"></div>
                  <p className="text-center py-4">결제 후에는 환불이 어려워요.<br/>구매를 계속할까요?</p>
                  <a
  href={`https://mapi.pcor.me/form/buy${
    selectedProduct.isCash == 1 ? "_cash" : ""
  }.php?iid=${selectedProduct.iid}`}
  target="_blank"
  onClick={() => setWOpen(false)}
  class="w-full mt-3 px-3 bg-blue-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700"
>
  {selectedProduct.price.toLocaleString()}
  {selectedProduct.isCash == 1 ? "원" : "코인"} 결제
</a>


                  </div>
                  </div>
                  )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Footer />
    </div>
  );
};
