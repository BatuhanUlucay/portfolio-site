import { createContext, useState } from "react";

export const tabs = ["home", "projects", "resume", "contact"];

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContext;
