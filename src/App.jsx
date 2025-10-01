import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer greeting="¡Probá nuestros alfajores!" />
      <ItemDetailContainer itemId={4} />
      <Footer />
    </>
  );
}

export default App;
