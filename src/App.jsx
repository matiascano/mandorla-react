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
        <Route
          path="/tienda"
          element={<ItemListContainer greeting="¡Probá nuestros alfajores!" />}
        />
        <Route path="/tienda/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
