import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header/header.prod.jsx";
import Footer from "../../components/footer/footer.prod.jsx";
import { Card, Avatar, Tabs, Breadcrumb } from "flowbite-react";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export const TravelPage = (props) => {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mapi.pcor.me/api/board/list.php?id=58&page=1")
      .then((response) => setBoardData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
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
            <Breadcrumb.Item>
              {boardData.board && boardData.board.name}{" "}
              {/* 여기서 제목을 표시합니다 */}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h3
            class="flex items-center pt-6 md:px-4 text-3xl font-bold
          capitalize dark:text-gray-300"
          >
            <span>{boardData.board && boardData.board.name}</span>
          </h3>
          <p
            class="flex items-center pt-4 pb-12 md:px-4 font-semibold text-lg
          capitalize dark:text-gray-300"
          >
            {boardData.board && boardData.board.description}
          </p>

          <div class="pt-1 pb-1 md:px-4">
            {/* 글들을 표시하는 로직 추가 */}
            {boardData.posts &&
              boardData.posts.map((post) => (
                <Card
                  href={`https://mapi.pcor.me/view.php?id=${post.postid}`}
                  className="mb-2"
                  key={post.postid}
                >
                  <h5 className="truncate md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <div className="text-xs md:text-sm flex flex-wrap gap-2">
                      조회수 {post.view} | {post.date}
                    </div>
                  </p>
                </Card>
              ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
