import React, {Component} from 'react';
import './App.css';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Search from './search';
class BooksApp extends Component {
  state = {
    books: [],
  }
move = this.move.bind(this);

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})})
      .catch(() => console.log('getAll failed'));
  }



move(shelf, book) {

    BooksAPI.update(book, shelf).then(
    result => {
      BooksAPI.getAll().then(
         books => {
this.setState({books: books})}).then(console.log('state set'))
}
);
}

  render() {

    return (

      <div className="app">
      <Route path="/search" component={Search} />
      <Route exact path = "/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
           <BookShelf books={this.state.books} move = {this.move}/>

            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>

     )}/>
       </div>
    )
  }
}

export default BooksApp
