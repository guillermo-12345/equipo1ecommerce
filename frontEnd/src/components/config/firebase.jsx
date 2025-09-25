console.log("Dominio actual:", window.location.origin);

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCW82Vtr3WOHCgLM1cKADuZw0Vk4CluMSo",
  authDomain: "tp5ecommerce.firebaseapp.com",
  projectId: "tp5ecommerce",
  storageBucket: "tp5ecommerce.appspot.com",
  messagingSenderId: "587628775178",
  appId: "1:587628775178:web:02635300d9fc78e83e1cf3",
  measurementId: "G-ENY1BZ0LLR"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];


export const db = getFirestore(app); 
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
// const firebaseConfig = {
//   apiKey: "AIzaSyByMb5GwMMb1_T40lx-V5bWx1Y4pfOAw7Q",
//   authDomain: "ecommerce-6d9e2.firebaseapp.com",
//   projectId: "ecommerce-6d9e2",
//   storageBucket: "ecommerce-6d9e2.firebasestorage.com",
//   messagingSenderId: "462392931099",
//   appId: "1:462392931099:web:5894291dec9a8576df59be"
// };