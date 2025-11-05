import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NovedadHome from "./components/NovedadHome";
import BannerCompras from "./components/BannerCompras";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import PuntoVentaListContainer from "./components/PuntoVentaListContainer";
import ArticuloPrensaListContainer from "./components/ArticuloPrensaListContainer";
import AcercaDe from "./components/AcercaDe";
import Error404 from "./components/Error404";
import CartContainer from "./components/CartContainer";
import { CartContextProvider } from "./context/cartContextProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Toaster position="bottom-right" reverseOrder={false} />

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
            element={
              <div className="container">
                <AcercaDe />
              </div>
            }
          />
          <Route
            path="/prensa"
            element={
              <div className="container">
                <ArticuloPrensaListContainer />
              </div>
            }
          />
          <Route
            path="/donde-comprar"
            element={
              <div className="container">
                <PuntoVentaListContainer />
              </div>
            }
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
          <Route
            path="/*"
            element={
              <div className="container">
                <Error404 />
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <div className="container">
                <CartContainer />
              </div>
            }
          />
        </Routes>
      </CartContextProvider>

      <Footer />
    </Router>
  );
}

export default App;
