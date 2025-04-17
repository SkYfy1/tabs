"use client";
import React, { useEffect, useState } from "react";
import { AnimatedTab, Tab } from "./Tab";
import { Reorder } from "motion/react";

const initialTabs = [
  {
    title: "dashboard",
    image: "/",
    pinned: false,
  },
  {
    title: "banking",
    image: "/",
    pinned: false,
  },
  {
    title: "accounting",
    image: "/",
    pinned: false,
  },
  {
    title: "dsadas",
    image: "/",
    pinned: false,
  },
  {
    title: "dsadasda",
    image: "/",
    pinned: false,
  },
  {
    title: "afdsfs",
    image: "/",
    pinned: false,
  },
  {
    title: "fdsafsa",
    image: "/",
    pinned: false,
  },
  {
    title: "fdasfasf",
    image: "/",
    pinned: false,
  },
  {
    title: "fdsafas",
    image: "/",
    pinned: false,
  },
  {
    title: "dfdsard",
    image: "/",
    pinned: false,
  },
  {
    title: "bafdsaing",
    image: "/",
    pinned: false,
  },
  {
    title: "acfdsaing",
    image: "/",
    pinned: false,
  },
  {
    title: "acfdsaaing",
    image: "/",
    pinned: false,
  },
  {
    title: "acdsadassaing",
    image: "/",
    pinned: false,
  },
  {
    title: "acfdsdsag",
    image: "/",
    pinned: false,
  },
  {
    title: "acdsadassag",
    image: "/",
    pinned: false,
  },
  {
    title: "acdsaddsag",
    image: "/",
    pinned: false,
  },
  {
    title: "acddsasag",
    image: "/",
    pinned: false,
  },
  {
    title: "acdsadd3g",
    image: "/",
    pinned: false,
  },
];

const TabsContainer = () => {
  const [tabs, setTabs] = useState<TabType[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [max, setMax] = useState(10);
  const handlePin = (title: string) => {
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.title != title) return tab;
        return { ...tab, pinned: !tab.pinned };
      })
    );
  };
  const handleDelete = (title: string) => {
    setTabs((prev) => prev.filter((tab) => tab.title != title));
  };

  useEffect(() => {
    const maxTabs = Math.ceil(window.innerWidth / 155);

    setMax(maxTabs);
  }, []);

  const pinned = tabs.filter((tab) => tab.pinned);

  useEffect(() => {
    const saved = localStorage.getItem("tabs");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTabs(parsed);
      } catch (error) {
        console.log(error);
        setTabs(initialTabs);
      }
    } else {
      setTabs(initialTabs);
    }
  }, []);

  useEffect(() => {
    if (tabs.length > 1) {
      localStorage.setItem("tabs", JSON.stringify(tabs));
    }
  }, [tabs]);

  return (
    <header className="max-w-full w-screen flex items-center relative">
      <nav className="flex w-screen overflow-hidden">
        <div className="flex">
          {pinned?.map((tab) => (
            <Tab
              key={tab.title}
              tab={tab}
              handlePin={handlePin}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <Reorder.Group
          className="flex"
          axis="x"
          values={tabs}
          onReorder={(el) => {
            setTabs([...el, ...pinned]);
          }}
        >
          {tabs.map(
            (tab) =>
              !tab.pinned && (
                <AnimatedTab
                  key={tab.title}
                  tab={tab}
                  handlePin={handlePin}
                  handleDelete={handleDelete}
                />
              )
          )}
          {/* .slice(0, max) */}
        </Reorder.Group>
      </nav>
      {tabs.length > max && (
        <button
          className="group p-4 bg-white h-full hover:bg-blue-500 duration-300"
          onClick={() => setShowMore((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 group-hover:rotate-180 group-hover:stroke-white duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
      {showMore && (
        <div className="absolute right-1 top-0 translate-y-1/2 p-1.5 border-1 rounded-sm bg-white flex flex-col justify-center items-center">
          {tabs.slice(max).map(
            (tab) =>
              !tab.pinned && (
                <div key={tab.title} className="border-b">
                  <Tab
                    tab={tab}
                    handlePin={handlePin}
                    handleDelete={handleDelete}
                    className="border-none"
                  />
                </div>
              )
          )}
        </div>
      )}
    </header>
  );
};

export default TabsContainer;
