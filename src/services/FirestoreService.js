import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_API_KEY,
  authDomain: import.meta.env.VITE_FS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FS_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FS_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FS_APP_ID,
  measurementId: import.meta.env.VITE_FS_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  const productosRef = collection(db, "products");
  const productosSnap = await getDocs(productosRef);
  const productosList = productosSnap.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return productosList;
}

export async function getProductById(idParam) {
  const productoRef = doc(db, "products", idParam);
  const productSnapshot = await getDoc(productoRef);
  const productId = productSnapshot.id;
  const productData = productSnapshot.data();
  if (!productData) {
    throw new Error("Producto no encontrado");
  }
  return { id: productId, ...productData };
}

export async function getProductsByCategory(catParam) {
  const productosRef = collection(db, "products");
  const q = query(productosRef, where("categoryId", "==", catParam));
  const productosSnap = await getDocs(q);
  const productosList = productosSnap.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return productosList;
}

export async function getPuntosVenta() {
  const puntosRef = collection(db, "puntosVenta");
  const puntosSnap = await getDocs(puntosRef);
  const puntosList = puntosSnap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      nombre: data.nombre,
      direccion: data.direccion,
      position: data.position
        ? [data.position.latitude, data.position.longitude]
        : null, // asegurar formato correcto
    };
  });
  return puntosList;
}

export async function getArticulosPrensa() {
  const articulosRef = collection(db, "articulosPrensa");
  const articulosSnap = await getDocs(articulosRef);
  const articulosList = articulosSnap.docs.map((doc) => {
    console.log(doc.id, " => ", doc.data());
    return { id: doc.id, ...doc.data() };
  });
  return articulosList;
}

export async function createOrder(orderData) {
  const orderRef = collection(db, "orders");
  const newOrderRef = await addDoc(orderRef, orderData);
  return newOrderRef;
}

// export async function exportAllProductsToFirestore() {
//   const productosRef = collection(db, "products");
//   for (const product of productos) {
//     await addDoc(productosRef, product);
//   }
// }

// export async function exportAllArticulosPrensaToFirestore() {
//   const articulosRef = collection(db, "articulosPrensa");
//   for (const articulo of articulosPrensa) {
//     await addDoc(articulosRef, articulo);
//   }
// }
