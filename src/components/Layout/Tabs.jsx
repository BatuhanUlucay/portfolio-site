import React, { useContext } from "react";
import TabContext, { tabs } from "../../context/TabContext";

function Tabs() {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`tab ${currentTab === tab.name ? "active" : ""}`}
          onClick={() => {
            setCurrentTab(tab.name);
          }}
        >
          {tab.logo}
          {tab.name}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
