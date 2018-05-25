import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Authors from './Authors';
import Books from './Books';
import BookEdit from './BookEdit';
import AddAuthor from './AddAuthor';
import AddBook from './AddBook';

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Authors} />
        <Route exact path='/authors/:id' component={Books} />
        <Route exact path='/add_author/' component={AddAuthor} />
        <Route exact path='/authors/:id/add_book' component={AddBook} />
        <Route exact path='/books/:id' component={BookEdit} />
    </Switch>
  </main>
)

export default Main;