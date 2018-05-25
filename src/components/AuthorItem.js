import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AuthorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
            // id: props.key
        }
    }

    render() {
        return (
            <li>
                <Link to={`/authors/${this.state.item.id}`} > {this.state.item.firstName + ' ' + this.state.item.lastName} </Link>
            </li>
        )
    }
}

export default AuthorItem;