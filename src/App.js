import "./App.css";
import Nav from "./components/Nav";
import SectionNav from "./components/SectionNav";
function App() {
  return (
    <div>
      <Nav quantity={0} />
      <SectionNav />
    </div>
  );
}

export default App;
