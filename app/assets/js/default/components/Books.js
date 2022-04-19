import React from "react";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BHPYTH from '../../../images/bhpyth.jpeg';
import JCPPKW from '../../../images/jcppkw.jpeg';
import CZYKOV from '../../../images/czykov.jpeg';
import WARHAK from '../../../images/warhak.jpeg';
import CTISPP from '../../../images/ctispp.jpeg';
import KALIAU from '../../../images/kaliau.jpeg';
import PYTMIE from '../../../images/pytmie.jpeg';
import SQLOK5 from '../../../images/sqlok5.jpeg';
import SPOSY3 from '../../../images/sposy3.jpeg';
import DARDOST from '../../../images/darmowa_dostawa.png';
import DOPISEK from '../../../images/dopisek-raty-0.png';

class Books extends React.Component
{



    render() {
        return (
            <div className="container mt-4 mb-4" style={{ backgroundColor: "#fff" }}>
                <div className="p-3">
                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={JCPPKW} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}><a href="#" className="book-link">Język C++. Kompendium wiedzy. Wydanie IV</a></h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span className="card-box-adding">
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-2">
                            <img className="direct-chat-img image-add" width="55" height="55" src={DARDOST} />
                            <img className="direct-chat-img image-cover" width="145" height="205" src={BHPYTH} />
                        </div>
                        <div className="col-md-4 col-xs-10">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Black Hat Python. Język Python dla hakerów i pentesterów</h6>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-sm-12">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-compact-disc"/> Audio</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={CZYKOV} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={WARHAK} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={CTISPP} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={KALIAU} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={PYTMIE} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={SPOSY3} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-tablet-screen-button"/> Ebook</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line" />
                    <br />

                    <div className="row">
                        <div className="col-md-2 col-xs-12 col-sm-6">
                            <img className="direct-chat-img image-cover" width="145" height="205" src={SQLOK5} />
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-6">
                            <h6 style={{fontWeight: "bold", fontSize: "19px" }}>Język C++. Kompendium wiedzy. Wydanie IV</h6>
                            <div className="promotion">Promocja</div>
                            <ul className="offer-list">
                                <li><span style={{ color: "gray" }}>Wydawnictwo:</span> Helion</li>
                                <li><span style={{ color: "gray" }}>Ocena:</span>
                                    <span style={{paddingLeft:"5px"}}>
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#F6D300"}} />
                                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color:"#AFA4AF"}} />
                                    </span>
                                </li>
                                <li><span style={{ color: "gray" }}>Autor:</span> Bjarne Stroustrup</li>
                                <li><span style={{ color: "gray" }}>Data premiery:</span> 2014-07-10</li>
                                <li><span style={{ color: "gray" }}>Druk:</span> oprawa twarda</li>
                                <li><span style={{ color: "gray" }}>Liczba stron:</span> 1296</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 col-sm-6">
                            <img src={DOPISEK} />
                            <ul className="page-menu mt-4 float-left">
                                <li><a href="#">Opis książki</a></li>
                                <li><a href="#">Opinie (22)</a></li>
                                <li><a href="#">Szczegóły książki</a></li>
                                <li><a href="#">Spis treści</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center col-xs-12 col-sm-6">
                            <div className="book-type-price" style={{padding: "8px"}}>
                                <span style={{float:"left", fontWeight: "bold", fontSize: "20px", color:"#303030"}}><FontAwesomeIcon icon="fa-solid fa-book"/> Książka</span>
                                <span style={{float:"right", fontWeight: "bold", fontSize: "22px", color:"#ce0422"}}>75,50 zł</span>
                                <span style={{float:"right", fontWeight: "bold", marginRight:"5px", fontSize: "15px", color:"gray"}}><del>125,50 zł</del></span>
                                <br/><br /><br />
                                <span  style={{float:"center", fontSize: "20px", padding: "10px", backgroundColor:"#ce0422" }}>
                                    <a href="#" style={{color: "#fff", textDecoration: "none" }}><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> Dodaj do koszyka</a>
                                </span>
                                <br/><br />
                                <span style={{float:"center", fontSize: "16px", color:"#04AA6D"}}>Wysyłamy w 24h</span>
                                <br/>
                                <span style={{fontSize: "14px"}}>Powiadom o dostępności audiobooka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;

