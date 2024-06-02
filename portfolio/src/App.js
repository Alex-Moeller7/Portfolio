import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import LinkBtns from "./components/LinkBtns/linkBtns";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro />
      <Skills />
      <LinkBtns />
      <Footer />
    </div>
  );
}

export default App;
