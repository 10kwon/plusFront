import React from "react";
import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

export const KkutuHelp = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <div className="bg-white flex"> {/* 부모 요소에 flex 속성 적용 */}
      <Tab.Group>
        <Tab.List className="flex flex-col w-[300px] h-[500px] divide-y-2 divide-gray-300 border-r-2"> {/* 탭 리스트에 flex 속성 적용 */}
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected ? 'bg-blue-500 text-white font-bold py-2 text-lg px-4 text-left' : 'py-2 text-lg px-4 text-left border-b'
                }
              >
                1. 소개
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected ? 'bg-blue-500 text-white font-bold py-2 text-lg px-4 text-left' : 'py-2 text-lg px-4 text-left border-b'
                }
              >
                2. 인터페이스
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected ? 'bg-blue-500 text-white font-bold py-2 text-lg px-4 text-left' : 'py-2 text-lg px-4 text-left border-b'
                }
              >
                3. 게임 모드
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4 flex w-[700px] h-[500px] overflow-y-scroll"> {/* 패널 리스트에 flex 속성 적용 */}
          <Tab.Panel class="w-full">
          <h4 class="font-bold mb-4 text-3xl">소개</h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-qOu-WZ_MEM?si=t-ScZuNcNf9MCMjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p class="py-4 text-center">동영상을 통해 플러스끄투를 알아보세요.</p>
          <p>플러스끄투 (Plus KKuTu)는 끄투(KKuTu) 오픈소스를 이용한 온라인 단어 게임입니다. 게임 유형에 따라 자신의 턴에 적절한 단어를 입력하면 점수를 획득할 수 있습니다. 게임 내에서 가장 높은 점수를 획득한 참가자가 승리합니다.</p>
          </Tab.Panel>
          <Tab.Panel class="w-full">
          <h4 class="font-bold mb-4 text-3xl">인터페이스</h4>
          <p>이 장에서는 플러스끄투를 이용하면서 접하게 될 여러 화면들에 대한 설명을 하고 있습니다.</p>
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>로비 화면</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p>로비에서는 채널에 접속해 있는 사람들과 개설된 방들을 보여주고 있습니다.
              </p>
              <p>
              <strong>여기서 할 수 있는 것들:</strong></p>
             
              <ul>
              <li>접속자 목록과 방 목록 보기</li>
              <li>방 만들기</li>
              <li>상점 이용하기</li>
              <li>리플레이 보기</li>
              <li>공지사항 보기</li>
              <li>내 모레미 꾸미기</li>
              <li>로비에 있는 사람들과 대화하기</li>
              </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>대기실</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p>게임 대기실에서는 해당 방에 접속하여 같이 게임을 할 수 있는 사람들을 보여주고 있습니다. 게임 대기실에 참가한 사람들이 모두 준비 상태가 되어야 방장이 게임을 시작할 수 있습니다.
              </p>
              <p>
              <strong>방 참가자의 상태:</strong></p>
              <p>
              방장 - 해당 방을 관리하는 사람을 나타냅니다.<br/>
              대기 - 게임을 시작할 준비가 되지 않은 상태입니다.<br/>
              연습 - 연습 게임을 하고 있는 상태입니다. 이 상태는 대기 상태로 간주됩니다.<br/>
              준비 - 게임을 시작할 준비가 된 상태입니다.<br/>
              관전 - 게임을 구경할 것임을 나타냅니다. 이 상태는 준비 상태로 간주됩니다.
              </p>
              <p>
              <strong>여기서 할 수 있는 것들:</strong></p>
              <p>
              방에 접속한 사람들 보기<br/>
              (방장 권한) 방 설정하기<br/>
              (방장 권한) 참가자 강제 퇴장시키기<br/>
              (방장 권한) 로비에 있는 사람들을 초대하기<br/>
              (방장 권한) 끄투 봇 초대하기<br/>
              (방장 권한) 초대 링크 생성하기<br/>
              연습 게임 시작하기<br/>
              게임 준비 및 시작하기<br/>
              방에 접속한 사람들과 대화하기
              </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>게임 화면</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p>게임 화면에서는 참가자들의 차례와 점수를 보여주고 있습니다. 차례가 되면 해당 참가자가 강조되며 이 때 제한된 시간 안에 차례를 넘겨야 합니다. 관전자는 게임 화면에서 나타나지 않으며 대화만 가능합니다.
              </p>
              <p>
              <strong>여기서 할 수 있는 것들:</strong></p>
              <p>
              게임을 즐기기<br/>
              방에 접속한 사람들과 대화하기
              </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </Tab.Panel>
          <Tab.Panel class="w-full">
          <h4 class="font-bold mb-4 text-3xl">게임 모드</h4>
          <p>이 장에서는 플러스끄투에서 방을 만들거나 설정할 때 이용할 수 있는 게임 유형에 대해 설명하고 있습니다. 방 만들기 및 방 설정 창에서 게임 유형을 정할 수 있습니다.</p>
          
        <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl mt-4 bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-black shadow'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              한국어 모드
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-black shadow'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              영어 모드
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-black shadow'
                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              테스트 모드
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            한국어로 플레이 가능한 게임 모드입니다.
            
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 쿵쿵따</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div class="page-body"><p><b>한국어 쿵쿵따</b>는 이전 한국어 단어의 끝 한 자리로 시작하는 <b>꼭 3글자의</b> 한국어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>고구마</word> → <word>마늘종</word> → <word>종달새</word></blockquote><p>한글 맞춤법 3장 5절(두음 법칙)을 따라 음절을 바꾸어 이을 수 있습니다.</p><blockquote><word>경수로</word> → <word>노동력</word> → <word>역무원</word></blockquote></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 끝말잇기 (한끝)</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div class="page-body"><p><b>한국어 끝말잇기</b>는 이전 한국어 단어의 끝 한 자리로 시작하는 <b>2글자 이상의</b> 한국어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>강아지</word> → <word>지피지기</word> → <word>기회</word></blockquote><p>한글 맞춤법 3장 5절(두음 법칙)을 따라 음절을 바꾸어 이을 수 있습니다.</p><blockquote><word>강강술래</word> → <word>내력</word> → <word>역학적에너지</word></blockquote></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>자음퀴즈 (자퀴)</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div class="page-body"><p><b>자음퀴즈</b>는 제한 시간 안에 정답 단어의 초성 표현만 보고 정답 단어를 짐작해야 하는 게임입니다.
라운드가 시작되면 다음과 같이 주제와 초성 표현이 나타납니다.</p><blockquote><word>집ㅈㅎㄹ</word> (주제: 컴퓨터)</blockquote><p>시간이 지남에 따라 두 종류의 힌트가 제시되며, 아래와 같이 나타납니다.</p><blockquote><h5>두 개 이상의 회로 소자 모두가 기판 위나 기판 내에 서로 분리될 수 없도록 결합한 전자 회로. 크기가 작으면서도 동작 속도가 빠르고 전력 소비가 적으며 가격이 싸다는 이점이 있다. ≒아이시03(IC).</h5></blockquote><blockquote><word>집ㅈ회로</word></blockquote><p>정답 단어를 입력했을 경우 맞춘 순서와 남은 시간 등을 고려하여 점수가 지급됩니다.
이 때 제한 시간이 최대 10초로 설정되며 제한 시간이 초과된 경우 정답 단어가 표시되면서 다음 라운드로 넘어갑니다.</p><p>힌트 등으로도 정답 단어를 유추하기 힘들 때에 아래와 같은 명령어를 입력하면 해당 라운드를 포기할 수 있습니다.</p><blockquote><word>gg</word>, <word>ㅈㅈ</word></blockquote><p>모든 참가자가 답을 맞혔거나 포기를 했다면 즉시 정답 단어가 표시되며 다음 라운드로 넘어갑니다.</p></div>
</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 십자말풀이</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div class="page-body"><p><b>한국어 십자말풀이</b>는 제한 시간 안에 가로·세로로 배치된 문제들의 답을 최대한 많이 맞춰야 하는 게임입니다.
게임이 시작되면 라운드 수에 따라 문제 판이 생성되며, 아래 사진과 같이 나타납니다.
게임 참가자는 다른 문제 판의 문제를 풀기 위해 아래 사진에 나타난 라운드 표시 문자를 클릭할 수 있습니다.</p><img src="//kkutu.cc/img/kkutu/help/cwround.png"/><p>문제 판의 막대를 클릭하면 화면 왼쪽에 문제가 출제됩니다. 문제를 읽고, 문제 판의 상태나 글자 수 등을 참고하여 정답을 맞춥시다.
정답을 맞춘 경우 정답이 막대에 나타나며 자신이 맞춘 경우 초록색, 다른 참가자가 맞춘 경우 회색으로 표시됩니다.</p><p>제한 시간이 초과되거나 모든 문제 판의 정답을 맞혔을 경우 게임이 종료되며 가장 많은 점수를 획득한 참가자가 승리합니다.</p></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 타자 대결</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p><b>한국어 타자 대결</b>은 주어진 시간 동안 제시된 한국어 단어를 최대한 빠르게 입력하는 게임입니다.
매 라운드마다 참가자의 타 수를 확인할 수 있으며, 획득한 점수를 합산하여 가장 높은 점수를 획득한 참가자가 승리합니다.</p>
               </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 앞말 잇기</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div class="page-body"><p><b>한국어 앞말잇기</b>는 이전 한국어 단어의 앞 한 자리로 끝나는 <b>2글자 이상의</b> 한국어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>강아지</word> → <word>한강</word> → <word>엄동설한</word></blockquote><p>한글 맞춤법 3장 5절(두음 법칙)을 따라 음절을 바꾸어 이을 수 있습니다.</p><blockquote><word>림프샘</word> → <word>라임</word> → <word>가이아나</word></blockquote></div>
               </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>훈민정음</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>훈민정음</b>은 주어진 초성 2개를 보고 해당 초성으로 조합할 수 있는 2글자의 한국어 단어를 이용하여 차례를 넘기는 방식입니다.
제시 초성이 <word>ㄱㅁ</word>이라면</p><blockquote><word>고무</word>, <word>광명</word>, <word>기마</word></blockquote><p>등으로 차례를 넘길 수 있습니다.</p></div>
</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 단어 대결 (단대)</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>한국어 단어 대결</b>은 주어진 주제를 보고 해당 주제와 관련된 한국어 단어를 이용하여 차례를 넘기는 방식입니다.
주제가 <word>화학</word>이라면</p><blockquote><word>헬륨</word>, <word>수소</word>, <word>이온</word></blockquote><p>등으로 차례를 넘길 수 있습니다.</p></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>한국어 솎솎</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p><b>한국어 솎솎</b>은 흩어진 글자들 중 한국어 단어를 솎아 내어 점수를 획득하는 방식입니다.
화면에 나타나 있는 글자들을 적절히 조합하여 단어를 만들면 단어의 길이에 따라 점수를 획득할 수 있습니다.</p>
 </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </Tab.Panel>
          <Tab.Panel>
            영어로 플레이 가능한 게임 모드입니다.
            <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 끄투</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>영어 끄투</b>는 이전 영어 단어의 끝 두 자리 또는 세 자리로 시작하는 <b>4글자 이상의</b> 영어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>please</word> → <word>seven</word> → <word>venture</word></blockquote><p>단, 해당 라운드에서 가장 먼저 차례를 받는 참가자는 주어진 제시어 한 자리로만 단어를 잇습니다.
이 때 2~3글자의 영어 단어로 차례를 넘길 수 있는데, 2글자로 넘긴 경우 다음 차례에서 끝 한 자리로만 단어를 잇게 됩니다.</p><blockquote><word>if</word> → <word>focus</word> → <word>customer</word></blockquote><blockquote><word>ant</word> → <word>antarctic</word> → <word>icon</word></blockquote></div>
 </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 끝말잇기 (영끝)</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>영어 끝말잇기</b>는 이전 영어 단어의 끝 한 자리로 시작하는 <b>2글자 이상의</b> 영어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>summer</word> → <word>reign</word> → <word>northern</word></blockquote></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 타자 대결</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p><b>영어 타자 대결</b>은 주어진 시간 동안 제시된 영어 단어를 최대한 빠르게 입력하는 게임입니다.
매 라운드마다 참가자의 타 수를 확인할 수 있으며, 획득한 점수를 합산하여 가장 높은 점수를 획득한 참가자가 승리합니다.</p>
               </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 단어 대결 (단대)</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>영어 단어 대결</b>은 주어진 주제를 보고 해당 주제와 관련된 영어 단어를 이용하여 차례를 넘기는 방식입니다.
주제가 <word>인체</word>라면</p><blockquote><word>head</word>, <word>shoulder</word>, <word>body</word></blockquote><p>등으로 차례를 넘길 수 있습니다.</p></div>
               </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 솎솎</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <p><b>영어 솎솎</b>은 흩어진 글자들 중 영어 단어를 솎아 내어 점수를 획득하는 방식입니다.
화면에 나타나 있는 글자들을 적절히 조합하여 단어를 만들면 단어의 길이에 따라 점수를 획득할 수 있습니다.</p>
 </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>영어 앞말잇기</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>영어 앞말잇기</b>는 이전 영어 단어의 앞 한 자리로 끝나는 <b>2글자 이상의</b> 영어 단어를 이용하여 차례를 넘기는 방식입니다.</p><blockquote><word>red</word> → <word>upper</word> → <word>you</word></blockquote></div>
 </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </Tab.Panel>
          <Tab.Panel>
            실험중인 게임 모드입니다.<br/>
            갑자기 모드가 사라지거나 변경될 수 있으며, 대개 기간을 정해 놓고 실험을 진행합니다.<br/>
            <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>수학퀴즈</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform' : 'rotate-180'
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              <div><p><b>수학퀴즈</b>는 주어진 수식이나 연산 문제를 해결하는 방식입니다. 라운드가 시작되면 다음과 같이 난이도와 문제가 나타납니다.</p>
              <p>난이도: 초등학교<br/>3 + 5</p>
              <p><b>답: 8</b></p>
              <p>이 때 제한 시간이 최대 10초로 설정되며 제한 시간이 초과된 경우 정답이 표시되면서 다음 라운드로 넘어갑니다.</p></div>
 </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
