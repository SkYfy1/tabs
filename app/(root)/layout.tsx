import TabsContainer from "@/components/TabsContainer";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-1 min-h-screen h-screen flex flex-col">
      <TabsContainer />
      <main className="bg-gray-bg p-5 flex-1">{children}</main>
    </div>
  );
};

export default Layout;
