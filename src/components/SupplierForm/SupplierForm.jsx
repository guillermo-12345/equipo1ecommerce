import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import FormSelect from 'react-bootstrap/FormSelect';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SupplierForm = ({ initialData = {}, onSave }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [cuit, setCuit] = useState('');

  useEffect(() => {
    setName(initialData.name || '');
    setPhone(initialData.phone || '');
    setEmail(initialData.email || '');
    setCategory(initialData.category || '');
    setCuit(initialData.cuit || ''); 
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, phone, email, category, cuit });
    setName('');
    setPhone('');
    setEmail('');
    setCategory('');
    setCuit('');
  };

  return (
    <div> 
      <h3>{initialData.id ? 'Editar Proveedor' : 'Agregar Proveedor'}</h3>
    
    <Form className='my-3' onSubmit={handleSubmit}>
      <Row className='justify-content-center'>
        <Form.Group className="mb-3 col-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete='name'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 col-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type='text'
            placeholder='11 #### ####'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete='tel'
            required
          />
        </Form.Group>
      </Row>

      <Row className='justify-content-center'>
        <Form.Group className="mb-3 col-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="mb-3 col-4">
          <Form.Label>Categoría</Form.Label>
          <FormSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            autoComplete='category'
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="Notebook">Notebook</option>
            <option value="Celular">Celular</option>
            <option value="Tablet">Tablet</option>
          </FormSelect>
        </Form.Group>
      </Row>

      <Row className='justify-content-center'>
        <Form.Group className="mb-3 col-4">
          <Form.Label>CUIT</Form.Label>
          <Form.Control
            type='text'
            placeholder='10-12345678-9'
            value={cuit}
            onChange={(e) => setCuit(e.target.value)}
            autoComplete='cuit'
            required
          />
        </Form.Group>
      </Row>

      <Button className='btn-success' type="submit">Guardar</Button>
    </Form>
    </div>
  );
};

export default SupplierForm;
