import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Popover, Tab, Transition, Menu } from '@headlessui/react';
function ShopTab(props) {
    
const navigation = {
    categories: [
      {
        id: 'category',
        name: '코인 상점',
        link: '/shop'
      },
      {
        id: 'category',
        name: '캐시 상점',
        link: '/shop/cash'
      },
    ]
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const navigate = useNavigate()
    return(
        <>
            {/*
    <div className="bg-white dark:bg-gray-800 top-0 sticky w-full z-50 relative isolate flex items-center gap-x-6">
    <Tab.Group className="mx-auto">
    <div className="border-b border-transparent max-w-screen-xl">
                    <Tab.List className="top-0 w-full sticky -mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          onClick={() => navigate(category.link)}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-500 text-blue-500 dark:border-blue-300 dark:text-blue-300' : 'border-transparent text-gray-900 dark:text-gray-100',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  
    </Tab.Group>
    </div>*/}
        </>
    )
}

export default ShopTab;
