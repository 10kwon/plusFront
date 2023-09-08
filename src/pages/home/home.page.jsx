import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';

import AOS from "aos";
import "aos/dist/aos.css";

import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import { Autoplay, Pagination, Navigation } from 'swiper';

import {Card, Avatar, Tabs} from 'flowbite-react';

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Canvas, useFrame } from '@react-three/fiber';
import RotatingImage from '../../components/regCardSpin';

import { ChevronRightIcon, MegaphoneIcon, GiftIcon, UserCircleIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

export const HomePage = (props) => {
  const navigate = useNavigate()
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/banner/index.php')
      .then(response => setBannerData(response.data))
      .catch(error => console.log(error));
  }, []);

  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/board/todayBlog.php')
      .then(response => setBlogData(response.data))
      .catch(error => console.log(error));
  }, []);

  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/board/todayTravel.php')
      .then(response => setEventData(response.data))
      .catch(error => console.log(error));
  }, []);
	
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/board/shopPopular.php')
      .then(response => setShopData(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    AOS.init();
  })
  return (
    <div>
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
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
      {bannerData.map((item, index) => (
        <SwiperSlide key={index}>
          <a href={item.link}>
          <div class="hidden md:block h-36 md:h-64 lg:h-96 p-4 bg-cover bg-center" style={{ backgroundImage: `url(${item.url})` }}>
          
          <div class="absolute bg-gradient-to-l from-transparent to-blue-800 inset-0 z-0"></div>
                <div class="relative flex flex-row items-end max-w-screen-xl mx-auto">
                  <div class="p-6 rounded-xl h-full flex flex-col w-full z-10 ">
                  <h2 class="text-4xl my-auto flex items-center text-white font-bold">
                  {item.title}
                        </h2>
                  </div>
                </div>
          </div>

          </a>
        </SwiperSlide>
      ))}
      </Swiper>

      <div className="md:hidden relative isolate px-6 pt-14 lg:px-8" data-aos="fade-down-right" data-aos-duration="1000">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80b3ff] to-[#89fca6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80b3ff] to-[#89fca6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>


      <main
		class="my-1 md:pt-16 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto max-w-screen-lg xl:max-w-screen-xl mx-auto">
		<div class="md:ml-4 mt-2 flex text-3xl">
    {
        props.isLogin ? <span class="font-semibold">{props.userName}님, 반가워요!</span>
        : <span><span style={{ animationDelay: "0.15s", animationFillMode: "forwards" }} class="animate-fade-up">어서 오세요</span><br/><span class="font-bold">로그인 후 이용해주세요</span></span>
      }
			
		</div>
		<div class="md:grid md:grid-cols-2">
    <div
				class="block md:hidden md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>새로운 소식</span>
					<button class="ml-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
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
        className="mySwiper "
      >
      {bannerData.map((item, index) => (
        <SwiperSlide key={index}>
          <a href={item.link} class="rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
          <div class="h-36 md:h-64 lg:h-96 p-4 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${item.url})` }}>
          </div>
          <p class="w-full text-center pt-2 pb-8 font-bold">{item.title}</p>
          </a>
        </SwiperSlide>
      ))}
      </Swiper>

				</div>
			</div>
    <div
				class="md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>이벤트</span>
					<button class="ml-2">
          <GiftIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
					<ul class="pt-1 pb-2 px-3 overflow-y-auto">
          {eventData.map((item, index) => (
                  <Card href={`https://mapi.pcor.me/view.php?id=${item.postid}`} className="mb-2" key={index}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title.substring(0,64)}
                  </h5>
 </Card>
      ))}

					</ul>

					<a
						href="https://mapi.pcor.me/list.php?id=60"
						class="flex justify-center capitalize text-blue-500
						dark:text-blue-200">
						<span>전체보기</span>
					</a>
				</div>
			</div>


			
    <div
				class="md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>공지사항</span>
					<button class="ml-2">
          <MegaphoneIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
					<ul class="pt-1 pb-2 px-3 overflow-y-auto">
          {blogData.map((item, index) => (
                  <Card href={`https://mapi.pcor.me/view.php?id=${item.postid}`} className="mb-2" key={index}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title.substring(0,64)}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.contents.substring(0,64)+"..."}
                  </p>
                </Card>
      ))}

					</ul>

					<a
						href="https://mapi.pcor.me/list.php?id=48"
						class="flex justify-center capitalize text-blue-500
						dark:text-blue-200">
						<span>전체보기</span>
					</a>
				</div>
			</div>


			<div
				class="hidden md:block md:mr-6 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>내 Plus ID</span>
					<button class="ml-2">
          <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
              {
        props.isLogin ? <h3
        class="flex items-center pt-4 pb-1 text-lg font-semibold
        capitalize dark:text-gray-300">
          <img src="https://coin.pcor.me/resources/images/pluscoin.svg" class="h-6 mr-2" alt="Coin"/>
        <span>내 PlusCoin  {props.userCoin}코인</span>
        <button class="ml-2">
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </h3>
        : <div class="mx-3 mt-1 mb-2 px-2 py-6 flex rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col hover:bg-gray-100 dark:hover:bg-gray-700 mb-2">
          <p class="text-center">지금 로그인하고 Plus의 모든 서비스를 이용하세요</p>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
<div>
<button 
onClick={() => navigate('/signin')}
class="mt-3 px-3 w-full bg-blue-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700">
로그인
</button>
</div>

<p className="mt-10 text-center text-sm text-gray-500">

</p>
</div>
        </div>
      }
				</div>
			</div>
		</div>

    <h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>상점 인기 상품</span>
					<button class="ml-2">
          <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

        <div class="grid m-0  grid-cols-2  space-x-4 overflow-y-scroll flex justify-center items-center w-full ">
        {shopData.map((item, index) => (
          <a href="/shop">
        				<div class="relative flex flex-col justify-between bg-white shadow-md rounded-xl transform ease-in duration-100 active:scale-95 bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center shadow-md h-64 my-2"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
                key={index}>
                <div class="absolute bg-gradient-to-b from-transparent to-black  opacity-50 inset-0 z-0"></div>
                <div class="relative flex flex-row items-end  h-72 w-full ">
                  <div class="p-6 rounded-xl  flex flex-col w-full z-10 ">
                  <h2 class="text-sm flex items-center text-white font-normal">
                  {item.merchant}
                        </h2>
                    <h4 class="mt-1 text-white text-xl font-bold leading-tight truncate">
                    {item.product}
                    </h4>
                    <div class="flex pt-4  text-sm text-gray-300">
                      <div class="flex items-center font-medium text-white ">
                      {item.price}코인
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </a>
      ))}



			</div>
	</main>
        <Footer/>
   </div>
    
  );
};
