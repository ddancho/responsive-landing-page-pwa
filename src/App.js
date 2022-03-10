import GlobalStyles from "./components/styled/Globals.styled";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Popular from "./components/Popular";
import Packages from "./components/Packages";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Gallery />
      <Popular />
      <Packages />
      <Contact />
    </>
  );
}

export default App;
