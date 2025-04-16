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
];

const TabsContainer = () => {
  const [tabs, setTabs] = useState<TabType[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [max, setMax] = useState(10);
  // const [pinned, setPinned] = useState<TabType[]>([]);
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
    console.log(window.innerWidth);

    const maxTabs = Math.ceil(window.innerWidth / 150);
    console.log(maxTabs);

    setMax(maxTabs);
  }, []);

  // useEffect(() => {
  //   setPinned((prev) => [...prev, ...tabs.filter((tab) => tab.pinned)]);
  // }, [tabs]);

  const pinned = tabs.filter((tab) => tab.pinned);

  useEffect(() => {
    const saved = localStorage.getItem("tabs");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTabs(parsed);
      } catch (error) {
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
    <header className="max-w-full w-screen flex items-center">
      <nav className="flex w-screen overflow-x-hidden">
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
          {tabs
            .map(
              (tab) =>
                !tab.pinned && (
                  <AnimatedTab
                    key={tab.title}
                    tab={tab}
                    handlePin={handlePin}
                    handleDelete={handleDelete}
                  />
                )
            )
            .slice(0, max)}
        </Reorder.Group>
      </nav>
      {tabs.length > max && (
        <button
          className="p-4 bg-white h-full"
          onClick={() => setShowMore((prev) => !prev)}
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
      {showMore && (
        <div className="absolute right-1 top-33 p-4 border-1 rounded-md bg-white flex flex-col justify-center items-center">
          {tabs
            .slice(max)
            .map(
              (tab) =>
                !tab.pinned && (
                  <Tab
                    key={tab.title}
                    tab={tab}
                    handlePin={handlePin}
                    handleDelete={handleDelete}
                    className="border-none"
                  />
                )
            )}
        </div>
      )}
    </header>
  );
};

export default TabsContainer;
