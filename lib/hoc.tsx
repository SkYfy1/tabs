import { TabProps } from "@/components/Tab";
import { Reorder } from "motion/react";
import { usePathname } from "next/navigation";
import React from "react";

const withAnimation = <P extends TabProps>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => {
    const pathname = usePathname();
    const isActive = pathname == `/${props.tab.title}`;

    return (
      <Reorder.Item
        className="flex items-center"
        id={props.tab.title}
        layoutId={props.tab.title}
        value={props.tab}
        drag
        animate={{
          color: isActive ? "#000000" : "#99a1af",
          backgroundColor: "#ffffff",
          borderTopColor: isActive ? "#4690E2" : "#e5e7eb",
        }}
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
