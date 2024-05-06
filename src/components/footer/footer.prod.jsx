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
                  &nbsp;
                </span>
              </a>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Copyright &copy; 2021~2024 Plus Platforms
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
             </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
