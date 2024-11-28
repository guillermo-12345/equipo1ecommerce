import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";
import { Table, Form, Button, Row, FormSelect } from "react-bootstrap";

const PurchaseReport = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    orderNumber: "",
    productName: "",
    category: "",
    supplier: "",
    startDate: "",
    endDate: ""
  });

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/compras");
        const data = await response.json();
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Update chart when filtered data changes
  useEffect(() => {
    const chartData = filteredData.map((item) => ({
      x: item.producto_nombre, // Now using the product name
      y: item.cantidad
    }));

    const options = {
      chart: {
        type: "bar",
        width: "70%",
      },
      series: [{
        name: "Cantidad Comprada",
        data: chartData.map((data) => data.y)
      }],
      xaxis: {
        categories: chartData.map((data) => data.x)
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => chart.destroy();
  }, [filteredData]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleClearFilters = () => {
    setFilters({ orderNumber: "", productName: "", category: "", supplier: "", startDate: "", endDate: "" });
    setFilteredData([]);
  };

  const applyFilters = () => {
    const filtered = filteredData.filter(item => {
      const itemDate = new Date(item.fecha_compra);
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;

      return (
        (!filters.orderNumber || item.compra_id.toString().includes(filters.orderNumber)) &&
        (!filters.productName || item.producto_nombre.toLowerCase().includes(filters.productName.toLowerCase())) &&
        (!filters.supplier || item.proveedor_nombre.toLowerCase().includes(filters.supplier.toLowerCase())) &&
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="justify-content-center container-fluid">
      <h1>Reporte de Compras</h1>
      <Form className="container-fluid justify-content-center my-4">
        <Row className="justify-content-center">
          <Form.Group className="col-1" controlId="orderNumber">
            <Form.Label>Orden</Form.Label>
            <Form.Control
              type="text"
              name="orderNumber"
              value={filters.orderNumber}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-2" controlId="productName">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={filters.productName}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-3" controlId="category">
            <Form.Label>Categoría</Form.Label>
            <FormSelect name="category" value={filters.category} onChange={handleFilterChange}>
              <option value="">Seleccionar categoría</option>
              <option value="notebook">Notebook</option>
              <option value="celular">Celular</option>
              <option value="tablet">Tablet</option>
            </FormSelect>
          </Form.Group>
          <Form.Group className="col-2" controlId="supplier">
            <Form.Label>Proveedor</Form.Label>
            <Form.Control
              type="text"
              name="supplier"
              value={filters.supplier}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-2" controlId="startDate">
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-2" controlId="endDate">
            <Form.Label>Fecha Fin</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Row>
        <Button className="mt-4" onClick={applyFilters}>Filtrar</Button>
        <Button className="mt-4 mx-3 btn btn-secondary" onClick={handleClearFilters}>Borrar Filtros</Button>
      </Form>

      <Table className="table-responsive table w-75 p-5 m-5" striped bordered hover>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.compra_id}>
              <td>{item.compra_id}</td>
              <td>{item.cantidad}</td>
              <td>{item.producto_nombre}</td> {/* Mostramos el nombre del producto */}
              <td>{item.categoria_nombre}</td> {/* Mostramos el nombre de la categoría */}
              <td>{item.proveedor_nombre}</td> {/* Mostramos el nombre del proveedor */}
              <td>{item.fecha_compra}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div id="chart"></div>
    </div>
  );
};

export default PurchaseReport;
