import Topbar from "./components/topbar/topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Testimonials from "./components/testimonials/testimonials"
import Works from "./components/works/works"
import Contact from "./components/contact/contact"
import Menu from "./components/menu/menu"
import "./App.scss"
import {useState} from "react"

function App(){
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <Menu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
          
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
      </div>
    </div>
  );
}

export default App;
