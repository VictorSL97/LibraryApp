import React, {Component} from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const API_KEY = 12358132134;

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentWillMount() {
        this.getBooks();
    }

    getBooks() {
        let author_id = this.props.match.params.id;
        axios.get(`https://bibliapp.herokuapp.com/api/authors/${author_id}/books?access_token=${API_KEY}`)
            .then(response => {
                this.setState({books: response.data}, () => {
                    
                })
        })
        .catch(err => console.log(err));
    }

    onDelete() {
        let author_id = this.props.match.params.id;
        axios.delete(`https://bibliapp.herokuapp.com/api/authors/${author_id}?access_token=${API_KEY}`)
        .then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {
        const bookItems = this.state.books.map((book, i) => {
            return (
                <BookItem key={book.id} item={book} />
            )
        })

        let author_id = this.props.match.params.id;

        return (
            <div>
                <h1>Livros</h1>

                <ul>
                    {bookItems}
                </ul>

                <Link to={`/authors/${author_id}/edit`}>Editar Autor</Link>

                <br />

                <Link to={'/authors/${author_id}/add_book'} >Inserir Livro</Link>

                <br />

                <button onClick={this.onDelete.bind(this)}>Deletar Autor</button>
            </div>
        )
    }
}

export default Books;