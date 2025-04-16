import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Tab = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const isActive = title === pathname;
  console.log(isActive);
  return (
    <li className="flex py-3 border-t border-t-gray-200 items-center text-gray-400 hover:bg-gray-200 hover:text-black duration-200">
      <Link
        href={title}
        className="border-r-1 h-2/3 border-gray-200 flex gap-2 items-center px-4 capitalize"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
        {title}
      </Link>
    </li>
  );
};

export default Tab;
