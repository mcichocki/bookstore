import React from "react";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios';

// import BHPYTH from '../../../images/bhpyth.jpeg';
// import JCPPKW from '../../../images/jcppkw.jpeg';
// import CZYKOV from '../../../images/czykov.jpeg';
// import WARHAK from '../../../images/warhak.jpeg';
// import CTISPP from '../../../images/ctispp.jpeg';
// import KALIAU from '../../../images/kaliau.jpeg';
// import PYTMIE from '../../../images/pytmie.jpeg';
// import SQLOK5 from '../../../images/sqlok5.jpeg';
// import SPOSY3 from '../../../images/sposy3.jpeg';
// import DARDOST from '../../../images/darmowa_dostawa.png';
// import DOPISEK from '../../../images/dopisek-raty-0.png';

import Routing from 'bundles/fosjsrouting/js/router.min';

class Books extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.getBooks();

    }

    getBooks()
    {
        axios.get(Routing.generate("api_books"))
            .then(response => {
                console.log(response.data);
                this.setState({ books: response.data})
            }).catch(error =>
            console.log(error)
        );
    }

    render() {
        return (
            <div className="container mt-4 mb-4" style={{ backgroundColor: "#fff" }}>
                <div className="p-3">
                    {this.state.books.map((book, i, row) =>
                        <div key={book.id}>
                            <div className="row mb-3">
                                <div className="col-md-2 col-xs-12 col-sm-6">
                                    <img className="direct-chat-img image-cover" width="145" height="205"
                                         src={book.image}/>
                                </div>
                                <div className="col-md-4 col-xs-12 col-sm-6">
                                    <h6 style={{fontWeight: "bold", fontSize: "19px"}}><a href="#"
                                                                                          className="book-link">{book.title}</a>
                                    </h6>
                                    <div className="promotion">Promocja</div>
                                    <ul className="offer-list">
                                        <li><span style={{color: "gray"}}>Wydawnictwo:</span> {book.publisher}</li>
                                        <li><span style={{color: "gray"}}>Ocena:</span>
                                            <span style={{paddingLeft: "5px"}}>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F6D300"}}/>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F6D300"}}/>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F6D300"}}/>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F6D300"}}/>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F6D300"}}/>
                                                <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#AFA4AF"}}/>
                                            </span>
                                        </li>
                                        <li><span style={{color: "gray"}}>Autor:</span> {book.author}</li>
                                        <li><span style={{color: "gray"}}>Data premiery:</span> {book.releaseDate}</li>
                                        <li><span style={{color: "gray"}}>Druk:</span> {book.print}</li>
                                        <li><span style={{color: "gray"}}>Liczba stron:</span> {book.pages}</li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-xs-12 col-sm-6">
                                    <img src={book.extra.promotions_image}/>
                                    <ul className="page-menu mt-4 float-left">
                                        <li><a href="#">Opis książki</a></li>
                                        <li><a href="#">Opinie ({book.extra.countOpinions})</a></li>
                                        <li><a href="#">Szczegóły książki</a></li>
                                        <li><a href="#">Spis treści</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 text-center col-xs-12 col-sm-6">
                                    <div className="book-type-price" style={{padding: "8px"}}>
                                        <span style={{
                                            float: "left",
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            color: "#303030"
                                        }}><FontAwesomeIcon icon={book.icon}/> {book.type}</span>
                                        <span style={{
                                            float: "right",
                                            fontWeight: "bold",
                                            fontSize: "22px",
                                            color: "#ce0422"
                                        }}>{book.extra.promotionPrice} zł</span>
                                        <span style={{
                                            float: "right",
                                            fontWeight: "bold",
                                            marginRight: "5px",
                                            fontSize: "15px",
                                            color: "gray"
                                        }}><del>{book.price} zł</del></span>
                                        <br/><br/><br/>
                                        <span className="card-box-adding">
                                        <a href="#" style={{color: "#fff", textDecoration: "none"}}><FontAwesomeIcon
                                            icon="fa-solid fa-cart-shopping"/> Dodaj do koszyka</a>
                                        </span>
                                        <br/><br/>
                                        <span style={{
                                            float: "center",
                                            fontSize: "16px",
                                            color: "#04AA6D"
                                        }}>{book.extra.shipping}</span>
                                        <br/>
                                        <span style={{fontSize: "14px"}}>{book.extra.availability}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-line"/>
                            <br/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Books;

