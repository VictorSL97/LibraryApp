import React, {Component} from 'react';
import axios from 'axios';
import AuthorItem from './AuthorItem';
import { Link } from 'react-router-dom';

const API_KEY = 12358132134;

class Authors extends Component {
    constructor() {
        super();
        this.state = {
            authors: []
        }
    }

    componentWillMount() {
        this.getAuthors();
    }

    getAuthors() {
        axios.get(`https://bibliapp.herokuapp.com/api/authors?access_token=${API_KEY}`)
            .then(response => {
                this.setState({authors: response.data}, () => {})
        })
        .catch(err => console.log(err));
    }

    render() {
        const authorItems = this.state.authors.map((author, i) => {
            return (
                <AuthorItem key={author.id} item={author} />
            )
        })

        return (
            <div>
                <h1>Autores</h1>
                <ul>
                    {authorItems}
                </ul>

                <Link to={'/add_author'} >Inserir Autor</Link>
            </div>
        )
    }
}

export default Authors;