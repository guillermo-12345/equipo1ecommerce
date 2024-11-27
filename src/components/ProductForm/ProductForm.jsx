import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ProductFormModal = ({ product, show, handleClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio_venta: '',
    precio_compra: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    stock: '' 
  });

  useEffect(() => {
    if (product) {
      setFormData({
        nombre: product.nombre,
        precio_venta: product.precio_venta,
        precio_compra: product.precio_compra,
        descripcion: product.descripcion,
        imagen: product.imagen,
        categoria: product.categoria,
        stock: product.stock // Cargar el stock si es edición
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Llama a la función para guardar los cambios
    handleClose(); // Cierra el modal
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingrese el nombre del producto"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>Precio de Venta</Form.Label>
            <Form.Control
              type="number"
              name="precio_venta"
              value={formData.precio_venta}
              onChange={handleChange}
              placeholder="Ingrese el precio de venta"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPurchasePrice">
            <Form.Label>Precio de Compra</Form.Label>
            <Form.Control
              type="number"
              name="precio_compra"
              value={formData.precio_compra}
              onChange={handleChange}
              placeholder="Ingrese el precio de compra"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Ingrese la descripción del producto"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductImg">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="text"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
              placeholder="Ingrese la URL de la imagen del producto"
              required
            />
          </Form.Group>

          {/* Campo de categoría */}
          <Form.Group className="mb-3" controlId="formProductCategory">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una categoría</option>
              <option value="Notebook">Notebook</option>
              <option value="Celular">Celular</option>
              <option value="Tablet">Tablet</option>
            </Form.Select>
          </Form.Group>

          {/* Campo de stock */}
          <Form.Group className="mb-3" controlId="formProductStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Ingrese la cantidad de stock"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductFormModal;
