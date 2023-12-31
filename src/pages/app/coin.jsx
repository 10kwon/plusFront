import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header.prod.jsx";
import Footer from "../../components/footer/footer.prod.jsx";
import { Card, Avatar, Tabs, Breadcrumb } from "flowbite-react";
import {
  PencilIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import {
  BanknotesIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { Tab } from "@headlessui/react";

export const CoinPage = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionc, setTransactionc] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Make an Axios request to fetch the transactions
    axios
      .get("https://mapi.pcor.me/api/auth/payment/coin.php", {
        withCredentials: true, // withCredentials를 true로 설정
        credentials: "same-origin", // credentials를 'same-origin'으로 설정
      }) // Replace with your API endpoint
      .then((response) => {
        if (response.data.status == "fail") {
          //alert("로그인해 주세요.");
          //window.location.href = "/";
        } else {
          setTransactions(response.data.data);
        }
      })
      .catch((error) => {
        alert(
          "Failed to get transactions (Intended error. will be implemented.)"
        );
      });
  }, []);

  useEffect(() => {
    // Make an Axios request to fetch the transactions
    axios
      .get("https://mapi.pcor.me/api/auth/payment/cash.php", {
        withCredentials: true, // withCredentials를 true로 설정
        credentials: "same-origin", // credentials를 'same-origin'으로 설정
      }) // Replace with your API endpoint
      .then((response) => {
        if (response.data.status == "fail") {
        } else {
          setTransactionc(response.data.data);
        }
      })
      .catch((error) => {
        alert(
          "Failed to get transactions (Intended error. will be implemented.)"
        );
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
        axios
          .get(
            `https://mapi.pcor.me/api/auth/payment/coin.php?page=${page + 1}`,
            {
              withCredentials: true, // withCredentials를 true로 설정
              credentials: "same-origin", // credentials를 'same-origin'으로 설정
            }
          )
          .then((response) => {
            if (response.data.status == "fail") {
              //alert("로그인해 주세요.");
              //window.location.href = "/";
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

        axios
          .get(
            `https://mapi.pcor.me/api/auth/payment/cash.php?page=${page + 1}`,
            {
              withCredentials: true, // withCredentials를 true로 설정
              credentials: "same-origin", // credentials를 'same-origin'으로 설정
            }
          )
          .then((response) => {
            if (response.data.status == "fail") {
            } else {
              const newTransactions = response.data.data;
              setTransactionc([...transactionc, ...newTransactions]);
              //setPage(page + 1);
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
      alert("클립보드에 복사했어요.");
    } catch (error) {
      alert("클립보드 복사에 실패하였습니다.");
    }
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
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
      <div class="mx-auto w-full max-w-screen-md">
        <main
          class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <p
            class="flex items-center pt-12 pb-2 md:px-4 font-semibold text-lg
					capitalize dark:text-gray-300 text-gray-500 underline"
          >
            <button
              className="rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() =>
                handleCopyClipBoard("Vault 번호 " + props.userSekai)
              }
            >
              Vault 계좌 {props.userSekai}
            </button>
            <button
              className="ml-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => navigate("/coin/sekai/change")}
            >
              <PencilIcon className="h-4" />
            </button>
          </p>
          <h3
            class="flex items-center md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300"
          >
            <span>{Number(props.userCoin).toLocaleString()}코인</span>
          </h3>
          <p
            class="flex items-center pb-2 pt-2 md:px-4 text-lg
					capitalize dark:text-gray-300 text-gray-500"
          >
            {Number(props.userCash).toLocaleString()}원
          </p>
          <div className="flex">
            <button
              onClick={() => navigate("/cash/pay")}
              class="mt-3 px-3 mr-2 w-1/2 font-bold bg-gray-300 hover:bg-gray-400 text-black text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 "
            >
              <BanknotesIcon className="h-4 inline-block mr-2" />
              캐시 충전하기
            </button>
            <button
              onClick={() => navigate("/coin/send")}
              class="mt-3 px-3 w-1/2 bg-blue-500 font-bold text-white text-center m-auto py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700"
            >
              <PaperAirplaneIcon className="h-4 inline-block mr-2" />
              코인 보내기
            </button>
          </div>
          <div class="border-b border-transparent pt-1 pb-1 md:px-4">
            <Tab.Group>
              <Tab.List className="w-full -mb-px flex space-x-8 ">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300"
                        : "border-transparent text-gray-900 dark:text-gray-100",
                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    )
                  }
                >
                  코인 사용 내역
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300"
                        : "border-transparent text-gray-900 dark:text-gray-100",
                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                    )
                  }
                >
                  캐시 충전 내역
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transactions.map((transaction, index) => (
                      <li
                        key={index}
                        className="flex justify-between gap-x-6 transform ease-in duration-100 active:scale-95 py-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={`${
                              transaction.type == "miracle"
                                ? "/resources/images/legacy_miracle.png"
                                : transaction.type == "diet"
                                ? "/resources/images/legacy_djet.png"
                                : transaction.type == "chat_discord"
                                ? "/resources/brands/chat_discord.png"
                                : transaction.type == "luckycard"
                                ? "/resources/brands/luckycard.png"
                                : transaction.type == "reward"
                                ? "/resources/brands/reward.png"
                                : transaction.type == "transfer"
                                ? "/resources/brands/transfer.png"
                                : transaction.type == "welcome"
                                ? "/resources/brands/welcome.png"
                                : transaction.type == "rename"
                                ? "/resources/brands/rename.png"
                                : "/favicon-96x96.png"
                            }`}
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="font-semibold leading-6">
                              {transaction.product}
                            </p>
                            <p className="truncate text-sm leading-5 text-gray-500 dark:text-gray-200">
                              {transaction.timestamp}
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end">
                          <p
                            className={`${
                              Number(transaction.price) < 0
                                ? "text-blue-500 dark:text-blue-300"
                                : "text-gray-500 dark:text-gray-300"
                            } leading-6 font-bold`}
                          >
                            {Number(transaction.price) * -1}코인
                          </p>
                        </div>
                      </li>
                    ))}

                    {
                  isLoading ?
<li
                        className="flex justify-between gap-x-6 transform ease-in duration-100 active:scale-95 py-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-500"
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="rounded-lg font-semibold leading-6 bg-gray-500 text-gray-500 w-64">
                              .
                            </p>
                            <p className="mt-1 rounded-lg bg-gray-500 text-gray-500 w-32 truncate text-sm leading-5">
                              .
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end">
                          <p
                            className={`w-16 rounded-lg bg-gray-500 text-gray-500 leading-6 font-bold`}
                          >
                            .
                          </p>
                        </div>
                      </li>
                  :
                  <li></li>
                  }
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transactionc.map((transaction, index) => (
                      <li
                        key={index}
                        className="flex justify-between gap-x-6 transform ease-in duration-100 active:scale-95 py-5 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={`${
                              transaction.transferedTs == null
                                ? "/resources/images/cash_incomplete.png"
                                : "/resources/images/cash_complete.png"
                            }`}
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="leading-6">
                              입금자명:{" "}
                              <span className="font-semibold">
                                {transaction.senderDisplayName}
                              </span>
                            </p>
                            <p className="truncate text-sm leading-5 text-gray-500 dark:text-gray-200">
                              {transaction.transferedTs == null ? (
                                <span class="text-red-500 font-bold">
                                  입금되지 않음
                                </span>
                              ) : (
                                `${transaction.transferedTs}`
                              )}{" "}
                              | {transaction.created_at}
                            </p>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end">
                          <p
                            className={`${
                              Number(transaction.amount) > 0
                                ? "text-blue-500 dark:text-blue-300"
                                : "text-gray-500 dark:text-gray-300"
                            } leading-6 font-bold`}
                          >
                            {Number(transaction.amount)}원
                          </p>
                          {transaction.transferedTs == null ? (
                            <a
                              href={`https://toss.me/plusp/${transaction.amount}`}
                              target="_blank"
                            >
                              <p className="truncate text-sm leading-5 text-gray-500 dark:text-gray-200">
                                지금 입금하기
                              </p>
                            </a>
                          ) : (
                            <p className="truncate text-sm leading-5 text-gray-500 dark:text-gray-200">
                              입금 완료
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
