/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dialog, Popover, Tab, Transition, Menu } from "@headlessui/react";
import {
  GiftIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  HomeIcon,
  PlusCircleIcon,
  ArrowSmallUpIcon,
  NewspaperIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import nl2br from "react-nl2br";
import { ArrowUpRightIcon, BanknotesIcon, ChevronLeftIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

import useDarkSide from "../useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const navigation = {
  categories: [
    {
      id: "category",
      name: "PlusCoin",
      featured: [],
      sections: [
        {
          id: "pluscoinEarn",
          name: "모으기",
          items: [
            { name: "리워드 받기", href: "/reward" },
            { name: "Metro+", href: "/metroPlus" },
            { name: "리크봇", href: "https://leek.pcor.me" },
          ],
        },
        {
          id: "pluscoinUsage",
          name: "사용하기",
          items: [
            { name: "상점", href: "/shop" },
            { name: "카드", href: "/card/setting" },
            { name: "Sekai 발급받기", href: "/coin/sekai" },
            { name: "잔액", href: "/coin" },
          ],
        },
      ],
    },
    {
      id: "support",
      name: "고객센터",
      featured: [],
      sections: [
        {
          id: "supportCenter",
          name: "고객센터",
          items: [
            { name: "자주 묻는 질문", href: "/support" },
            { name: "이메일 상담", href: "mailto:plus@sqlare.com" },
          ],
        },
        {
          id: "supportNotice",
          name: "새로운 소식",
          items: [{ name: "Plus NOW 공지사항", href: "https://now.pcor.me/" }],
        },
      ],
    },
    {
      id: "discord",
      name: "디스코드 봇",
      featured: [],
      sections: [
        {
          id: "discord10k",
          name: "마넌봇",
          items: [
            {
              name: "초대하기",
              href: "https://discord.com/api/oauth2/authorize?client_id=955793127308947478&permissions=8&scope=bot%20applications.commands",
            },
          ],
        },
        {
          id: "discordLeek",
          name: "리크봇",
          items: [
            { name: "소개", href: "https://leek.pcor.me" },
            {
              name: "초대하기",
              href: "https://discord.com/api/oauth2/authorize?client_id=1148257484411240581&permissions=8&scope=bot%20applications.commands",
            },
          ],
        },
      ],
    },
  ],
  pages: [],
  linkedpages: [
    { name: "Plus NOW", href: "https://now.pcor.me" },
    { name: "Sqlare", href: "https://sqlare.com" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white z-50 sticky top-0">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-100 lg:hidden"
            onClose={setOpen}
          >
            <div className="fixed inset-0 z-100 flex">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-x-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0 md:scale-100"
                leaveTo="opacity-0 translate-x-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto bg-white dark:bg-gray-800 dark:text-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center border-transparent p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/*MyTab*/}
                  <div className="">
                    <section className="py-6 bg-gray-100 dark:bg-gray-700 px-6">
                      <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        {props.isLogin ? (
                                                    <figure>
                                                    <figcaption>
                                                      <div className="flex">
                                                      <img
                                                        className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600"
                                                        src={props.userImage}
                                                        alt="Account Image"
                                                      />
                                                        <div className="ml-3 py-0.5 font-bold text-xl text-gray-900 dark:text-gray-100">
                                                        {props.userName}님
                                                        </div>
                                                      </div>
                                                      <div className="border-b py-2 mb-2 border-gray-200 dark:border-gray-600"></div>
                                                      <img src="https://coin.pcor.me/resources/images/pluscoin.svg" className="h-4 w-4 inline-block mr-1"/>{props.userCoin}코인
                                                      <span className="text-gray-200 dark:text-gray-600 px-1">|</span>
                                                      <BanknotesIcon className="h-4 w-4 inline-block mr-1"/>{props.userCash}원
                                                      <span className="text-gray-200 dark:text-gray-600 px-1">|</span>
                                                      <a href="https://mapi.pcor.me/oauth/ip.php?action=logout">로그아웃</a>
                                                    </figcaption>
                                                  </figure>
                        ) : (
                          <figure>
                          <figcaption>
                            <div className="flex" onClick={() => navigate("/signin")}>
                            <img
                              className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600"
                              src="/apple-icon-precomposed.png"
                              alt="Account Image"
                            />
                              <div className="ml-3 py-0.5 font-bold text-xl text-gray-900 dark:text-gray-100">
                                로그인 / 계정 등록
                              </div>
                            </div>
                            <div className="border-b py-2 mb-2 border-gray-200 dark:border-gray-600"></div>
                            <img src="https://coin.pcor.me/resources/images/pluscoin.svg" className="h-4 w-4 inline-block mr-1"/><span className="blur-sm">69,740</span>코인
                            <span className="text-gray-200 dark:text-gray-600 px-1">|</span>
                            <BanknotesIcon className="h-4 w-4 inline-block mr-1"/><span className="blur-sm">6,974</span>원
                          </figcaption>
                        </figure>
                        )}
                      </div>
                    </section>
                  </div>
                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                      <Tab.List className="top-0 w-full sticky -mb-px flex space-x-8 px-4 overflow-x-scroll">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300"
                                  : "border-transparent text-gray-900 dark:text-gray-100",
                                "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>

                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel
                          key={category.name}
                          className="space-y-10 px-4"
                        >
                          <div className="">
                            {category.featured.map((item) => (
                              <div
                                key={item.name}
                                className="group relative text-sm  pb-8 pt-10"
                              >
                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="object-cover object-center"
                                  />
                                </div>
                                <a
                                  href={item.href}
                                  className="mt-6 block font-medium text-gray-900 dark:text-gray-100"
                                >
                                  <span
                                    className="absolute inset-0 z-10"
                                    aria-hidden="true"
                                  />
                                  {nl2br(item.name)}
                                </a>
                                <p aria-hidden="true" className="mt-1">
                                  바로가기 →
                                </p>
                              </div>
                            ))}
                          </div>
                          {category.sections.map((section) => (
                            <div key={section.name}>
                              <p
                                id={`${category.id}-${section.id}-heading-mobile`}
                                className="font-bold text-xl text-gray-900 dark:text-gray-100"
                              >
                                {section.name}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                              >
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl block p-2 text-gray-600 dark:text-gray-300"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 px-4 py-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <button
                          onClick={() => navigate(page.href)}
                          className="-m-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl block p-2 text-gray-600 dark:text-gray-300"
                        >
                          {page.name}
                        </button>
                      </div>
                    ))}
                    {navigation.linkedpages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl block p-2 text-gray-600 dark:text-gray-300"
                        >
                          {page.name}
                          <ArrowUpRightIcon className="h-4 inline-block" />
                        </a>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="z-50 w-full bg-white dark:bg-gray-900">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 bg-white dark:bg-gray-900 lg:px-8"
          >
            <div className="border-b border-gray-200 dark:border-gray-800">
              <div className="flex h-16 md:h-20 items-center">
                {/* Logo */}
                <div className="md:ml-4 flex lg:ml-0 mr-0 lg:mr-4">
                  <button className="flex" onClick={() => navigate("/")}>
                    <span className="sr-only">Plus</span>
                    <img className="h-8 w-auto" src="/Plus.svg" alt="Logo" />
                    <svg className="h-8 py-1.5 ml-2 w-auto dark:text-gray-300 text-gray-700" width="126" height="48" viewBox="0 0 126 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.590881 47V0.454529H9.31818H18.0455C21.6212 0.454529 24.6212 1.12119 27.0455 2.45452C29.4849 3.78786 31.3258 5.62119 32.5682 7.95452C33.8258 10.2727 34.4545 12.9091 34.4545 15.8636C34.4545 18.8485 33.8258 21.5 32.5682 23.8182C31.3106 26.1364 29.4545 27.9621 27 29.2955C24.5455 30.6136 21.5227 31.2727 17.9318 31.2727H13.9999L9.0227 24.3409H16.7955C18.8864 24.3409 20.5985 23.9773 21.9318 23.25C23.2652 22.5227 24.25 21.5227 24.8864 20.25C25.5379 18.9773 25.8636 17.5152 25.8636 15.8636C25.8636 14.2121 25.5379 12.7576 24.8864 11.5C24.25 10.2424 23.2576 9.26513 21.9091 8.56816C20.5758 7.85604 18.8561 7.49998 16.75 7.49998H9.0227V47H0.590881ZM49.642 0.454529V47H41.4148V0.454529H49.642ZM80.3523 32.0682L80.2386 12.0909H88.5795V47H80.6023V40.7955H80.2386C79.4508 42.75 78.1553 44.3485 76.3523 45.5909C74.5644 46.8333 72.3598 47.4545 69.7386 47.4545C67.4508 47.4545 65.428 46.947 63.6705 45.9318C61.928 44.9015 60.5644 43.4091 59.5795 41.4545C58.5947 39.4848 58.1023 37.1061 58.1023 34.3182V12.0909H66.3295V33.0455C66.3295 35.2576 66.9356 37.0152 68.1477 38.3182C69.3598 39.6212 70.9508 40.2727 72.9205 40.2727C74.1326 40.2727 74.8636 39.5909 76 39C77.1363 38.4091 77.7728 37.8712 78.5 36.7045C79.2425 35.5227 80.3523 33.8409 80.3523 32.0682ZM124.631 21.3182L117.131 22.1364C116.919 21.3788 116.547 20.6667 116.017 20C115.502 19.3333 114.805 18.7955 113.926 18.3864C113.047 17.9773 111.972 17.7727 110.699 17.7727C108.987 17.7727 107.547 18.1439 106.381 18.8864C105.229 19.6288 104.661 20.5909 104.676 21.7727C104.661 22.7879 105.032 23.6136 105.79 24.25C106.563 24.8864 107.835 25.4091 109.608 25.8182L115.562 27.0909C118.866 27.803 121.32 28.9318 122.926 30.4773C124.547 32.0227 125.366 34.0455 125.381 36.5455C125.366 38.7424 124.722 40.6818 123.449 42.3636C122.191 44.0303 120.441 45.3333 118.199 46.2727C115.956 47.2121 113.381 47.6818 110.472 47.6818C106.199 47.6818 102.759 46.7879 100.153 45C97.5473 43.197 95.9943 40.6894 95.4943 37.4773L103.517 36.7045C103.881 38.2803 104.653 39.4697 105.835 40.2727C107.017 41.0758 108.555 41.4773 110.449 41.4773C112.403 41.4773 113.972 41.0758 115.153 40.2727C116.35 39.4697 116.949 38.4773 116.949 37.2955C116.949 36.2955 116.563 35.4697 115.79 34.8182C115.032 34.1667 113.85 33.6667 112.244 33.3182L106.29 32.0682C102.941 31.3712 100.464 30.197 98.858 28.5455C97.2519 26.8788 96.4564 24.7727 96.4716 22.2273C96.4564 20.0758 97.0398 18.2121 98.2216 16.6364C99.4186 15.0455 101.078 13.8182 103.199 12.9545C105.335 12.0758 107.797 11.6364 110.585 11.6364C114.676 11.6364 117.896 12.5076 120.244 14.25C122.608 15.9924 124.07 18.3485 124.631 21.3182Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300"
                                    : "border-transparent text-gray-700 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px font-medium transition-colors duration-200 ease-out"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 z-100 top-full text-sm text-gray-500">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className="absolute inset-0 top-1/2 bg-white dark:bg-gray-900 shadow"
                                  aria-hidden="true"
                                />

                                <div className="relative bg-white dark:bg-gray-900 ">
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {nl2br(item.name)}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            바로가기 →
                                          </p>
                                        </div>
                                      ))}
                                      <div className="col-span-3 row-start-1 grid grid-cols-5 gap-x-8 gap-y-10">
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <ul
                                              role="list"
                                              aria-labelledby={`${section.name}-heading`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              <a className="text-lg font-bold text-black dark:text-white">
                                                {section.name}
                                              </a>
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className="flex"
                                                >
                                                  <a
                                                    href={item.href}
                                                    className="text-lg dark:text-gray-100 dark:hover:text-blue-300 hover:text-blue-500 hover:font-bold"
                                                  >
                                                    • {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <button
                        key={page.name}
                        onClick={() => navigate(page.href)}
                        className="flex items-center font-medium text-gray-700 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200"
                      >
                        {page.name}
                      </button>
                    ))}
                    {navigation.linkedpages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center font-medium text-gray-700 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200"
                      >
                        {page.name}
                        <ArrowUpRightIcon className="h-6 inline-block" />
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="flex lg:flex-1 lg:items-center lg:justify-end space-x-6">
                    {props.isLogin ? (
                      <Menu>
                        <div>
                          <Menu.Button className="hidden md:flex rounded-xl py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:text-white">
                            <img
                              className="rounded-full h-6 w-6 object-cover mr-2"
                              src={props.userImage}
                              alt="프로필 이미지"
                            />
                            <h1 className="font-bold">
                              <span>{props.userName}</span>님
                            </h1>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="opacity-0 absolute right-4 z-10 mt-12 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <strong>{props.userName}</strong>님
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    나의 PlusCoin{" "}
                                    <strong>{props.userCoin}</strong>&copy;
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    나의 캐시 <strong>{props.userCash}</strong>
                                    원
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/card/setting"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    기본 카드 설정
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="https://mapi.pcor.me/oauth/ip.php?action=logout"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    로그아웃
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <div>
                        <button
                          onClick={() => navigate("/signin")}
                          className="hidden md:flex rounded-xl py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
                        >
                          <h1>
                            <span className="font-bold">로그인</span>
                          </h1>
                          <span aria-hidden="true">&nbsp;&rarr;</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div class="md:hidden fixed z-50 w-full bottom-0 rounded-t-xl py-2 px-6 flex items-center justify-between backdrop-blur-lg bg-white/70 dark:bg-black/70 shadow-3xl text-gray-900 dark:text-gray-100 cursor-pointer">
        <div class="flex flex-col items-center transition ease-in duration-100 hover:text-blue-500 dark:hover:text-blue-300 ">
          <button onClick={() => navigate("/")}>
            <HomeIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <span className="text-xs text-center mt-0.5">홈</span>
        </div>

        <div class="flex flex-col items-center transition ease-in duration-100 hover:text-blue-500 dark:hover:text-blue-300 ">
          <button onClick={() => navigate("/coin")}>
            <WalletIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <span className="text-xs text-center mt-0.5">월렛</span>
        </div>

        <div class="flex flex-col items-center transition ease-in duration-100 hover:text-blue-500 dark:hover:text-blue-300 ">
          <button onClick={() => navigate("/reward")}>
            <GiftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <span className="text-xs text-center mt-0.5">리워드</span>
        </div>

        <div class="flex flex-col items-center transition ease-in duration-100 hover:text-blue-500 dark:hover:text-blue-300 ">
          <button onClick={() => navigate("/shop")}>
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <span className="text-xs text-center mt-0.5">상점</span>
        </div>

        <div class="flex flex-col items-center transition ease-in duration-100 hover:text-blue-500 dark:hover:text-blue-300 ">
          <button onClick={() => setOpen(true)}>
            {props.isLogin ? (
              <img
                className="rounded-full h-6 w-6 object-cover mr-2 bg-gray-200 dark:bg-gray-600"
                src={props.userImage}
                alt="프로필 이미지"
              />
            ) : (
              <img
                className="rounded-full h-6 w-6 object-cover mr-2"
                src="/favicon-96x96.png"
                alt="프로필 이미지"
              />
            )}
          </button>
          <span className="text-xs text-center -ml-1.5 mt-0.5">MY</span>
        </div>
      </div>

      
      <a href="#">
        <button class="hidden md:block transform ease-in duration-100 active:scale-95 fixed z-100 bottom-8 right-8 bg-blue-500 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-600 hover:shadow-lg">
          <ArrowSmallUpIcon className="h-6 w-full" />
        </button>
      </a>
    </>
  );
}
