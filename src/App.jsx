import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NovedadHome from "./components/NovedadHome";
import BannerCompras from "./components/BannerCompras";
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
              <div className="container">
                <NovedadHome
                  title="Promo descuento!"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  imageUrl="https://dcdn-us.mitiendanube.com/stores/004/290/481/products/promo-descuento-docena-f5e8cb8332a2d1456117248533333881-640-0.webp"
                  textLink="Ir a la tienda"
                  link="./tienda"
                />
                <BannerCompras />
              </div>
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
