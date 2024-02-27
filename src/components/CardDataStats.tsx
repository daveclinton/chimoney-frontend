import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;

  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="flex w-full flex-col justify-between rounded-xl bg-white px-7.5 py-6 shadow-2xl">
      <div className="">{children}</div>
      <div className="flex max-w-25 items-end justify-between gap-2">
        <h4 className=" text-2xl font-bold text-black dark:text-white lg:text-5xl">
          {total}
        </h4>
        <span className="text-md font-medium uppercase">{title}</span>
      </div>
      <div className="mt-5 flex flex-col gap-3 lg:flex-row">
        <button
          type="button"
          className="focus:black focus:black mb-2 inline-flex w-full items-center  justify-center gap-2 rounded-3xl bg-black px-2 py-3 text-center text-lg font-medium text-white focus:outline-none "
        >
          Send
          <svg
            className=" h-5 w-5 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
        <button
          type="button"
          className="focus:black focus:grayShade mb-2 inline-flex w-full items-center  justify-center gap-2 rounded-3xl bg-grayShade px-2 py-3 text-center  text-lg font-medium text-slate-950  hover:bg-gradient-to-br "
        >
          Request
          <svg
            className=" h-5 w-5 text-slate-900"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardDataStats;
