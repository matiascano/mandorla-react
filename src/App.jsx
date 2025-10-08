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
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container"></div>
            </>
          }
        />
        <Route
          path="/acerca"
          element={<div className="container">acerca</div>}
        />
        <Route
          path="/prensa"
          element={<div className="container">prensa</div>}
        />
        <Route
          path="/donde-comprar"
          element={<div className="container">donde-comprar</div>}
        />
        <Route
          path="/tienda"
          element={
            <div className="container">
              <ItemListContainer greeting="¡Probá nuestros alfajores!" />
            </div>
          }
        />
        <Route
          path="/tienda/:id"
          element={
            <div className="container">
              <ItemDetailContainer />
            </div>
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <div className="container">
              <ItemListContainer greeting="¡Empalagate con estas delicias!" />
            </div>
          }
        />
        <Route path="/*" element={<div className="container">ERROR 404</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
