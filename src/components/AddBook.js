import React, {Component} from 'react';
import axios from 'axios';

const API_KEY = 12358132134;

class AddBook extends Component {
    addAuthor(new_book) {
        axios.request({
            method: 'post',
            url: `https://bibliapp.herokuapp.com/api/books?access_token=${API_KEY}`,
            data: new_book
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const new_book = {
            title: this.refs.title.value,
            isbn: this.refs.isbn.value,
            authorId: this.refs.authorId.value
        }

        this.addAuthor(new_book);
    }

    render() {
        return (
            <div>
                <h1>Adicionar Livro</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <input type="text" name="title" ref="title" />
                        <label htmlFor="name">Título</label>
                    </div>

                    <div>
                        <input type="text" name="isbn" ref="isbn" />
                        <label htmlFor="name">ISBN</label>
                    </div>

                    <div>
                        <input type="text" name="authorId" ref="authorId" />
                        <label htmlFor="name">Id do Autor</label>
                    </div>

                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default AddBook;