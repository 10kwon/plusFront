import React from 'react';
import { useNavigate } from "react-router-dom";

export const ErrorPage = (props) => {
    const navigate = useNavigate()
    return(
<div class="flex items-center justify-center min-h-screen bg-white py-48">
<div class="flex flex-col">
<div class="flex flex-col items-center">
<img src="https://injeonmetro.co.kr/resources/images/DASI-404.png" alt="404" class="h-32"/>
<div class="text-red-500 font-bold text-7xl">
404
</div>
<div class="text-3xl xl:text-7xl lg:text-6xl md:text-5xl">
Not Found
</div>
<div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
찾는 페이지가 존재하지 않아요
</div>
</div>
<button 
onClick={() => navigate('/')}
class="mt-16 w-2/3 bg-blue-500 text-white text-center m-auto py-2 text-xl font-bold rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700">
홈으로
</button>
</div>
</div>
    )
}