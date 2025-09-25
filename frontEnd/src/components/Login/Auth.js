
// import { signInWithPopup, signOut } from "firebase/auth"
// import { auth, googleProvider } from "../service/firebaseConfig"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'
// export const Auth = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem("firebaseToken")

//     if (token) {
//       navigate("/protected")
//     }
//   }, [])

//   const signInWithGoogle = async () => {
//     try {
//       const a = await signInWithPopup(auth, googleProvider)


//       let response = await axios.post('http://localhost:3001/auth/login', {
//         firebaseToken: a._tokenResponse.idToken
//       })

//       if (!response.data.ok) {
//         console.error(response)
//         logout()
//       } else {
//         localStorage.setItem("firebaseToken", a._tokenResponse.idToken)
//       }

//       navigate("/protected")
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const logout = async () => {
//     await signOut(auth)

//     localStorage.removeItem("firebaseToken")
//   }

//   return (
//     <div>
//       <h1>Auth</h1>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>

//       <button onClick={logout}>Logout</button>
//     </div>
//   )
// }


// import { signInWithPopup, signOut } from "firebase/auth"
// import { auth, googleProvider } from "../service/firebaseConfig"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'

// function Auth (){
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem("firebaseToken")

//     if (token) {
//       navigate("/protected")
//     }
//   }, [])

//   const signInWithGoogle = async () => {
//     try {
//       const a = await signInWithPopup(auth, googleProvider)

//       // Asegúrate de que la URL sea correcta, utilizando el puerto 3000 para el backend
//       let response = await axios.post('http://localhost:3000/auth/login', {  // Cambié el puerto aquí
//         firebaseToken: a._tokenResponse.idToken
//       })

//       if (!response.data.ok) {
//         console.error(response)
//         logout()
//       } else {
//         localStorage.setItem("firebaseToken", a._tokenResponse.idToken)
//       }

//       navigate("/")
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const logout = async () => {
//     await signOut(auth)

//     localStorage.removeItem("firebaseToken")
//   }

//   return (
//     <div>
//       <h1>Auth</h1>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>

//       <button onClick={logout}>Logout</button>
//     </div>
//   )
// }

// export default Auth




// import { signInWithPopup, signOut } from "firebase/auth"
// import { auth, googleProvider } from "../service/firebaseConfig"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'
// export const Auth = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem("firebaseToken")

//     if (token) {
//       navigate("/protected")
//     }
//   }, [])

//   const signInWithGoogle = async () => {
//     try {
//       const a = await signInWithPopup(auth, googleProvider)


//       let response = await axios.post('http://localhost:3001/auth/login', {
//         firebaseToken: a._tokenResponse.idToken
//       })

//       if (!response.data.ok) {
//         console.error(response)
//         logout()
//       } else {
//         localStorage.setItem("firebaseToken", a._tokenResponse.idToken)
//       }

//       navigate("/protected")
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const logout = async () => {
//     await signOut(auth)

//     localStorage.removeItem("firebaseToken")
//   }

//   return (
//     <div>
//       <h1>Auth</h1>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>

//       <button onClick={logout}>Logout</button>
//     </div>
//   )
// }




// import { signInWithPopup, signOut } from "firebase/auth"
// import { auth, googleProvider } from "../service/firebaseConfig"
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from 'axios'

// function Auth (){
//   const navigate = useNavigate()

//   useEffect(() => {
//     const token = localStorage.getItem("firebaseToken")

    
//   }, [])

//   const signInWithGoogle = async () => {
//     try {
//         const a = await signInWithPopup(auth, googleProvider);

//         // Asegúrate de que la URL sea correcta
//         let response = await axios.post('http://localhost:3000/auth/login', {
//             firebaseToken: a._tokenResponse.idToken
//         });

//         if (!response.data.ok) {
//             console.error(response);
//             logout();
//         } else {
//             localStorage.setItem("firebaseToken", a._tokenResponse.idToken);
//             console.log("login")
//         }

//         navigate("/");

//     } catch (error) {
//         console.error(error);
//     }
// };


//   const logout = async () => {
//     await signOut(auth)

//     localStorage.removeItem("firebaseToken")
//     console.log("deslogin")
//   }

//   return (
//     <div>
//       <h1>Auth</h1>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>

//       <button onClick={logout}>Logout</button>
//     </div>
//   )
// }

// export default Auth


// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, googleProvider } from "../service/firebaseConfig";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Auth() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false); // Estado para manejar el proceso de carga
//   const [error, setError] = useState(""); // Para mostrar mensajes de error en caso de fallo

//   useEffect(() => {
//     const token = localStorage.getItem("firebaseToken");

    
//   }, [navigate]);

//   const signInWithGoogle = async () => {
//     setLoading(true); // Mostrar que está cargando

//     try {
//       const a = await signInWithPopup(auth, googleProvider);

//       let response = await axios.post("http://localhost:3000/auth/login", {
//         firebaseToken: a._tokenResponse.idToken,
//       });

//       if (!response.data.ok) {
//         setError("Error al iniciar sesión. Intenta de nuevo.");
//         logout();
//       } else {
//         localStorage.setItem("firebaseToken", a._tokenResponse.idToken);
//         console.log("mortadel") // Redirige a la página principal después de login exitoso

//       }
//     } catch (error) {
//       setError("Error de autenticación. Intenta de nuevo.");
//       console.error(error);
//     } finally {
//       setLoading(false); // Detén el estado de carga
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//     localStorage.removeItem("firebaseToken");
//     console.log("huevis")
//     navigate("/auth/login"); // Redirige al login al cerrar sesión
//   };

//   return (
//     <div>
//       <h1>Auth</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra errores si existen */}
//       <button onClick={signInWithGoogle} disabled={loading}>
//         {loading ? "Cargando..." : "Iniciar sesión con Google"}
//       </button>

//       <button onClick={logout}>Cerrar sesión</button>
//     </div>
//   );
// }

// export default Auth;




// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, googleProvider } from "../service/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Auth() {
//   const navigate = useNavigate();
//   const { login, logout } = useAuth();

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       login({
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//       });

//       localStorage.setItem("firebaseToken", user.accessToken);
//       console.log(user.accessToken)
     
//       navigate("/");
//     } catch (error) {
//       console.error("Error al iniciar sesión", error);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     logout();
//     localStorage.removeItem("firebaseToken");
//     navigate("/auth/login"); 
//   };

//   return (
//     <div >
//       <h1>Login</h1>
//       <button className="btn btn-primary" onClick={signInWithGoogle}>Iniciar sesión con Google</button>
//       <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
//     </div>
//   );
// }

// export default Auth;









// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";


// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, googleProvider } from "../service/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";

// function Auth() {
//   const navigate = useNavigate();
//   const { login, logout } = useAuth();

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       login({
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//       });

//       await axios.post("http://localhost:3000/clientes/firebase", {
//         uid: user.uid,
//         nombre: user.displayName,
//         correo: user.email
//       });

//       localStorage.setItem("firebaseToken", user.accessToken);
//       console.log(user.accessToken)
     
//       navigate("/");
//     } catch (error) {
//       console.error("Error al iniciar sesión", error);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     logout();
//     localStorage.removeItem("firebaseToken");
//     navigate("/auth/login"); 
//   };

//   return (
//      <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4 shadow-lg text-center" style={{ minWidth: "300px" }}>
//         <Card.Body>
//           <Card.Title className="mb-4">Iniciar Sesión</Card.Title>
//           <Button
//             variant="primary"
//             onClick={signInWithGoogle}
//             className="mb-3 w-100"
//           >
//             Iniciar sesión con Google
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleLogout}
//             className="w-100"
//           >
//             Cerrar sesión
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Auth;













// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import API_URL from '../config/config'

// import { signInWithRedirect, signOut } from "firebase/auth";
// import { auth, googleProvider } from "../service/firebaseConfig";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";

// function Auth() {
//   const navigate = useNavigate();
//   const { login, logout } = useAuth();

//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithRedirect(auth, googleProvider);
//       const user = result.user;

//       login({
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//       });

//       await axios.post(`${API_URL}/clientes/firebase`, {
//         uid: user.uid,
//         nombre: user.displayName,
//         correo: user.email
//       });

//       localStorage.setItem("firebaseToken", user.accessToken);
//       console.log(user.accessToken)
     
//       navigate("/");
//     } catch (error) {
//       console.error("Error al iniciar sesión", error);
//       console.log("Dominio actual:", window.location.origin);

//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     logout();
//     localStorage.removeItem("firebaseToken");
//     navigate("/auth/login"); 
//   };

//   return (
//      <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4 shadow-lg text-center" style={{ minWidth: "300px" }}>
//         <Card.Body>
//           <Card.Title className="mb-4">Iniciar Sesión</Card.Title>
//           <Button
//             variant="primary"
//             onClick={signInWithGoogle}
//             className="mb-3 w-100"
//           >
//             Iniciar sesión con Google
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleLogout}
//             className="w-100"
//           >
//             Cerrar sesión
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Auth;












import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API_URL from '../config/config'

import { signInWithPopup, signOut } from "firebase/auth"; // 👈 cambio acá
import { auth, googleProvider } from "../service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Auth() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // 👈 cambio acá
      const user = result.user;

      login({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });

      await axios.post(`${API_URL}/clientes/firebase`, {
        uid: user.uid,
        nombre: user.displayName,
        correo: user.email
      });

      localStorage.setItem("firebaseToken", user.accessToken);
      console.log(user.accessToken);
     
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      console.log("Dominio actual:", window.location.origin);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    logout();
    localStorage.removeItem("firebaseToken");
    navigate("/auth/login"); 
  };

  return (
     <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg text-center" style={{ minWidth: "300px" }}>
        <Card.Body>
          <Card.Title className="mb-4">Iniciar Sesión</Card.Title>
          <Button
            variant="primary"
            onClick={signInWithGoogle}
            className="mb-3 w-100"
          >
            Iniciar sesión con Google
          </Button>
          <Button
            variant="danger"
            onClick={handleLogout}
            className="w-100"
          >
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Auth;
