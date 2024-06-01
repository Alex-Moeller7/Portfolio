import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import LinkBtns from "./components/LinkBtns/linkBtns";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro />
      <Skills />
      <LinkBtns />

    </div>
  );
}

export default App;
