import productos from "../data/data";
import { puntosVenta, articulosPrensa } from "../data/data";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise completada");
      resolve(productos);
    }, 1000);
  });
}

export function getProductById(idParam) {
  return new Promise((resolve) => {
    const itemRequested = productos.find((item) => String(item.id) === idParam);
    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export function getProductsByCategory(catParam) {
  return new Promise((resolve, reject) => {
    const itemsRequested = productos.filter(
      (item) => item.categoryId === catParam
    );
    if (itemsRequested.length === 0) {
      reject("No encontramos productos");
    }
    setTimeout(() => {
      resolve(itemsRequested);
    }, 1000);
  });
}

export function getPuntosVenta() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(puntosVenta);
    }, 1000);
  });
}

export function getArticulosPrensa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articulosPrensa);
    }, 1000);
  });
}

export default getData;
