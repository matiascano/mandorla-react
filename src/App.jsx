import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer greeting="¡Probá nuestros alfajores!" />
      <Footer />
    </>
  );
}

export default App;
