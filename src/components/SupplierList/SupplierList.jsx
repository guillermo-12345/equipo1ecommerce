import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getSuppliers, addSupplier, updateSupplier, deleteSupplier } from '../../asyncMock';
import SupplierForm from '../SupplierForm/SupplierForm';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editSupplier, setEditSupplier] = useState(null);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = () => {
    setLoading(true);
    getSuppliers()
      .then((data) => {
        setSuppliers(data);
      })
      .catch((error) => {
        console.error('Error fetching suppliers:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddSupplier = (supplier) => {
    setLoading(true);
    addSupplier(supplier)
      .then((newSupplier) => {
        setSuppliers((prevSuppliers) => [...prevSuppliers, newSupplier]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateSupplier = (id, updatedSupplier) => {
    setLoading(true);
    updateSupplier(id, updatedSupplier)
      .then(() => {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.map((supplier) =>
            supplier.id === id ? { ...supplier, ...updatedSupplier } : supplier
          )
        );
      })
      .finally(() => {
        setLoading(false);
        setEditSupplier(null);
      });
  };

  const handleDeleteSupplier = (id) => {
    setLoading(true);
    deleteSupplier(id)
      .then(() => {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier.id !== id)
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lista de Proveedores</h1>
      
      {suppliers.map((supplier) => (
        <div key={supplier.id}>
          <p>ID: {supplier.id}</p>
          <p>Nombre: {supplier.name}</p>
          <p>Teléfono: {supplier.phone}</p>
          <p>Email: {supplier.email}</p>
          <p>Categoría: {supplier.category}</p>
          <p>CUIT: {supplier.cuit}</p>
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
    </div>
  );
};

export default SupplierList;
