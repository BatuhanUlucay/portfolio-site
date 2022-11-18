import { createContext, useState } from "react";

export const tabs = ["home.js", "projects.json", "resume.pdf", "contact.css"];

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
