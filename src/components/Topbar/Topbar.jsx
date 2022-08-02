import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Offcanvas, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Topbar.css';

export default function Topbar() {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">Bottled Drinks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        bg="white"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Bottled Drinks</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/products">Produtos</Nav.Link>
                                <Nav.Link href="#action2">Carrinho</Nav.Link>
                                <Nav.Link href="/login">Cadastro/Login</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}