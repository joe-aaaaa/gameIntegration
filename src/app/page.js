"use client";

import { useState } from "react";

export default function HomePage() {

  const [showNotice, setShowNotice] = useState(true);

  return (
    <main className="relative w-screen h-screen bg-yellow-50 mx-auto flex flex-col justify-between">

      {/* home-notice */}
      {showNotice && (
        <div className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-center items-center">
          <div className="w-[500px] h-[300px] bg-green-700 border-[8px] border-brown-700 rounded-md flex items-center justify-center text-white text-2xl font-bold">
            課堂白日夢
          </div>
          <button
            onClick={() => setShowNotice(false)}
            className="w-[180px] h-[80px] mt-6 px-6 py-2 bg-yellow-300 border border-yellow-800 rounded-full shadow-md hover:bg-yellow-400 active:scale-95 transition"
          >
            ENTER
          </button>
        </div>
      )}

      {/* 上半區塊 */}
      <div className="flex items-end gap-4 h-[350px] mx-auto mt-10">
        {/* 垃圾桶 */}
        <div className="w-[60px] h-[100px] bg-gray-300 flex items-center justify-center text-sm ml-[25px]">垃圾桶</div>

        {/* 矮櫃 + 時鐘 疊起來 */}
        <div className="relative">
          <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-gray-400 flex items-center justify-center text-xs">時鐘</div>
          <div className="w-[180px] h-[100px]  bg-gray-300 flex items-center justify-center text-sm">矮櫃</div>
        </div>

        {/* 黑板 + 老師 + 對話框 疊起來 */}
        <div className="relative w-[250px] h-[100px]">
          <div className="absolute -top-[150px] w-[250px] h-[140px] bg-gray-400 flex items-center justify-center text-xs">黑板</div>
          <div className="absolute bottom-0 w-[80px] h-[140px] left-1/2 -translate-x-1/2 bg-gray-500 flex items-center justify-center text-xs">老師</div>
          <div className="absolute -top-[100px] left-[180px] -translate-x-1/2 w-[80px] h-[40px] bg-white border border-black rounded-2xl flex items-center justify-center text-xs">😡</div>
        </div>

        {/* 櫥櫃1 */}
        <div className="w-[100px] h-[100px] bg-gray-300 flex items-center justify-center text-sm">櫥櫃1</div>
        {/* 櫥櫃2 */}
        <div className="w-[100px] h-[100px] bg-gray-400 flex items-center justify-center text-sm ml-[-10px]">櫥櫃2</div>
        {/* 盆栽 */}
        <div className="w-[70px] h-[100px] bg-green-300 flex items-center justify-center text-sm ml-[-10px]">盆栽</div>

      </div>

      {/* 下半區塊：學生 */}
      <div className="w-full h-[480px] flex justify-center items-end pb-10">

        <div className="grid grid-cols-5 gap-x-15 gap-y-1">
          {[
            "白苡詰", "何慕昀", "許雅喬", "洪安旭", "毛怡蓁",
            "王巧薰", "何羽凡", "黃梓育", "張育涵", "謝雨彤",
          ].map((name, index) => (
            <div key={index} className="relative w-[120px] h-[180px] flex items-center justify-center">
              <button
                className="absolute -top-[40px] left-1/2 -translate-x-1
                  w-[100px] h-[50px] bg-white border border-black rounded-3xl 
                  flex items-center justify-center text-xs 
                  hover:bg-gray-100 active:scale-95 transition"
                onClick={() => console.log(`${name} 進入遊戲！`)} //進入遊戲按鈕，功能要自己改一下～
              >
                {name}
              </button>

              <div className="w-[135px] h-[145px] bg-blue-400 flex items-center justify-center text-xs">人物圖</div>
            </div>
          ))}
        </div>
      </div>
    </main>

  );
}
