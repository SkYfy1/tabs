"use client";
import React, { useState } from "react";
import Tab from "./Tab";

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
];

const TabsContainer = () => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);
  return (
    <header>
      <nav>
        <ul className="flex">
          {tabs.map((tab) => (
            <Tab key={tab.title} title={tab.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TabsContainer;
