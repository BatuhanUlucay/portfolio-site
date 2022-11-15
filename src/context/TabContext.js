import { createContext, useState } from "react";

export const tabs = ["home.jsx", "projects.jsx", "resume.jsx", "contact.jsx"];

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
