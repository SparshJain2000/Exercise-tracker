import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import {
    NavbarBrand,
    Navbar,
    NavItem,
    Collapse,
    Nav,
    NavbarToggler,
} from "reactstrap";

export default function Navbaar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color='dark' dark expand='lg'>
                <NavbarBrand>
                    <Link to='/' className='navbar-brand'>
                        ExerTracker
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />{" "}
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem className='navbar-item'>
                            <Link className='nav-link' to='/'>
                                <FontAwesomeIcon icon={faList} /> Exercises
                            </Link>
                        </NavItem>
                        <NavItem className='navbar-item'>
                            <Link className='nav-link' to='/create'>
                                <FontAwesomeIcon icon={faPlus} /> Create
                                Exercise log
                            </Link>
                        </NavItem>
                        <NavItem className='navbar-item'>
                            <Link className='nav-link' to='/user'>
                                <FontAwesomeIcon icon={faUser} /> Create User
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
