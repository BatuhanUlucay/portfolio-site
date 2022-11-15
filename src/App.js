import { useState, useEffect, useContext } from "react";
import Explorer from "./components/Layout/Explorer";
import Header from "./components/Layout/Header";
import Tabs from "./components/Layout/Tabs";
import TabContext from "./context/TabContext";
import Home from "./components/Contents/Home";
import Projects from "./components/Contents/Projects";
import Resume from "./components/Contents/Resume";
import Contact from "./components/Contents/Contact";

function App() {
  const { currentTab } = useContext(TabContext);
  const [page, setPage] = useState(<Home />);

  useEffect(() => {
    console.log(currentTab);

    switch (currentTab) {
      case "home":
        setPage(<Home />);
        break;
      case "projects":
        setPage(<Projects />);
        break;
      case "resume":
        setPage(<Resume />);
        break;
      case "contact":
        setPage(<Contact />);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <>
      <Header />
      <Tabs />
      <div style={{ display: "flex" }}>
        <Explorer />
        {page}
      </div>
    </>
  );
}

export default App;
