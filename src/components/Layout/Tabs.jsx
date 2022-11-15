import React, { useContext } from "react";
import TabContext, { tabs } from "../../context/TabContext";

function Tabs() {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          className={`tab ${currentTab === tab ? "active" : ""}`}
          onClick={() => {
            setCurrentTab(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
