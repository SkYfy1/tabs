import TabsContainer from "@/components/TabsContainer";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-20">
      <TabsContainer />
      <main className="bg-gray-bg h-[1000px] p-5">{children}</main>
    </div>
  );
};

export default Layout;
