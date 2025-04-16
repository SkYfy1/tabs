"use client";
import React, { useState } from "react";
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
];

const TabsContainer = () => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);
  const handlePin = (title: string) => {
    setTabs((prev) =>
      prev.map((tab) => {
        if (tab.title != title) return tab;
        return { ...tab, pinned: !tab.pinned };
      })
    );
  };
  const pinnedItems = tabs.filter((tab) => tab.pinned);
  return (
    <header className="max-w-full ">
      <nav className="flex">
        <div className="flex">
          {pinnedItems.map((tab) => (
            <Tab key={tab.title} tab={tab} handlePin={handlePin} />
          ))}
        </div>
        <Reorder.Group
          className="flex"
          axis="x"
          values={tabs}
          onReorder={setTabs}
          style={{ overflowX: "hidden" }}
        >
          {tabs.map(
            (tab) =>
              !tab.pinned && (
                <AnimatedTab key={tab.title} tab={tab} handlePin={handlePin} />
              )
          )}
        </Reorder.Group>
      </nav>
    </header>
  );
};

export default TabsContainer;
