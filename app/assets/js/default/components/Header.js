import React from "react";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component
{
    render() {
        return (
            <div className="header-main">
                <div className="container">
                    <div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Szukaj w bazie" aria-label="Szukaj w bazie" />
                            <button className="btn btn-danger" type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Wyszukaj</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;