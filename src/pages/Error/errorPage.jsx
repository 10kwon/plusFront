import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = (props) => {
  const navigate = useNavigate();
  return (
    <div class="flex items-center justify-center min-h-screen bg-white py-48">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <img
            src="/404_nocharacter.png"
            alt="404 NOT FOUND - 미끄랴끼얏호우!"
            class="h-96"
          />
        </div>
        <button
          onClick={() => navigate("/")}
          class="mt-16 w-2/3 bg-blue-500 text-white text-center m-auto py-2 text-xl font-bold rounded-xl transform ease-in duration-100 active:scale-95 hover:bg-blue-700"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};
