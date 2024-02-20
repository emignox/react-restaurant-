import "./App.css";
import Header from "./components/navbar";
import Space_one from "./components/space1";
import Section2 from "./components/space2";
import Section3 from "./components/section3";

function landingPage() {
  return (
    <div>
      <Header />
      <Space_one />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default landingPage;
