import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import Footer from './components/Footer';

const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '/public/bundles/fosjsrouting/js/router.min.js';
Routing.setRoutingData(routes);

// import 'bootstrap/dist/js/bootstrap.js';

class Website extends React.Component {
    render() {
        return(
            <>
                <header>
                    <Navbar />
                    <Header />
                </header>
                <Books />
                <footer>
                    <Footer/>
                </footer>
            </>
        );
    }
}

ReactDom.render(<Website />, document.getElementById('root'));





// Komponent funkcyjny + props
/*
export function Welcome(props) {
    const [name, setName] = useState("dupa");
    return(
        <p>Welcome, {props.name}</p>
    );
}



class Website extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            counter: 0
        };
        this.getBooks();

    }

    getBooks()
    {
        axios.get(Routing.generate("api_books"))
            .then(response => {
                this.setState({ books: response.data})
            }).catch(error =>
            console.log(error)
        );
    }

    increment = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }

    render() {
        return (
            <>
                <Header/>
                <ul>
                    {this.state.books.map(book => <li key={book.id}>{book.title}</li>)}
                </ul>
                <ModalElement/>

                <Welcome name="Mateusz" />

                <div>
                    <p>{this.state.counter}</p>
                    <button className="btn btn-sm btn-primary" onClick={this.increment}>Increment</button>
                </div>
            </>
        );
    }
}
*/