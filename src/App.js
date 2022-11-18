import { useState, useEffect, useContext } from "react";
import Explorer from "./components/Layout/Explorer";
import Header from "./components/Layout/Header";
import Tabs from "./components/Layout/Tabs";
import TabContext from "./context/TabContext";
import Home from "./components/Contents/Home";
import Projects from "./components/Contents/Projects";
import Resume from "./components/Contents/Resume";
import Contact from "./components/Contents/Contact";
import Footer from "./components/Layout/Footer";

function App() {
  const { currentTab } = useContext(TabContext);
  const [page, setPage] = useState(<Home />);

  useEffect(() => {
    console.log(currentTab);

    switch (currentTab) {
      case "home.js":
        setPage(<Home />);
        break;
      case "projects.json":
        setPage(<Projects />);
        break;
      case "resume.pdf":
        setPage(<Resume />);
        break;
      case "contact.css":
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
      <Footer />
    </>
  );
}

export default App;
