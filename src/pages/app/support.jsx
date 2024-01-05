import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header.prod.jsx";
import Footer from "../../components/footer/footer.prod.jsx";
import { Card, Avatar, Tabs, Breadcrumb } from "flowbite-react";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Iframe from "react-iframe";

export const SupportPage = (props) => {
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
      <div class="mx-auto w-full max-w-screen-xl">
        <main
          class="my-1 pt-2 pb-2 px-4 md:px-10 flex-1 rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <Breadcrumb
            class="pt-6 md:px-4"
            aria-label="Default breadcrumb example"
          >
            <Breadcrumb.Item>메인</Breadcrumb.Item>
            <Breadcrumb.Item>고객센터</Breadcrumb.Item>
          </Breadcrumb>
          <h3
            class="flex items-center pt-6 md:px-4 text-3xl font-bold
					capitalize dark:text-gray-300"
          >
            <span>고객센터</span>
          </h3>
        </main>
      </div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                문제 해결이 되지 않나요?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                네이버 톡톡으로 문의하세요.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <a
                  href="https://talk.naver.com/ct/w5wx2v"
                  class="mt-3 px-3 bg-blue-500 font-bold text-white text-center py-2 rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-600"
                >
                  문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
