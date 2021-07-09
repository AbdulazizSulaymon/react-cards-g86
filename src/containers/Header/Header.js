import React from 'react'
import "./Header.css"
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Fade, Slide } from "react-awesome-reveal";

class Header extends React.Component {
    state = { hideHeader: true }

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
            return { hideHeader: !state.hideHeader }
        })
    }

    render() {
        return <header >
            <div className="container py-3 d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={"https://www.algorismic.uz/images/algorismic-02.svg"} className="logo me-3" alt="" />
                    <ul className="d-none d-lg-flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    <a href="#" className="btn text-primary fw-bold">Login</a>
                    <a href="#" className="btn btn-primary fw-bold">Become a member <FontAwesomeIcon icon={faChevronRight} /> </a>
                </div>
                <div className="d-block d-lg-none">
                    <button className="btn  text-white">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn  text-white">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="btn  text-white" onClick={this.toggleHeader}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <Slide direction="down" className={`menu-mobile d-lg-none w-100 ${this.state.hideHeader && "d-none" || ""} `}>
                    <ul className="text-center mt-5">
                        <li className="my-4"><a href="#">Home</a></li>
                        <li className="my-4"><a href="#">Product</a></li>
                        <li className="my-4"><a href="#">Pricing</a></li>
                        <li className="my-4"><a href="#">Contact</a></li>
                    </ul>
                </Slide>
            </div>
        </header>
    }
}

export default Header;