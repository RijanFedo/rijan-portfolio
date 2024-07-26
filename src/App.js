import logo from './logo.svg';
import './App.css';
import Introduction from "./sections/introduction/Introduction";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Certifications from "./sections/certifications/Certifications";
import Other from "./sections/other/Other";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Introduction />
        <Skills />
        <Experience />
        {/* <About />
        <Skills />
        <Projects />
        <Certifications />
        <Other />
        <Contact /> */}
      </header>
    </div>
  );
}

export default App;
