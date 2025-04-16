import React from "react";

const Page = async ({ params }: { params: Promise<{ tab: string }> }) => {
  const tab = (await params).tab;
  return <div className="w-full h-full bg-white p-2 rounded-sm">{tab}</div>;
};

export default Page;
