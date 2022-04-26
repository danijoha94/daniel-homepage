import "./App.css";
import Contact from "./structures/contact/contact";
import Footer from "./structures/footer/footer";
import Header from "./structures/header/header";
import Projects from "./structures/projects/projects";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='devider'></div>
      <Projects />
      <div className='devider'></div>
      <Contact />
      <div className='devider'></div>
      <Footer />
    </div>
  );
}

export default App;
