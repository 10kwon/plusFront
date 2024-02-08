import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const CouponPage = (props) => {
  const [userId, setUserId] = useState('');
  const [couponNumber, setCouponNumber] = useState('');

  const handleCouponRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mapi.pcor.me/api/coupon.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          couponNumber: couponNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to register coupon');
      }

      const data = await response.json();
      alert(data.message); // Display the JSON response in an alert
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register coupon');
    }
  };
  
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://imagestorage.pcor.me/images/2024/02/08/fcaec4e2413bd05fd9e7788153fca282.png')" }}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl font-semibold">플러스끄투 쿠폰 등록</h1>
            <span className="text-gray-300 text-center">사용자 ID는 인게임에서 /id 입력하여<br />확인하실 수 있습니다.</span>
          </div>
          <form onSubmit={handleCouponRegistration} className="px-auto text-black">
            <div className="mb-4 text-lg">
              <input
                className="rounded-xl border-none bg-white px-6 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="userId"
                placeholder="사용자 ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-xl border-none bg-white px-6 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="couponNumber"
                placeholder="쿠폰번호"
                value={couponNumber}
                onChange={(e) => setCouponNumber(e.target.value)}
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-xl bg-blue-500 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
              >
                쿠폰등록
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
