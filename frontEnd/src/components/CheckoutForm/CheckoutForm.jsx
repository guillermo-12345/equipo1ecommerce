// // import { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import Row from 'react-bootstrap/Row';

// // const CheckoutForm = ({ onConfirm }) => {
// //    const [name, setName] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [email, setEmail] = useState('');

// //   const handleConfirm = (event) => {
// //     event.preventDefault();

// //     const userData = {
// //       name,
// //       phone,
// //       email
// //     };

// //     // Verifica que onConfirm esté definido antes de llamarlo
// //     if (onConfirm) {
// //       onConfirm(userData);
// //     }
// //   };

// //   return (
// //     <div className='ContainerFormCheckout'>
// //       penes
// //        <Form onSubmit={handleConfirm} className='justify-content-center'>
// //         <Row className='justify-content-center'>
// //           <Form.Group className="mb-3 col-4">
// //             <Form.Label>Nombre</Form.Label>
// //             <Form.Control
// //               type='text'
// //               placeholder='Guille Ibañez'
// //               value={name}
// //               onChange={({ target }) => setName(target.value)}
// //             />
// //             <Form.Text className="text-muted">Nombre Completo</Form.Text>
// //           </Form.Group>

// //           <Form.Group className="mb-3 col-3">
// //             <Form.Label>Teléfono</Form.Label>
// //             <Form.Control
// //               type='text'
// //               placeholder='11 #### ####'
// //               value={phone}
// //               onChange={({ target }) => setPhone(target.value)}
// //             />
// //             <Form.Text className="text-muted">Celular o personal</Form.Text>
// //           </Form.Group>
// //         </Row>

// //         <Row className='justify-content-center'>
// //           <Form.Group className="mb-3 col-5">
// //             <Form.Label>Email</Form.Label>
// //             <Form.Control
// //               type="email"
// //               name="email"
// //               required
// //               placeholder='xx@xxx.xx'
// //               value={email}
// //               onChange={({ target }) => setEmail(target.value)}
// //             />
// //             <Form.Text className="text-muted">Validar Email</Form.Text>
// //           </Form.Group>
// //         </Row>

// //         <Button type='submit'>Crear Orden</Button>
// //       </Form> 
// //     </div>
// //   );
// // };

// // export default CheckoutForm;


// import { Button, Form, Row } from 'react-bootstrap';

// const CheckoutForm = ({ onConfirm, formData, onInputChange }) => {
//   const handleConfirm = (event) => {
//     event.preventDefault();
    
//     const { name, phone, email } = formData;

//     const userData = {
//       name,
//       phone,
//       email
//     };

//     onConfirm(userData);  // Call onConfirm with the userData
//   };

//   return (
//     <div className='ContainerFormCheckout'>
//       <Form onSubmit={handleConfirm} className='justify-content-center'>
//         <Row className='justify-content-center'>
//           <Form.Group className="mb-3 col-4">
//             <Form.Label>Nombre</Form.Label>
//             <Form.Control
//               type='text'
//               placeholder='Guille Ibañez'
//               name='name'
//               value={formData.name}
//               onChange={onInputChange} 
//             />
//             <Form.Text className="text-muted">Nombre Completo</Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3 col-3">
//             <Form.Label>Teléfono</Form.Label>
//             <Form.Control
//               type='text'
//               placeholder='11 #### ####'
//               name='phone'
//               value={formData.phone}
//               onChange={onInputChange}  
//             />
//             <Form.Text className="text-muted">Celular o personal</Form.Text>
//           </Form.Group>
//         </Row>

//         <Row className='justify-content-center'>
//           <Form.Group className="mb-3 col-5">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               required
//               placeholder='xx@xxx.xx'
//               onChange={onInputChange} 
//             />
//             <Form.Text className="text-muted">Validar Email</Form.Text>
//           </Form.Group>
//         </Row>

//         <Button type='submit'>Crear Orden</Button>
//       </Form>
//     </div>
//   );
// };

// export default CheckoutForm;


/* v1 */



/* 

import { Button, Form, Row } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from '../../context/cartContext';

const CheckoutForm = ({ onConfirm, formData, onInputChange }) => {

    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    // Imprimir el contenido del contexto en la consola
    console.log('Contenido del carrito:', cart);
    const handleConfirm = (event) => {
        event.preventDefault();

        const { name, phone,cuit, email } = formData;

        const userData = {
            name,
            phone,
            cuit,
            email,
            items:cart,
        };

        onConfirm(userData);  
    };

  
    return (
        <div className='ContainerFormCheckout'>
            
            <Form onSubmit={handleConfirm} className='justify-content-center'>
                <Row className='justify-content-center'>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='joselito'
                            name='name'
                            value={formData.name}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Nombre Completo</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='+54 9 351 654-3210'
                            name='phone'
                            value={formData.phone}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Celular o personal</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 col-3">
                        <Form.Label>cuit</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='30-12345678-3'
                            name='cuit'
                            value={formData.cuit}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">cuit</Form.Text>
                    </Form.Group>
                </Row>

                <Row className='justify-content-center'>
                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            required
                            placeholder='a@xxx.xx'
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Validar Email</Form.Text>
                    </Form.Group>
                </Row>

                <Button type='submit'>Crear Orden</Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;
*/



/*v2 */

// import { Button, Form, Row } from 'react-bootstrap';
// import { useContext } from "react";
// import { CartContext } from '../../context/cartContext';
// import axios from 'axios';

// const CheckoutForm = ({ formData, onInputChange }) => {
//     const { cart, clearCart } = useContext(CartContext);

//     const handleConfirm = async (event) => {
//         event.preventDefault();

//         const { name, phone, cuit, email } = formData;

//         const userData = {
//             name,
//             phone,
//             cuit,
//             email,
//             items: cart,
//         };
//         console.log("ese es el carro",cart);

//         console.log("Datos de usuario:", userData);

//         try {
//             const response = await axios.post("http://localhost:3000/ventas", userData);
//             console.log("Respuesta del servidor:", response.data);
//             alert("Compra registrada con éxito!");
//             console.log("response", response)
//             clearCart(); // Vacía el carrito después de enviar la compra
//         } catch (error) {
//             console.error("Error al enviar la compra:", error);
//             alert("Hubo un error al registrar la compra.");
//         }
//     };

//     return (
//         <div className='ContainerFormCheckout'>
//             <Form onSubmit={handleConfirm} className='justify-content-center'>
//                 <Row className='justify-content-center'>
//                     <Form.Group className="mb-3 col-4">
//                         <Form.Label>Nombre</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='joselito'
//                             name='name'
//                             value={formData.name}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Nombre Completo</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3 col-3">
//                         <Form.Label>Teléfono</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='+54 9 351 654-3210'
//                             name='phone'
//                             value={formData.phone}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Celular o personal</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3 col-3">
//                         <Form.Label>CUIT</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='30-12345678-3'
//                             name='cuit'
//                             value={formData.cuit}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">CUIT</Form.Text>
//                     </Form.Group>
//                 </Row>

//                 <Row className='justify-content-center'>
//                     <Form.Group className="mb-3 col-5">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             required
//                             placeholder='a@xxx.xx'
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Validar Email</Form.Text>
//                     </Form.Group>
//                 </Row>

//                 <Button type='submit'>Crear Orden</Button>
//             </Form>
//         </div>
//     );
// };

// export default CheckoutForm;



// //v3

// import { Button, Form, Row } from 'react-bootstrap';
// import { useContext } from "react";
// import { CartContext } from '../../context/cartContext';
// import axios from 'axios';

// const CheckoutForm = ({ formData, onInputChange }) => {
//     const { cart, clearCart } = useContext(CartContext);

//     const handleConfirm = async (event) => {
//         event.preventDefault();

//         // Transformar productos del carrito para la venta
//         const productos = cart.map(item => ({
//             producto_id: item.producto_id,
//             cantidad: item.quantity,
//             precio: item.price
//         }));

//         const ventaData = {
//             cliente_id: null,  // Cliente por defecto null
//             productos          // Productos que se insertarán en venta_detalle
//         };

//         console.log("Datos de la venta:", ventaData);

//         try {
//             const response = await axios.post("http://localhost:3000/ventas", ventaData);
//             console.log("Respuesta del servidor:", response.data);
//             alert("Venta registrada con éxito!");
//             clearCart(); // Vacía el carrito después de enviar la venta
//         } catch (error) {
//             console.error("Error al enviar la venta:", error);
//             alert("Hubo un error al registrar la venta.");
//         }
//     };

//     return (
//         <div className='ContainerFormCheckout'>
//             <Form onSubmit={handleConfirm} className='justify-content-center'>
//                 <Row className='justify-content-center'>
//                     <Form.Group className="mb-3 col-4">
//                         <Form.Label>Nombre</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='joselito'
//                             name='name'
//                             value={formData.name}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Nombre Completo</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3 col-3">
//                         <Form.Label>Teléfono</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='+54 9 351 654-3210'
//                             name='phone'
//                             value={formData.phone}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Celular o personal</Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3 col-3">
//                         <Form.Label>CUIT</Form.Label>
//                         <Form.Control
//                             type='text'
//                             placeholder='30-12345678-3'
//                             name='cuit'
//                             value={formData.cuit}
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">CUIT</Form.Text>
//                     </Form.Group>
//                 </Row>

//                 <Row className='justify-content-center'>
//                     <Form.Group className="mb-3 col-5">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             required
//                             placeholder='a@xxx.xx'
//                             onChange={onInputChange}
//                         />
//                         <Form.Text className="text-muted">Validar Email</Form.Text>
//                     </Form.Group>
//                 </Row>

//                 <Button type='submit'>Crear Orden</Button>
//             </Form>
//         </div>
//     );
// };

// export default CheckoutForm;
import { Button, Form, Row } from 'react-bootstrap';
import { useContext } from "react";
import { CartContext } from '../../context/cartContext';
import axios from 'axios';

const CheckoutForm = ({ formData, onInputChange }) => {
    const { cart, clearCart } = useContext(CartContext);

    const handleConfirm = async (event) => {
        event.preventDefault();

        
        const productos = cart.map(item => ({
            producto_id: item.producto_id,
            cantidad: item.quantity,
            precio: item.price
        }));

        const ventaData = {
            cliente_id: null, 
            productos
        };

        console.log("Datos de la venta:", ventaData);

        try {
            const response = await axios.post("http://localhost:3000/ventas", ventaData);
            console.log("Respuesta del servidor:", response.data);
            alert("Venta registrada con éxito!");
            clearCart(); 
        } catch (error) {
            console.error("Error al enviar la venta:", error);
            alert("Hubo un error al registrar la venta.");
        }
    };

    return (
        <div className='ContainerFormCheckout'>
            <Form onSubmit={handleConfirm} className='justify-content-center'>
                <Row className='justify-content-center'>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Joselito'
                            name='name'
                            value={formData.name}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Nombre Completo</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='+54 9 351 654-3210'
                            name='phone'
                            value={formData.phone}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Celular o personal</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-3">
                        <Form.Label>CUIT</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='30-12345678-3'
                            name='cuit'
                            value={formData.cuit}
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">CUIT</Form.Text>
                    </Form.Group>
                </Row>

                <Row className='justify-content-center'>
                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            required
                            placeholder='a@xxx.xx'
                            onChange={onInputChange}
                        />
                        <Form.Text className="text-muted">Validar Email</Form.Text>
                    </Form.Group>
                </Row>

                <Button type='submit'>Crear Orden</Button>
            </Form>
        </div>
    );
};

export default CheckoutForm;
