import React from "react";
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import routes  from 'routes/fos_js_routes.json';
import Routing from 'bundles/fosjsrouting/js/router.min';
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
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-list-ul" /> Wybierz tematykę
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">C++</a></li>
                                    <li><a className="dropdown-item" href="#">Python</a></li>
                                    <li><a className="dropdown-item" href="#">PHP</a></li>
                                    <li><a className="dropdown-item" href="#">Linux</a></li>
                                    <li><a className="dropdown-item" href="#">Sieci</a></li>
                                    <li><a className="dropdown-item" href="#">Hacking</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={Routing.generate("website_news")}><FontAwesomeIcon icon="fa-solid fa-book-open" /> Aktualna gazetka</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownUser"
                                   role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon="fa-solid fa-user" /> Moje konto
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                                    <li><a className="dropdown-item" href={Routing.generate("app_login")}><FontAwesomeIcon icon="fa-solid fa-user-lock" /> Logowanie</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href={Routing.generate("app_register")}><FontAwesomeIcon icon="fa-solid fa-user-plus" /> Rejestracja</a></li>
                                </ul>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link m-2 menu-item" href={Routing.generate("app_login")}><FontAwesomeIcon icon="fa-solid fa-user" /> Moje konto</a>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <a className="nav-link menu-item" href={Routing.generate("website_favourite")}><FontAwesomeIcon icon="fa-regular fa-star" /> Ulubione</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-item" href={Routing.generate("app_cart")}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Koszyk (0)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
