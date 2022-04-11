import React from "react";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LOGO from '../../../images/books-icon.png';

class Navbar extends React.Component
{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark nav-background">
                <div className="container">
                    <a className="navbar-brand" href="#">Księgarnia <img src={LOGO} alt="Logo" style={{width:"40px"}} className="rounded-pill" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                            {/*</li>*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-list-ul" /> Wybierz gatunek
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Kryminały</a></li>
                                    <li><a className="dropdown-item" href="#">Horrory</a></li>
                                    <li><a className="dropdown-item" href="#">Historyczne</a></li>
                                    <li><a className="dropdown-item" href="#">Informatyka</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon="fa-solid fa-book-open" /> Aktualna gazetka</a>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                            <ul className="navbar-nav ms-auto flex-nowrap">
                                <li className="nav-item">
                                    <a className="nav-link m-2 menu-item" href="#"><FontAwesomeIcon icon="fa-solid fa-user" /> Moje konto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link m-2 menu-item" href="#"><FontAwesomeIcon icon="fa-regular fa-star" /> Ulubione</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link m-2 menu-item" href="#"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Koszyk (0)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;