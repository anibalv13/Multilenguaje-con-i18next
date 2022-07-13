import React from 'react';
import {
    Row,
    Col,
    Container,
    Dropdown,
    NavDropdown
} from "react-bootstrap";
import '../Css/Navigation.css';



export default function Navigation() {
    return (
<>
    <NavDropdown  className=""
title="Events"
id="basic-nav-dropdown">
<Container className="eventsNav pt-0 mt-0">
    <Row>
        <Col xs="12" md="3" className="text-left">
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
        </Col>
        <Col xs="12" md="3" className="text-left">
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
        </Col>
        <Col xs="12" md="3" className="text-left">
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
        </Col>
        <Col xs="12" md="3" className="text-left">
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba  
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                prueba
            </Dropdown.Item>
            <Dropdown.Divider />
        </Col>
    </Row>
</Container>
</NavDropdown>
        </>
    );
}