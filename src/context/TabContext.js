import { createContext, useState } from "react";
import { SiJavascript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { FaCss3 } from "react-icons/fa";

export const tabs = [
  { name: "home.js", logo: <SiJavascript color="yellow" className="logo" /> },
  { name: "projects.json", logo: <VscJson color="yellow" size={"1rem"} className="logo" /> },
  {
    name: "resume.pdf",
    logo: <BsFillFileEarmarkPdfFill color="red" className="logo" />,
  },
  { name: "contact.css", logo: <FaCss3 color="aqua" className="logo" /> },
];

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
