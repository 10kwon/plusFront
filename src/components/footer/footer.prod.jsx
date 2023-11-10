import React, { useEffect, useState, Fragment } from "react";

function Footer(props) {
  return (
    <>
      <footer class="bg-gray-50 dark:bg-gray-900 mb-16 md:mb-0">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <img src="/Plus.svg" class="h-8 mr-3" alt="" />
                <span class="self-center text-2xl text-gray-500 font-semibold whitespace-nowrap dark:text-white">
                  Plus
                </span>{" "}
                <span class="self-center text-xl text-gray-500 font-semibold whitespace-nowrap dark:text-white">
                  &nbsp;with Sqlare
                </span>
              </a>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Copyright &copy; 2021~ Plus Platforms
              <br />
              Copyright &copy; 2023~ Sqlare
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://x.com/@PlusPlatforms"
                class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-black dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 300 271"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
                </svg>
              </a>
              <a
                href="https://github.com/sqlare"
                class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://toss.me/plusp"
                class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-blue-600 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  width="903"
                  height="848"
                  viewBox="0 0 903 848"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  overflow="hidden"
                >
                  <defs>
                    <clipPath id="clip0">
                      <rect x="1750" y="939" width="903" height="848"></rect>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip0)" transform="translate(-1750 -939)">
                    <path
                      d="M499.422 651.66 536.85 827.672C538.531 836.515 530.962 844.515 522.131 842.41 467.883 832.725 411.532 815.882 355.601 791.88 104.125 685.346-48.1068 476.49 15.8132 325.321 64.1742 212.051 220.191 163.626 401.439 191.839L364.012 15.8253C362.33 6.98413 369.899-1.01466 378.73 1.09015 432.979 10.7733 489.329 27.619 545.26 51.6215 796.737 158.152 948.548 367.009 884.628 518.598 836.687 631.448 680.67 679.873 499.422 651.66"
                      fill="currentColor"
                      fill-rule="evenodd"
                      fill-opacity="1"
                      transform="matrix(1 0 0 -1 1751 1786)"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/@PlusPlatforms"
                class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-red-500 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
