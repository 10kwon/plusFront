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
import { Fragment, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Dialog, Popover, Tab, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, HomeIcon, PlusCircleIcon, ArrowSmallUpIcon} from '@heroicons/react/24/outline'
import nl2br from "react-nl2br";
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const navigation = {
  categories: [
    {
      id: 'category',
      name: 'PlusCoin',
      featured: [
      ],
      sections: [
        {
          id: 'pluscoinEarn',
          name: '모으기',
          items: [
            { name: 'Metro+', href: '/metroPlus' },
            { name: '리크봇', href: 'https://leek.pcor.me' },
            { name: 'Plus NOW 이벤트', href: 'https://now.pcor.me/' },
          ],
        },
        {
          id: 'pluscoinUsage',
          name: '사용하기',
          items: [
            { name: '상점', href: '/shop' },
            { name: '카드', href: '/card/setting' },
          ],
        },
        {
          id: 'pluscoinChange',
          name: '전환하기',
          items: [
            { name: '디젯/미라클 포인트 전환하기', href: 'https://djet.kr' },
          ],
        },
      ],
    },
    {
      id: 'classplus',
      name: 'Class+',
      featured: [
      ],
      sections: [
        {
          id: 'classplusApp',
          name: '실행하기',
          items: [
            { name: 'Android', href: 'https://play.google.com/store/apps/details?id=com.cplus.app' },
            { name: 'Web/iOS', href: 'https://classplus.pcor.me' },
          ],
        },
        {
          id: 'classplusAccess',
          name: '사용하기',
          items: [
            { name: '1:1 고객센터', href: 'https://classplus.channel.io/home' },
            { name: '사용 신청 폼', href: 'https://docs.google.com/forms/d/e/1FAIpQLSc_j2Vj6gKleyCC4E7q5ODI0kWN9poJ3UazBLkVhtU9R2bWYw/viewform?usp=sf_link' },
          ],
        },
        {
          id: 'classplusIntro',
          name: '소개',
          items: [
            { name: 'Class+란?', href: '/classPlus' },
          ],
        },
      ],
    },
    {
      id: 'metroplus',
      name: 'Metro+',
      featured: [
      ],
      sections: [
        {
          id: 'metroplusDiscord',
          name: '참여하기',
          items: [
            { name: 'Metro+란?', href: '/metroPlus' },
            { name: 'Discord 서버', href: 'https://discord.gg/dZnuCADSRZ' },
          ],
        },
      ],
    },
    {
      id: 'support',
      name: '고객센터',
      featured: [
      ],
      sections: [
        {
          id: 'supportCenter',
          name: '고객센터',
          items: [
            { name: '자주 묻는 질문', href: '/support' },
            { name: 'Class+ 1:1 상담', href: 'https://classplus.channel.io/home' },
            { name: '이메일 상담', href: 'mailto:support@pcor.me' },
          ],
        },
        {
          id: 'supportNotice',
          name: '새로운 소식',
          items: [
            { name: 'Plus NOW 공지사항', href: 'https://now.pcor.me/' },
          ],
        },
      ],
    },
    {
      id: 'discord',
      name: '디스코드 봇',
      featured: [
      ],
      sections: [
        {
          id: 'discord10k',
          name: '마넌봇',
          items: [
            { name: '초대하기', href: 'https://discord.com/api/oauth2/authorize?client_id=955793127308947478&permissions=8&scope=bot%20applications.commands' },
          ],
        },
        {
          id: 'discordLeek',
          name: '리크봇',
          items: [
            { name: '소개', href: 'https://leek.pcor.me' },
            { name: '초대하기', href: 'https://discord.com/api/oauth2/authorize?client_id=1148257484411240581&permissions=8&scope=bot%20applications.commands' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: '팀 소개', href: '/aboutPlus' },
  ],
  linkedpages: [
    { name: 'Plus NOW', href: 'https://now.pcor.me' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <>
    <div className="bg-white z-50 sticky top-0">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-100 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-100 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4 overflow-x-scroll">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
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
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
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
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
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

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <button onClick={() => navigate(page.href)} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </button>
                    </div>
                  ))}
                  {navigation.linkedpages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}<ArrowUpRightIcon className="h-4 inline-block"/>
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="z-50 w-full bg-white">

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 bg-white lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 md:h-20 items-center">

              {/* Logo */}
              <div className="md:ml-4 flex lg:ml-0 mr-0 lg:mr-4">
              <button  onClick={() => navigate('/')}>
                  <span className="sr-only">Plus</span>
                  <img
                    className="h-8 w-auto"
                    src="/Plus.svg"
                    alt="Plus"
                  />
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
                                  ? 'border-blue-500 text-blue-500'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px font-medium transition-colors duration-200 ease-out'
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
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {nl2br(item.name)}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
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
                                            <a className="text-lg font-bold text-black">
                                                {section.name}
                                                </a>
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="text-lg hover:text-blue-500 hover:font-bold">
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
                      className="flex items-center font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </button>
                  ))}
                  {navigation.linkedpages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                      <ArrowUpRightIcon className="h-6 inline-block"/>
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {
                props.isLogin ? 
                <Menu>
                <div>
                    <Menu.Button
                    className="flex rounded-xl py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
                    <img className="rounded-full h-6 w-6 object-cover mr-2" src={props.userImage} alt="프로필 이미지"/>
                        <h1><span className="font-bold">{props.userName}</span>님</h1>
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
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                나의 PlusCoin <strong>{props.userCoin}</strong>&copy;
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/card/setting"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
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
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                로그아웃
                              </a>
                            )}
                          </Menu.Item>

                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu> :
                    <div>
                    <button
                          onClick={() => navigate('/signin')}
                          className="flex rounded-xl py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
                              <h1><span className="font-bold">로그인</span></h1>
                              <span aria-hidden="true">&nbsp;&rarr;</span>
                              </button>
                              </div>
        }
      
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>


<div
			class="md:hidden fixed z-50 w-full bottom-0 p-5 px-6 flex items-center justify-between backdrop-blur-lg bg-white/70 shadow-3xl text-gray-900 cursor-pointer">
			<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
      <button onClick={() => navigate('/')}>
      <HomeIcon className="h-6 w-6" aria-hidden="true" />
                </button>  
			</div>
			<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
      <button onClick={() => navigate('/card/setting')}>
      <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
                </button>  
			</div>
      
			<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
      <button onClick={() => navigate('/shop')}>
      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </button>  
			</div>
			<div class="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
      <button  onClick={() => setOpen(true)}>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
			</div>
			</div>

      <a href="#">
      <button class="hidden md:block transform ease-in duration-100 active:scale-95 fixed z-90 bottom-8 right-8 bg-blue-500 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-600 hover:shadow-lg">
      <ArrowSmallUpIcon className="h-6 w-full" />
</button>
</a>
</>
)
}
