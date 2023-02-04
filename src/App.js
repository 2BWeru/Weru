import './App.css';
import About from './Components/About/about';
import Header from './Components/Header/header';
import Contact from './Components/Contact/contact';
import Services from './Components/Services/services';
import Projects from './Components/Projects/projects';
// import "./static/css/owl.carousel.min.css";
// import "./static/css/owl.theme.default.min.css";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
