import React, { useEffect, useState, Fragment } from "react";

function Footer(props) {
    
    return(
        <>
        
<footer class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src="/metroPlus_Gray.svg" class="h-8 mr-3" alt="" />
                  <span class="self-center text-2xl text-gray-500 font-semibold whitespace-nowrap dark:text-white">Metro+</span>
              </a>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
      
          <span class="text-sm text-gray-500 dark:text-gray-400">
          <img alt="크리에이티브 커먼즈 라이선스" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
            <span>이 저작물은 <a href="http://creativecommons.org/licenses/by-sa/4.0/" class="hover:text-purple-500 rounded-xl scale-100 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다. (단, 라이선스가 명시된 일부 컨텐츠 제외)
            </span><br/>
            <span class="font-bold">저희가 제공하는 정보는 단순 교통 동호인의 편의를 위해 제공되고 있으며, 그 내용의 사실 여부에 대해선 보증할 수 없어요.<br/>
            이 서비스의 내용으로 관련 기관에 민원을 넣지 마세요.</span>
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
<a href="https://twitter.com/@metroplus_" class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-blue-400 dark:hover:text-white">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
</path>
</svg>
</a>
<a href="https://github.com/10kwon" class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-gray-900 dark:hover:text-white">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
</svg>
</a>
<a href="https://twitch.tv/tenkwon" class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-purple-600 dark:hover:text-white">
<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"></path>
<path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"></path>
</svg>
</a>
<a href="https://toss.me/만원이만원이" class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-blue-600 dark:hover:text-white">
<svg class="w-5 h-5" width="903" height="848" viewBox="0 0 903 848" xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden"><defs><clipPath id="clip0"><rect x="1750" y="939" width="903" height="848"></rect></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-1750 -939)"><path d="M499.422 651.66 536.85 827.672C538.531 836.515 530.962 844.515 522.131 842.41 467.883 832.725 411.532 815.882 355.601 791.88 104.125 685.346-48.1068 476.49 15.8132 325.321 64.1742 212.051 220.191 163.626 401.439 191.839L364.012 15.8253C362.33 6.98413 369.899-1.01466 378.73 1.09015 432.979 10.7733 489.329 27.619 545.26 51.6215 796.737 158.152 948.548 367.009 884.628 518.598 836.687 631.448 680.67 679.873 499.422 651.66" fill="currentColor" fill-rule="evenodd" fill-opacity="1" transform="matrix(1 0 0 -1 1751 1786)"></path></g></svg>
</a>
<a href="https://www.youtube.com/channel/UCl6iCsMQpnG5EtgMq_qKeig" class="transform ease-in duration-100 active:scale-95 active:bg-gray-100 text-gray-500 hover:text-red-500 dark:hover:text-white">
<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
</svg>
</a>

</div>
      </div>
    </div>
</footer>

        </>
    )
}

export default Footer;