import Explorer from "./components/Layout/Explorer";
import Header from "./components/Layout/Header";
import Tabs from "./components/Layout/Tabs";

function App() {
  return (
    <>
      <Header />
      <div className="tabs_container">
      <Explorer />
      <Tabs />

      </div>
    </>
  );
}

export default App;
