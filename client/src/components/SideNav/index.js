import React, {Component} from 'react';
import styles from './sideNav.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
// import {Nav, Nav.Item, Navbar, NavDropdown, Dropdown.Item, Glyphicon} from 'react-bootstrap';

class SideNav extends Component {

    render() {
        return (<div id="sidebar-menu" className={styles.sideBarMenuContainer}>
            <Navbar fluid className={styles.sidebar} inverse >

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className={styles.userMenu}>
                        <Navbar.Link href="#">home</Navbar.Link>
                        <Navbar.Link href="#">logout</Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        <NavDropdown eventKey={1} title="Item 1">
                            <Dropdown.Item eventKey={1.1} href="#">Item 1.1</Dropdown.Item>
                        </NavDropdown>
                        <Nav.Item eventKey={2}>Item 2</Nav.Item>
                        <Nav.Item eventKey={3}>Item 3</Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>)
    }
};

export default SideNav