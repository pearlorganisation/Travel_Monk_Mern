import { createContext, useContext, useState } from "react";
import { useMediaQuery } from "./use-media-query";
import { cn } from "../utils";

import { AnimatePresence, motion } from "framer-motion";

const TabsContext = createContext(undefined);
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};
export function TabsProvider({ children, defaultValue, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn("w-full h-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}
export function TabList({ children, className }) {
  return <div className={cn("rounded-sm h-fit", className)}>{children}</div>;
}
export function TabItem({ children, value, index }) {
  console.log(index);
  const { activeTab, setActiveTab } = useTabs();
  return (
    <motion.div
      className={`rounded-lg overflow-hidden mb-2 ${
        activeTab === value
          ? "active border-2 dark:border-[#656fe2] border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]"
          : "bg-transparent border-2 dark:hover:border-[#656fe2]"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
}
export function TabHeader({ children, value }) {
  const { activeTab } = useTabs();
  return (
    <h3
      className={`p-4 cursor-pointer transition-all font-semibold dark:text-white text-black dark:hover:bg-[#1e2a78] hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
        activeTab === value
          ? "active dark:bg-[#1e2a78] bg-[#F2F2F2]"
          : "dark:bg-[#11112b] bg-white"
      }`}
    >
      {children}
    </h3>
  );
}
export function TabDes({ children, value }) {
  const { activeTab } = useTabs();
  return (
    <AnimatePresence mode="sync">
      {activeTab === value && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.14,
          }}
        >
          <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
            {children}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function TabImageContainer({ children, className }) {
  return (
    <div className={cn("", className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
}
export function TabImage({ children, value, index }) {
  console.log(index);
  const { activeTab, isDesktop } = useTabs();
  if (activeTab !== value || !isDesktop) return null;
  return (
    <motion.div className="p-4 h-[400px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, overflow: "hidden" }}
        animate={{ opacity: 1, overflow: "hidden" }}
        exit={{ opacity: 0, overflow: "hidden" }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
