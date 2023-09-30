import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const CoinPage = (props) => {
  const [transactions, setTransactions] = useState([]);

  
  useEffect(() => {
    // Make an Axios request to fetch the transactions
    axios.get('/api/transactions') // Replace with your API endpoint
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
       alert("Failed to get transactions (Intended error. will be implemented.)");
      });
  }, []);
  const handleCopyClipBoard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사했어요.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin} />
        <div class="mx-auto w-full max-w-screen-xl">
        <main
		class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
<p class="flex items-center pt-12 pb-2 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300 text-gray-500 underline">
           <button className="rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => handleCopyClipBoard('Sekai 번호 '+'props.userSekai')}>Sekai 계좌 {props.userSekai}</button> </p>
<h3
					class="flex items-center md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>{props.userCoin.toLocaleString()}코인</span>
				</h3>



        <h2
					class="flex items-center pt-8 pb-1 md:px-4 text-2xl font-bold
					capitalize dark:text-gray-300">
					<span>최근 거래 내역</span>
				</h2>
<div class="pt-1 pb-1 md:px-4">
<ul>
              {/*transactions.map((transaction, index) => (
                <li key={index}>
                  <p>Product: {transaction.product}</p>
                  <p>Price: {transaction.price}</p>
                  <p>Timestamp: {transaction.timestamp}</p>
                  <p>From User: {transaction.from_username}</p>
                </li>
              ))*/}
            </ul>
</div>

      </main>
      </div>
        <Footer/>
   </div>
    
  );
};
