import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
function App() {
  return (
    <section>
      <Home /><hr />
      <About /><hr />
      <h2>Without Props</h2>
      <Gallery /><hr />
      <h2>With Props</h2>
      <Gallery page="Gallery" img="SECE Logo"/><hr />
      <Contact /><hr />
      <ClassCompEG />
    </section>
  );
}

export default App;
