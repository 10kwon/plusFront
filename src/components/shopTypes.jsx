import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Popover, Tab, Transition, Menu } from "@headlessui/react";
function ShopTab(props) {
  const navigation = {
    categories: [
      {
        id: "category",
        name: "코인 상점",
        link: "/shop",
      },
      {
        id: "category",
        name: "캐시 상점",
        link: "/shop/cash",
      },
    ],
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigate = useNavigate();
  return (
    <>
    </>
  );
}

export default ShopTab;
