import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import ClientesFormModal from '../ClientesForm/ClientesForm';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'; // Importa Table

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [editCliente, setEditCliente] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchClientes = async () => {
      setLoading(true);
      setError(null); 
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setError('get');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  const handleAddCliente = async (cliente) => {
    setLoading(true);
    setError(null);
    try {
        const response = await axios.post('http://localhost:3000/cliente', cliente);
        setClientes((prevClientes) => [...prevClientes, response.data]);
    } catch (error) {
        console.error('Error adding client:', error);
        setError('post');
    } finally {
        setLoading(false);
        setShowModal(false); // Cierra el modal después de agregar el cliente
    }
  };

  const handleUpdateCliente = async (id, updatedCliente) => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`http://localhost:3000/clientes/${id}`, updatedCliente);
      setClientes((prevClientes) =>
        prevClientes.map((cliente) =>
          cliente.id === id ? { ...cliente, ...updatedCliente } : cliente
        )
      );
    } catch (error) {
      console.error('Error updating client:', error);
      setError('put');
    } finally {
      setLoading(false);
      setEditCliente(null);
      setShowModal(false);
    }
  };

  const handleDeleteCliente = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/clientes/${id}`);
      setClientes((prevClientes) =>
        prevClientes.filter((cliente) => cliente.id !== id)
      );
    } catch (error) {
      console.error('Error deleting client:', error);
      setError('delete');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (cliente) => {
    setEditCliente(cliente);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditCliente(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Button onClick={() => setShowModal(true)} className="mb-3">Agregar Cliente</Button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>CUIT</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.cuit}</td>
              <td>{cliente.correo}</td>
              <td>
                <Button className='mx-2' onClick={() => handleEditClick(cliente)}>Editar</Button>
                <Button onClick={() => handleDeleteCliente(cliente.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ClientesFormModal
        cliente={editCliente}
        show={showModal}
        handleClose={handleModalClose}
        onSave={editCliente ? (updatedCliente) => handleUpdateCliente(editCliente.id, updatedCliente) : handleAddCliente}
      />
    </div>
  );
};

export default ClienteList;
