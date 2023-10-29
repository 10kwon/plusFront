import React, { useEffect, useState } from "react";
import "./App.css";
import './index.css';
import { AuthPage } from "./pages/Auth/AuthPage";
import { ErrorPage } from "./pages/Error/errorPage";
import { TravelPage } from "./pages/app/travel";
import { AboutpPage } from "./pages/app/aboutplus";
import { AboutmPage } from "./pages/app/aboutmplus";
import { AboutcPage } from "./pages/app/aboutcplus";
import { AboutvPage } from "./pages/app/aboutvplus";
import { AboutgPage } from "./pages/app/aboutgplus";

import { CoinPage } from "./pages/app/coin";

import { ShopPage } from "./pages/app/shop";
import { CardPage } from "./pages/app/card";
import { SupportPage } from "./pages/app/support";
import { SekaiIssuePage } from "./pages/app/sekai";
import { SekaiChangePage } from "./pages/app/sekaiChange";
import { CoinSendPage } from "./pages/app/send";
import { PayPage } from "./pages/app/pay";
import { NewsPicPage } from "./pages/app/newspic";

//행사 페이지
import { Event230804Page } from "./pages/promotion/230804";
import { Event231008Page } from "./pages/promotion/231008";

import { Routes, Route, useSearchParams, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/home/home.page";
import { useCookies } from "react-cookie";
import Axios from "axios";

function App() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['sessionID']);

  const [user, setUser] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userImg, setUserImg] = useState("");
  let [userCoin, setUserCoin] = useState("");
  let [userSekai, setUserSekai] = useState("");
  let [userCash, setUserCash] = useState("");

  useEffect(() => {if (searchParams.get("sessionID") !== null) {
    removeCookie('sessionID');
    setCookie('sessionID', searchParams.get("sessionID"));
    navigate('/');
    window.location.reload();
  }});

  //Requesting on http://localhost:5000/auth/login/success and getting users data.
  useEffect(() => {
    const token = cookies.sessionID;
    Axios.get("https://mapi.pcor.me/api/auth/login/success.php?sessionID="+token, {
      withCredentials: true,
      credentials: 'same-origin',
    })
      .then((res) => {
        if (res.data.status == "success") {
          setUserName(res.data.user[0]);
          setUserEmail(res.data.user[1]);
          setUserImg(res.data.user[2]);
          setUserCoin(res.data.user[3]);
          setUserSekai(res.data.user[4]);
          setUserCash(res.data.user[5]);
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const token = cookies.sessionID;
    Axios.get("https://imnyang.xyz/api")
      .then((res) => {
        
          console.log(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<AuthPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/aboutPlus" element={<AboutpPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/metroPlus" element={<AboutmPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/classPlus" element={<AboutcPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/virtualPlus" element={<AboutvPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/gamingPlus" element={<AboutgPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/todayTravel" element={<TravelPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        
        <Route path="/shop" element={<ShopPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/card/setting" element={<CardPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/support" element={<SupportPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        
        <Route path="/reward" element={<NewsPicPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />

        <Route path="/event/pl0804act" element={<Event230804Page isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/event/pl1008act" element={<Event231008Page isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />

        <Route path="/coin/sekai" element={<SekaiIssuePage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/coin/sekai/change" element={<SekaiChangePage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path="/coin" element={<CoinPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} userSekai={userSekai} />} />
        <Route path="/coin/send" element={<CoinSendPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} userSekai={userSekai} />} />
        <Route path="/cash/pay" element={<PayPage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        
        <Route path="/" element={<HomePage isLogin={userName.length > 0 ? true:false} userName={userName} userEmail={userEmail} userImage={userImg} userCoin={userCoin} userCash={userCash} />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
