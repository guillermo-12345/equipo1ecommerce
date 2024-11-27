import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplierFormModal from '../SupplierForm/SupplierForm'; // Asegúrate de que la ruta sea correcta
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editSupplier, setEditSupplier] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchSuppliers = async () => {
      setLoading(true);
      setError(null); 
      try {
        const response = await axios.get('http://localhost:3000/proveedores'); // Cambia la URL según tu API
        setSuppliers(response.data);
      } catch (error) {
        console.error('Error fetching suppliers:', error);
        setError('get');
      } finally {
        setLoading(false);
<<<<<<< HEAD
      }
    };

    fetchSuppliers();
  }, []);
=======
      });
  }, [getSuppliers]);
>>>>>>> 22ade77a1ac68df8f2626a562697bde359cccc1f

  const handleAddSupplier = async (supplier) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/proveedor', supplier); // Cambia la URL según tu API
      setSuppliers((prevSuppliers) => [...prevSuppliers, response.data]);
    } catch (error) {
      console.error('Error adding supplier:', error);
      setError('post');
    } finally {
      setLoading(false);
      setShowModal(false); // Cierra el modal después de agregar el proveedor
    }
  };

  const handleUpdateSupplier = async (id, updateProveedor) => {
    setLoading(true);
    setError(null);
    console.log('Datos enviados a la API:', updateProveedor);
    console.log(suppliers)
    try {
      await axios.put(`http://localhost:3000/proveedor/${id}`, updateProveedor); // Cambia la URL según tu API
      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier.id === id ? { ...supplier, ...updateProveedor} : supplier
        ),
      );
    } catch (error) {
      console.error('Error updating supplier:', error);
      setError('put');
    } finally {
      setLoading(false);
      setEditSupplier(null);
      setShowModal(false);
    }
  };

  const handleDeleteSupplier = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/proveedor/${id}`); // Cambia la URL según tu API
      setSuppliers((prevSuppliers) =>
        prevSuppliers.filter((supplier) => supplier.id !== id)
      );
    } catch (error) {
      console.error('Error deleting supplier:', error);
      setError('delete');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (supplier) => {
    setEditSupplier(supplier);
    setShowModal(true);
    console.log(supplier)
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditSupplier(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lista de Proveedores</h1>
<<<<<<< HEAD
      {error && <div className="alert alert-danger">{error}</div>}
      <Button onClick={() => setShowModal(true)} className="mb-3">Agregar Proveedor</Button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>telefono</th>
            <th>Email</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.nombre}</td>
              <td>{supplier.telefono}</td>
              <td>{supplier.correo}</td>
              <td>
                <Button className='mx-2' onClick={() => handleEditClick(supplier)}>Editar</Button>
                <Button onClick={() => handleDeleteSupplier(supplier.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <SupplierFormModal
        supplier={editSupplier}
        show={showModal}
        handleClose={handleModalClose}
        onSave={editSupplier ? (updatedSupplier) => handleUpdateSupplier(editSupplier.id, updatedSupplier) : handleAddSupplier}
      />
=======

      {suppliers.map((supplier) => (
        <div key={supplier.id}>
          <p>Nombre: {supplier.name}</p>
          <p>Teléfono: {supplier.phone}</p>
          <p>Email: {supplier.email}</p>
          <p>Categoría: {supplier.category}</p>
          <Button className='mx-2' onClick={() => setEditSupplier(supplier)}>Editar</Button>
          <Button onClick={() => handleDeleteSupplier(supplier.id)}>Eliminar</Button>
          <hr />
        </div>
      ))}
      {editSupplier && (
        <SupplierForm
          initialData={editSupplier}
          onSave={(updatedSupplier) => handleUpdateSupplier(editSupplier.id, updatedSupplier)}
        />
      )}
      <SupplierForm onSave={handleAddSupplier} />
>>>>>>> 22ade77a1ac68df8f2626a562697bde359cccc1f
    </div>
  );
};

export default SupplierList;