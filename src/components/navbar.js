import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>
                    ExerTracker
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link className='nav-link' to='/'>
                                Exercises
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='nav-link' to='/create'>
                                Create Exercise log
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='nav-link' to='/user'>
                                Create User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
