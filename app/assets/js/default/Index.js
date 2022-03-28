import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

const routes = require('../../../public/js/fos_js_routes.json');
import Routing from '/public/bundles/fosjsrouting/js/router.min.js';

Routing.setRoutingData(routes);

class Header extends React.Component
{
    render() {
        return (<h2>Strona główna</h2>);
    }
}

class Index extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { books: []};
        this.getBooks();
    }

    // componentDidMount() {
    // }

    // read Books
    getBooks()
    {
        axios.get(Routing.generate("api_books"))
            .then(response => {
                this.setState({ books: response.data})
            }).catch(error =>
            console.log(error)
        );
    }

    render() {
        return (
            <>
                <Header/>
                <ul>
                    {this.state.books.map(book => <li key={book.id}>{book.title}</li>)}
                </ul>
            </>
        );
    }
}

ReactDom.render(<Index />, document.getElementById('root'));