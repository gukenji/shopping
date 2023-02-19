import "./App.css";
import Nav from "./components/Nav";
import SectionNav from "./components/SectionNav";
import Home from "./components/Home";
function App() {
  return (
    <div className="main">
      <Nav quantity={0} />
      <SectionNav />
      <Home />
    </div>
  );
}

export default App;
