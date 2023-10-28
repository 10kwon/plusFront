import React, { useRef, useState, useEffect } from "react";
import Header from '../../components/header/header.prod.jsx';
import Footer from '../../components/footer/footer.prod.jsx';
import {Card, Avatar, Tabs, Breadcrumb} from 'flowbite-react';
import { PencilIcon,HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import {  PencilSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

export const CoinPage = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    // Make an Axios request to fetch the transactions
    axios.get('https://mapi.pcor.me/api/auth/payment/coin.php',{
      withCredentials: true, // withCredentials를 true로 설정
      credentials: "same-origin", // credentials를 'same-origin'으로 설정
    }) // Replace with your API endpoint
      .then((response) => {
        if (response.data.status == "fail") {
          alert("로그인해 주세요.");
          window.location.href = "/";
        } else {
        setTransactions(response.data.data);
        }
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
        axios.get(`https://mapi.pcor.me/api/auth/payment/coin.php?page=${page + 1}`,{
          withCredentials: true, // withCredentials를 true로 설정
          credentials: "same-origin", // credentials를 'same-origin'으로 설정
        })
          .then((response) => {
            if (response.data.status == "fail") {
              alert("로그인해 주세요.");
              window.location.href = "/";
            } else {
              const newTransactions = response.data.data;
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
        <div class="mx-auto w-full max-w-screen-md">
        <main
		class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
<p class="flex items-center pt-12 pb-2 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300 text-gray-500 underline">
           <button className="rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => handleCopyClipBoard('Sekai 번호 '+props.userSekai)}>Sekai 계좌 {props.userSekai}</button>
           <button className="ml-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={() => navigate('/coin/sekai/change')}><PencilIcon className="h-4"/></button></p>
<h3
					class="flex items-center md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300">
            
					<span>{Number(props.userCoin).toLocaleString()}코인</span>
				</h3>
        <p class="flex items-center pb-2 pt-2 md:px-4 text-lg
					capitalize dark:text-gray-300 text-gray-500">
{Number(props.userCash).toLocaleString()}캐시</p>
<div className="flex">
<button             
class="bg-opacity-50 mt-3 px-3 mr-2 w-1/2 font-bold bg-gray-300 hover:bg-gray-400 text-black text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 ">
캐시 충전하기
</button>
<button             
class={`bg-opacity-50 mt-3 px-3 w-1/2 bg-blue-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700`}>
코인 보내기
</button>
</div>
        <h2
					class="flex items-center pt-8 pb-1 md:px-4 text-2xl font-bold
					capitalize dark:text-gray-300">
					<span>최근 거래 내역</span>
				</h2>
<div class="pt-1 pb-1 md:px-4">
<ul className="divide-y divide-gray-200 dark:divide-gray-700">

              {transactions.map((transaction, index) => (
                <li key={index} className="flex justify-between gap-x-6 transform ease-in duration-100 active:scale-95 py-5 hover:bg-gray-200 dark:hover:bg-gray-700">
                <div className="flex min-w-0 gap-x-4">
                  <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`${transaction.legacyLogSource == "miracle" ? "/resources/images/legacy_miracle.png" : "/resources/images/legacy_djet.png"}`} alt="" />
                  <div className="min-w-0 flex-auto">
                    <p className="font-semibold leading-6">{transaction.product}</p>
                    <p className="truncate text-sm leading-5 text-gray-500 dark:text-gray-200">{transaction.timestamp}</p>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-end">
                  <p className={`${Number(transaction.price) < 0 ? 'text-blue-500 dark:text-blue-300' : 'text-gray-500 dark:text-gray-300'} leading-6 font-bold`}>{Number(transaction.price) * -1}코인</p>
                </div>
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
