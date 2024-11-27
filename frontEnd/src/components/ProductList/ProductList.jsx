// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Item from '../Item/Item';
// import ProductFormModal from '../ProductForm/ProductForm'; // Cambia el nombre a ProductFormModal
// import Button from 'react-bootstrap/Button';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editProduct, setEditProduct] = useState(null);
//   const [error, setError] = useState(null); // Estado para manejar errores
//   const [showModal, setShowModal] = useState(false); // Estado para controlar el modal de edición
//   const [isEditing, setIsEditing] = useState(false); // Nuevo estado para distinguir entre agregar/editar

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get('http://localhost:3000/productos');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error al obtener los productos:', error);
//         setError('Error al obtener productos'); // Manejo del error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       await axios.delete(`http://localhost:3000/productos/${id}`);
//       setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
//     } catch (error) {
//       console.error('Error al eliminar el producto:', error);
//       setError('Error al eliminar el producto'); // Manejo del error
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditProduct = (id) => {
//     const productToEdit = products.find((product) => product.id === id);
//     setEditProduct(productToEdit);
//     setIsEditing(true); // Activar modo de edición
//     setShowModal(true); // Abre el modal
//   };

//   const handleUpdateProduct = async (id, updatedProduct) => {
//     setLoading(true);
//     setError(null);
//     try {
//       await axios.put(`http://localhost:3000/productos/${id}`, updatedProduct);
//       setProducts((prevProducts) =>
//         prevProducts.map((product) =>
//           product.id === id ? { ...product, ...updatedProduct } : product
//         )
//       );
//     } catch (error) {
//       console.error('Error al actualizar el producto:', error);
//       setError('Error al actualizar el producto'); // Manejo del error
//     } finally {
//       setLoading(false);
//       setEditProduct(null);
//       setShowModal(false); // Cierra el modal
//     }
//   };

//   const handleAddProduct = async (newProduct) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post('http://localhost:3000/productos', newProduct);
      
//       setProducts((prevProducts) => [...prevProducts, response.data]);
//     } catch (error) {
//       console.error('Error al agregar el producto:', error);
//       setError('Error al agregar el producto'); // Manejo del error
//     } finally {
//       setLoading(false);
//       setShowModal(false); // Cierra el modal después de agregar
//     }
//   };

//   const handleAddButtonClick = () => {
//     setEditProduct(null); // No hay producto que editar
//     setIsEditing(false); // Modo agregar
//     setShowModal(true); // Abre el modal
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-list-container">
//       <h2>Lista de Productos</h2>
//       {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar errores */}
//       <div className="d-flex flex-wrap justify-content-around">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <Item
//               key={product.id}
//               id={product.id}
//               title={product.nombre}
//               img={product.imagen}
//               price={product.precio_venta}
//               purchasePrice={product.precio_compra}
//               description={product.descripcion}
//               category={product.categoria} // Agrega la categoría aquí
//               stock={product.stock} // Agrega el stock aquí
//               showEditButton={true}
//               showDeleteButton={true}
//               onEdit={handleEditProduct}
//               onDelete={handleDeleteProduct}
//               className="product-item"
//             />
//           ))
//         ) : (
//           <p>No hay productos disponibles.</p>
//         )}
//       </div>

//       {/* Botón para agregar productos */}
//       <Button variant="primary" onClick={handleAddButtonClick}>
//         Agregar Producto
//       </Button>

//       {/* Modal para editar o agregar productos */}
//       <ProductFormModal
//         product={isEditing ? editProduct : null} // Si estamos en modo de edición, pasamos el producto
//         show={showModal}
//         handleClose={() => setShowModal(false)}
//         onSave={isEditing ? (updatedProduct) => handleUpdateProduct(editProduct.id, updatedProduct) : handleAddProduct}
//       />
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import ProductFormModal from '../ProductForm/ProductForm'; 
import Button from 'react-bootstrap/Button';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editProduct, setEditProduct] = useState(null);
  const [error, setError] = useState(null); 
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

 
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/productos');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setError('Error al obtener productos'); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, []);

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/productos/${id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      setError('Error al eliminar el producto');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditProduct(productToEdit);
    setIsEditing(true); 
    setShowModal(true); 
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`http://localhost:3000/productos/${id}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      setError('Error al actualizar el producto'); 
    } finally {
      setLoading(false);
      setEditProduct(null);
      setShowModal(false); 
    }
  };

  const handleAddProduct = async (newProduct) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post('http://localhost:3000/productos', newProduct);
      
      await fetchProducts();
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      setError('Error al agregar el producto');
    } finally {
      setLoading(false);
      setShowModal(false); 
    }
  };

  const handleAddButtonClick = () => {
    setEditProduct(null); 
    setIsEditing(false);
    setShowModal(true); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Lista de Productos</h2>
     
      {error && <div className="alert alert-danger">{error}</div>} 
      <div className="d-flex flex-wrap justify-content-around">
        {products.length > 0 ? (
          products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              title={product.nombre}
              img={product.imagen}
              price={product.precio_venta}
              purchasePrice={product.precio_compra}
              description={product.descripcion}
              category={product.categoria} 
              stock={product.stock} 
              showEditButton={true}
              showDeleteButton={true}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
              className="product-item"
            />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>

    
      <Button variant="primary" onClick={handleAddButtonClick}>
        Agregar Producto
      </Button>

      {/* Modal para editar o agregar productos */}
      <ProductFormModal
        product={isEditing ? editProduct : null} // Si estamos en modo de edición, pasamos el producto
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSave={isEditing ? (updatedProduct) => handleUpdateProduct(editProduct.id, updatedProduct) : handleAddProduct}
      />
    </div>
  );
};

export default ProductList;

