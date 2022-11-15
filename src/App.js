import Explorer from "./components/Layout/Explorer";
import Header from "./components/Layout/Header";
import Tabs from "./components/Layout/Tabs";
import { TabProvider } from "./context/TabContext";

function App() {
  return (
    <TabProvider>
      <Header />
      <div className="tabs_container">
        <Explorer />
        <Tabs />
      </div>
    </TabProvider>
  );
}

export default App;
