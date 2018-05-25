import React, {Component} from 'react';
import axios from 'axios';

const API_KEY = 12358132134;

class BookEdit extends Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    onDelete() {
        let book_id = this.props.match.params.id;
        axios.delete(`https://bibliapp.herokuapp.com/api/books/${book_id}?access_token=${API_KEY}`)
        .then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Detalhes do Livro</h1>
                <button onClick={this.onDelete.bind(this)}>Deletar Livro</button>
            </div>
        )
    }
}

export default BookEdit;