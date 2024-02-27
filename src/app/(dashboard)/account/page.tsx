import CardDataStats from "@/components/CardDataStats";
import React from "react";

const Page = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
      <CardDataStats title="USD" total="21,999.00">
        <h1 className="text-xl">Total Balance</h1>
      </CardDataStats>
      <div className="w-full rounded-xl bg-white px-7.5 py-6 shadow-2xl">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div className="flex justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-10">
            <div className="to-gray-900 h-40 w-64 rounded-lg bg-gradient-to-r from-blue-700 via-blue-800 shadow-lg">
              <div className="m-2 flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="7" y1="15" x2="7.01" y2="15" />
                  <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                  <circle cx="14.5" cy="14.5" r="5.5" />
                </svg>
              </div>
              <div className="mt-4 flex justify-center">
                <h1 className="text-gray-400 font-os font-thin">
                  XXXX XXXX XXXX 1234
                </h1>
              </div>
              <div className="justfiy-end text-gray-400 font-quick flex flex-col p-4 lg:mt-4">
                <p className="text-xs font-bold">12 / 17</p>
                <h4 className="text-xs font-semibold uppercase tracking-wider">
                  Our customer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
