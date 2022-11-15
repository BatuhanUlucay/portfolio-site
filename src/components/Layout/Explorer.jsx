import React, { useContext } from "react";
import TabContext, { tabs } from "../../context/TabContext";

function Explorer() {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <div className="explorer">
      <p style={{ color: "white", marginLeft: "1.5rem", marginTop: "0" }}>EXPLORER</p>
      <h4 style={{ color: "white", marginLeft: "1.5rem" }}>PORTFOLIO</h4>
      <div className="files">
        {tabs.map((tab) => (
          <div key={tab}
            className={`file ${currentTab === tab ? "active" : ""}`}
            onClick={() => {
              setCurrentTab(tab);
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorer;
