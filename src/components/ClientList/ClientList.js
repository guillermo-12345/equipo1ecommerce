import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ClientForm from '../ClientForm/ClientForm';

const ClientList = () => {
  const initialClients = [
    { id: 1, name: 'Hernan Cortes', phone: '1111-1111', email: 'hernan.cortes@example.com', address: 'Calle 1, 1', cuit: '11-11111111-1' },
    { id: 2, name: 'Juan Smith', phone: '2222-2222', email: 'juan.smith@example.com', address: 'Calle 2, 2', cuit: '22-22222222-2' },
    { id: 3, name: 'Alice Gonzalez', phone: '3333-3333', email: 'alice.gonzalez@example.com', address: 'Calle 3, 3', cuit: '33-33333333-3' },
    { id: 4, name: 'Roberto Brown', phone: '4444-4444', email: 'roberto.brown@example.com', address: 'Calle 4, 4', cuit: '44-44444444-4' },
    { id: 5, name: 'Carlos Perez', phone: '5555-5555', email: 'carlos.perez@example.com', address: 'Calle 5, 5', cuit: '55-55555555-5' },
    { id: 6, name: 'Eve Wilson', phone: '6666-6666', email: 'eve.wilson@example.com', address: 'Calle 6, 6', cuit: '66-66666666-6' },
    { id: 7, name: 'Franky Jimenez', phone: '7777-7777', email: 'franky.jimenez@example.com', address: 'Calle 7, 7', cuit: '77-77777777-7' },
    { id: 8, name: 'Gracia Risa', phone: '8888-8888', email: 'gracia.risa@example.com', address: 'Calle 8, 8', cuit: '88-88888888-8' },
    { id: 9, name: 'Neo Anderson', phone: '9999-9999', email: 'neo.anderson@example.com', address: 'Calle 9, 9', cuit: '99-99999999-9' },
    { id: 10, name: 'Ivy Mosselo', phone: '1010-1010', email: 'ivy.mosselo@example.com', address: 'Calle 10, 10', cuit: '10-10101010-1' },
  ];

  const [clients, setClients] = useState(initialClients);
  const [editClient, setEditClient] = useState(null);

  const handleAddClient = (client) => {
    const newClient = { id: clients.length + 1, ...client };
    setClients([...clients, newClient]);
  };

  const handleUpdateClient = (id, updatedClient) => {
    setClients(clients.map(client => (client.id === id ? { ...client, ...updatedClient } : client)));
    setEditClient(null);
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      {clients.map(client => (
        <div key={client.id}>
          <p>ID: {client.id}</p>
          <p>Nombre: {client.name}</p>
          <p>Teléfono: {client.phone}</p>
          <p>Email: {client.email}</p>
          <p>Dirección: {client.address}</p>
          <p>CUIT: {client.cuit}</p>
          <Button className='mx-2' onClick={() => setEditClient(client)}>Editar</Button>
          <Button onClick={() => handleDeleteClient(client.id)}>Eliminar</Button>
          <hr />
        </div>
      ))}
      {editClient ? (
        <ClientForm
          key={editClient.id}
          client={editClient}
          onSave={handleUpdateClient}
          onCancel={() => setEditClient(null)}
        />
      ) : (
        <ClientForm onSave={handleAddClient} />
      )}
    </div>
  );
};

export default ClientList;
