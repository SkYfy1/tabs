import Link from "next/link";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import withAnimation from "@/lib/hoc";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface TabProps {
  tab: TabType;
  handlePin: (title: string) => void;
  handleDelete: (title: string) => void;
  className?: string;
}

export const Tab = ({ tab, handlePin, className, handleDelete }: TabProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = `/${tab.title}` === pathname;
  return (
    <div
      className={cn(
        "flex border-t items-center h-full w-fit max-w-44 after:content-[''] after:h-4 after:border-r-[0.5] after:translate-y-0.5 after:text-gray-200",
        className
      )}
      style={{
        borderTopColor: isActive ? "#4690E2" : "#e5e7eb",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }}
    >
      <Popover open={isOpen}>
        <PopoverTrigger asChild>
          <Link
            href={tab.title}
            className={cn(
              "my-3 border-gray-200 flex gap-2.5 items-center px-3 capitalize",
              className
            )}
            draggable={false}
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
            {!tab.pinned && tab.title}
            {!tab.pinned && (
              <svg
                onClick={() => handleDelete(tab.title)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={cn(
                  "size-4 translate-y-0.5 hover:text-red-500 hover:bg-gray-300 rounded-full p-0.5 duration-150 invisible",
                  isActive && "visible"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </Link>
        </PopoverTrigger>
        <PopoverContent
          className="text-[#99a1af] flex gap-1 w-fit text-sm cursor-pointer p-2 rounded-sm shadow-sm"
          onClick={() => handlePin(tab.title)}
        >
          <Image src="/pin.svg" width={12} height={12} alt="pin" />
          {tab.pinned ? "Unpin" : "Pin"} tab
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const AnimatedTab = withAnimation(Tab);

// className="flex py-3 border-t border-t-gray-200 items-center text-gray-400 hover:bg-gray-200 hover:text-black duration-200"
