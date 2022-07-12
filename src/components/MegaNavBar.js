import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Dropdown, DropdownItem, DropdownMenu, DropdownToggle}from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";

export default function MegaMenu() {
    const [dropdown, setDropdown]= useState(false);
    const openCloseDropdown=()=>{
        setDropdown(!dropdown);
    }

    const action1=()=>{
        alert("action 1");
    }
    const[t, i18n]=useTranslation("global");
    return (
    <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={()=>i18n.changeLanguage("es")}>ES</Nav.Link>
                <Nav.Link onClick={()=>i18n.changeLanguage("en")}>EN</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <div className='MegaMenu'>
            <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
                <DropdownToggle caret>
                    Dropdown Ejemplo
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header> Encabezado </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={()=>action1()}> 1</DropdownItem>
                    <DropdownItem> 2</DropdownItem>
                    <DropdownItem> 3</DropdownItem>
                    <DropdownItem disable > 4</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        </Navbar>
    </>
    );
}