import Link from "next/link";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import withAnimation from "@/lib/hoc";
import { usePathname } from "next/navigation";

export const Tab = ({
  tab,
  handlePin,
}: {
  tab: TabType;
  handlePin: (title: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = `/${tab.title}` === pathname;
  return (
    <div
      className="flex border-t items-center h-full"
      style={{
        color: isActive ? "#000000" : "#99a1af",
        background: "#ffffff",
        borderTopColor: isActive ? "#4690E2" : "#e5e7eb",
      }}
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Link
            onContextMenu={(e) => {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }}
            href={tab.title}
            className="my-3 border-gray-200 flex gap-2 items-center px-4 border-r"
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
          </Link>
        </PopoverTrigger>
        <PopoverContent
          className="text-[#99a1af] flex gap-2 w-fit text-sm cursor-pointer"
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
