import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/acerca" element={<main>acerca</main>} />
        <Route path="/prensa" element={<main>prensa</main>} />
        <Route path="/donde-comprar" element={<main>donde-comprar</main>} />
        <Route
          path="/tienda"
          element={<ItemListContainer greeting="¡Probá nuestros alfajores!" />}
        />
        <Route path="/tienda/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer greeting="¡Empalagate con estas delicias!" />
          }
        />
        <Route path="/*" element={<main>ERROR 404</main>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
