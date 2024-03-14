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
          <form onSubmit={handleCouponRegistration} className="px-auto text-black">
            <div className="mb-4 text-lg">
              <input
                className="rounded-lg border bg-white py-2 text-inherit outline-none"
                type="text"
                name="userId"
                placeholder="사용자 ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-lg border bg-white py-2 text-inherit outline-none"
                type="text"
                name="couponNumber"
                placeholder="쿠폰번호"
                value={couponNumber}
                onChange={(e) => setCouponNumber(e.target.value)}
              />
            </div>
            <div className="mt-8 flex justify-end text-lg text-black">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-3 py-1 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
              >
                쿠폰등록
              </button>
            </div>
          </form>
  );
};
