import React, { useState} from 'react';
import { Container, Form, Button, Card, Row, Col, Alert} from 'react-bootstrap';
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({ type: '', message: ''});

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Registrando...'});

    try {
      const response = await fetch ("https://bottled-drinks-api.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          passwordHash: formData.password
        }),
      });

      const text = await response.text();

      if (response.ok) {
        setStatus ({ type: "success", message: text});
        setFormData ({ fullName: '', email: '', password: ''});
      } else {
        setStatus ({ type: 'danger', message: text});
      } 
    } catch (error) {
      setStatus({ type: 'danger', message: "Servidor Offline"})
    }
  };  
  return (
    <Container className="register-container d0flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="register-card shadow-lg">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Faça parte do nosso clube!</h2>

              {status.message && (
                <Alert variant={status.type}>{status.message}</Alert>
              )}

              <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type= "text"
                    name= "fullName"
                    placeholder="Insira seu nome"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Endereço de email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="exemplo@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Crie uma senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 fw-bold">
                  Registrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}