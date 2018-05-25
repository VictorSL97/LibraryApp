import React, {Component} from 'react';
import axios from 'axios';

const API_KEY = 12358132134;

class AddAuthor extends Component {
    addAuthor(new_author) {
        axios.request({
            method: 'post',
            url: `https://bibliapp.herokuapp.com/api/authors?access_token=${API_KEY}`,
            data: new_author
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const new_author = {
            firstName: this.refs.first_name.value,
            lastName: this.refs.last_name.value
        }

        this.addAuthor(new_author);
    }

    render() {
        return (
            <div>
                <h1>Adicionar Autor</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <input type="text" name="first_name" ref="first_name" />
                        <label htmlFor="name">Primeiro Nome</label>
                    </div>

                    <div>
                        <input type="text" name="last_name" ref="last_name" />
                        <label htmlFor="name">Sobrenome</label>
                    </div>

                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default AddAuthor;