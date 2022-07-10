import "./App.css";
import { Dashdock } from "./components/Dashdock";
import { Dashlay } from "./components/Dashlay";
import { Floatbox } from "./components/Floatbox";
import { Menuoptions } from "./components/Menuoptions";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { useDash } from "./context/Dashcontext";

function App() {
  const { state } = useDash();
  return (
    <>
      <Navbar />
      <div className="container__grid">
        <Sidebar />
        <Menuoptions />
        <div className="cmain">
          <Dashlay />
          {state.sview && <Dashdock />}
        </div>
      </div>
      <Floatbox />
    </>
  );
}

export default App;
