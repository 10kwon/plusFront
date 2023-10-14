import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

export const CoinPage = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Make an Axios request to fetch the transactions
    axios.get('https://mapi.pcor.me/api/auth/payment/coin.php') // Replace with your API endpoint
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
       alert("Failed to get transactions (Intended error. will be implemented.)");
      });
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // 스크롤이 화면 하단에 도달했을 때 새 데이터를 가져오는 로직을 실행합니다.
      if (!isLoading) {
        setIsLoading(true);
        // 여기에서 API 요청을 보내어 새 데이터를 가져옵니다.
        axios.get(`https://mapi.pcor.me/api/auth/payment/coin.php?page=${page + 1}`)
          .then((response) => {
            if (response.data.status == "fail") {
              alert("로그인해 주세요.");
              window.location.href = "/";
            } else {
              const newTransactions = response.data;
            setTransactions([...transactions, ...newTransactions]);
            setPage(page + 1);
            setIsLoading(false);
            }
            
          })
          .catch((error) => {
            alert("Failed to get transactions.");
            setIsLoading(false);
          });
      }
    }
  };
  
  useEffect(() => {
    // 스크롤 이벤트를 감지하도록 이벤트 리스너를 등록합니다.
    window.addEventListener("scroll", handleScroll);
  
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, transactions, isLoading]);
  
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
      
        <Header isLogin={props.isLogin} userName={props.userName} userEmail={props.userEmail} userImage={props.userImage} userCoin={props.userCoin}  userCash={props.userCash} />
        <div class="mx-auto w-full max-w-screen-xl">
        <main
		class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
<p class="flex items-center pt-12 pb-2 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300 text-gray-500 underline">
           <button className="rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => handleCopyClipBoard('Sekai 번호 '+props.userSekai)}>Sekai 계좌 {props.userSekai}</button> </p>
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
              {transactions.map((transaction, index) => (
                <li key={index}>
                  <p>Product: {transaction.product}</p>
                  <p>Price: {transaction.price}</p>
                  <p>Timestamp: {transaction.timestamp}</p>
                  <p>From User: {transaction.from_username}</p>
                </li>
              ))}
            </ul>
</div>

      </main>
      </div>
        <Footer/>
   </div>
    
  );
};
