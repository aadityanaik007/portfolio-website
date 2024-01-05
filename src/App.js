import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills";
import Certfication from "./components/Certification/certfication"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";
import Portfolio from "./components/Portfolio/portfolio";
import Experience from "./components/Experience/Experience";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skills/>
      <Experience/>
      <Certfication/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
