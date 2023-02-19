import Nav from "../../Nav";
import SectionNav from "../../SectionNav";
import ShowCase from "../../ShowCase";

function Nerd() {
  return (
    <div className="main">
      <Nav quantity={0} />
      <SectionNav />
      <ShowCase />
    </div>
  );
}

export default Nerd;
