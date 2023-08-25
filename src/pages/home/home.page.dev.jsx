import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';

import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import { Autoplay, Pagination, Navigation } from 'swiper';

import {Card, Avatar, Tabs} from 'flowbite-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const HomePage = (props) => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/banner/index.php')
      .then(response => setBannerData(response.data))
      .catch(error => console.log(error));
  }, []);

  const [travelData, setTravelData] = useState([]);
  useEffect(() => {
    axios.get('https://mapi.pcor.me/api/board/todayTravel.php')
      .then(response => setTravelData(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
          <div class="h-36 md:h-64 lg:h-96 p-4 bg-cover bg-center" style={{ backgroundImage: `url(${item.url})` }}>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      <main
		class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
		<div class="md:ml-4 mt-2 flex capitalize text-3xl">
      {
        props.isLogin ? <span class="font-semibold">{props.userName}님, 반가워요!</span>
        : <span>로그인 하고<br/><span class="font-bold">메트로+에 참여하세요</span></span>
      }
			
		</div>
		<div class="md:flex">
    <div
				class="md:mr-6 md:w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>화물열차 조회</span>
					<button class="ml-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div class="items-center justify-center flex-col">
        <Card>
  <div class="items-center justify-center flex">
<input type="date" id="tripdate" name="tripdate" class="bg-white rounded-xl text-black min-w-1/2 mx-2" min="2023-01-01" max="2023-12-31"/>
<input type="text" id="trainno" name="trainno" class="bg-white rounded-xl text-black min-w-1/2 mx-2" placeholder="열차번호를 입력하세요"/>
</div>
<div class="w-full items-center justify-center flex">
  
<a href="https://www.nlic.go.kr/nlic/transchRail0010.action"
class="mt-3 w-2/3 mx-auto bg-gray-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-600">
화물열차 운행 현황
</a>
        <button 
class="mt-3 w-2/3 mx-auto bg-purple-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-purple-600">
찾아보기
</button>
</div>
</Card>
				</div>
        
			</div>


			<div
				class="md:mr-6 md:w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>어디 가지?</span>
					<button class="ml-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
					<ul class="pt-1 pb-2 px-3 overflow-y-auto">
          {travelData.map((item, index) => (
                  <Card href="#" className="mb-2" key={index}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.contents}
                  </p>
                </Card>
      ))}

					</ul>

					<a
						href="#"
						class="flex justify-center capitalize text-purple-500
						dark:text-blue-200">
						<span>전체보기</span>
					</a>
				</div>
			</div>




		</div>
		<div class="md:flex">


			<div
				class="md:mr-6 md:w-1/3 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>베스트 가상교통</span>
					<button class="ml-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
					<ul class="pt-1 pb-2 px-3 overflow-y-auto">

          <div className="max-w-full">
  <Card imgSrc="">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      테스트제목
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      테스트 테스트 테스트 테스트
    </p>
  </Card>
</div>
					</ul>

					<a
						href="#"
						class="flex justify-center capitalize text-purple-500
						dark:text-blue-200">
						<span>전체보기</span>
					</a>
				</div>
			</div>

			<div
				class="md:mr-6 md:w-2/3 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-xl">

				<h3
					class="flex items-center pt-1 pb-1 md:px-4 text-lg font-semibold
					capitalize dark:text-gray-300">
					<span>커뮤니티 NOW</span>
					<button class="ml-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</h3>

				<div>
        <Tabs.Group
  aria-label="Tabs with underline"
  style="underline"
>
  <Tabs.Item title="Profile">
    Profile content
  </Tabs.Item>
  <Tabs.Item
    active={true}
    title="커뮤니티 "
  >
            <Card href="#" className="mb-2">
  <h5 className="truncate md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    글 작성 테스트
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
  <div className="text-xs md:text-sm flex flex-wrap gap-2">
  <Avatar rounded={true} className="h-6 md:h-10" /> ㅁㄴㅇㅁㄴㅇㅁㄴㅇ)<br/>
  조회수 34
</div>
  </p>
</Card>
  </Tabs.Item>
</Tabs.Group>
					<a
						href="#"
						class="flex justify-center capitalize text-purple-500
						dark:text-blue-200">
						<span>전체보기</span>
					</a>
				</div>
			</div>



		</div>

	</main>
        <Footer/>
   </div>
    
  );
};
