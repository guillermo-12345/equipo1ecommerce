import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ClientForm = ({ onSave, onCancel, client }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cuit, setCuit] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (client) {
      setName(client.name);
      setPhone(client.phone);
      setEmail(client.email);
      setAddress(client.address);
      setCuit(client.cuit);
      setId(client.id);
    }
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id, name, phone, email, address, cuit });
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setCuit('');
    setId('');
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
      setName(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^[0-9-]*$/.test(value) || value === '') {
      setPhone(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleCuitChange = (e) => {
    const value = e.target.value;
    if (/^[0-9-]*$/.test(value) || value === '') {
      setCuit(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre"
          value={name}
          onChange={handleNameChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el teléfono"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese el email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingrese la dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cuit">
        <Form.Label>CUIT</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el CUIT"
          value={cuit}
          onChange={handleCuitChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="secondary" className="ms-2" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
};

export default ClientForm;
