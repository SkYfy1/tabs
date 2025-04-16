import { Reorder } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

const withAnimation = (Component: any) => {
  const WrappedComponent = (props: any) => {
    const pathname = usePathname();
    const isActive = pathname == `/${props.tab.title}`;

    return (
      <Reorder.Item
        className="flex items-center "
        id={props.tab.title}
        value={props.tab}
        drag
        whileDrag={{
          color: "#ffffff",
          backgroundColor: "#7f858d",
        }}
        whileHover={{
          backgroundColor: "#F1F5F8",
          color: "#000000",
        }}
      >
        <Component {...props} />
      </Reorder.Item>
    );
  };

  return WrappedComponent;
};

export default withAnimation;
