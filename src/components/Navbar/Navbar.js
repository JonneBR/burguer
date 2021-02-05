import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/burguer-logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar-wrapper">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-img">
                            {/* <Link to='/' className='nav-link'> */}
                                <img className='img-logo' src={logo} alt=""/>
                            {/* </Link> */}
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                Endereço
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
