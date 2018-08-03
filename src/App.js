import React, {Component} from 'react';
import './App.css';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    showSearchPage: false,
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


        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
           <BookShelf books={this.state.books} move = {this.move}/>

            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
