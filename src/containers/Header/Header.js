import React from 'react'
import "./Header.css"
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render() {
        return <header >
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={"https://www.algorismic.uz/images/algorismic-02.svg"} className="logo me-3" alt="" />
                    <ul className="d-flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <a href="#" className="btn text-primary fw-bold">Login</a>
                    <a href="#" className="btn btn-primary fw-bold">Become a member <FontAwesomeIcon icon={faChevronRight} /> </a>
                </div>
            </div>
        </header>
    }
}

export default Header;