import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
const navigation = [
  { name: '어디 가지?', href: '#' },
  { name: '새 소식', href: '#' },
  { name: '사진', href: '#' },
  { name: '포럼', href: '#' },
  { name: '가상교통', href: '#' },
  { name: '오프라인 미팅', href: '#' },
]

function Header(props) {
    const [effect, setEffect] = useState(false);
    const navigate = useNavigate()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <>
<header className="border-b backdrop-blur-lg bg-white/70 sticky top-0 md:shadow-md w-full z-50">
  <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <button  onClick={() => navigate('/')} className="-m-1.5 p-1.5">
        <span className="sr-only">Metro+</span>
        <img
          className="h-8 w-auto"
          src="/metroPlus.svg"
          alt=""
        />
      </button>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <button key={item.name}  onClick={() => navigate(item.href)} className="rounded-xl text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
          {item.name}
        </button>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
                                나의 Plus 코인 <strong>30000</strong>℗
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => navigate('/notification')}
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  알림함
                                </button>
                              )}
                        </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/?sessionID=null"
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
                          onClick={() => navigate('/signup')}
                          className="flex rounded-xl py-2 px-2 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
                              <h1><span className="font-bold">로그인</span></h1>
                              <span aria-hidden="true">&nbsp;&rarr;</span>
                              </button>
                              </div>
        }
      
    </div>
  </nav>
  <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    <div className="fixed inset-0 z-50" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
      <button  onClick={() => navigate('/')} className="-m-1.5 p-1.5">
          <span className="sr-only">Metro+</span>
          <img
            className="h-8 w-auto"
            src="/metroPlus.svg"
            alt=""
          />
        </button>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 transform ease-in duration-100 active:scale-95 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
          {
                props.isLogin ? <div>
                                      <button
                    className="flex -mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 transform ease-in duration-100 active:scale-95 hover:bg-gray-100">
                    <img className="rounded-full h-6 w-6 object-cover mr-2" src={props.userImage} alt="프로필 이미지"/>
                        <h1><span className="font-bold">{props.userName}</span>님</h1>
                        </button>
                        <a
                                href="/?sessionID=null"
              className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 transform ease-in duration-100 active:scale-95 hover:bg-gray-100"
            >
              로그아웃
            </a>
                </div> : <button
              onClick={() => navigate('/signup')}
              className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
            >
              로그인
            </button>
        }
            
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</header>
</>
)
}

export default Header;