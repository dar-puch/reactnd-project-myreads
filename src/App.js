import React from 'react';
import './App.css';
import BookShelf from './BookShelf';
import Books from './Books';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
    updateState(books) {
      let currentlyReading = books.filter((element) => element.shelf === "currentlyReading");
      let wantToRead = books.filter((element) => element.shelf === "wantToRead");
      let read = books.filter((element) => element.shelf === "read");
      this.setState({books: books});
      this.setState({currentlyReading: currentlyReading});
      this.setState({wantToRead: wantToRead});
      this.setState({read: read});
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => this.updateState({books: books}));
    }

  render() {
    const allBooks = this.state.books;
    const currentlyReading = this.state.books.currentlyReading;
    const wantToRead = this.state.books.wantToRead;
    const read = this.state.books.read;

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

           <BookShelf books = {allBooks} currentlyReading = {currentlyReading} wantToRead = {wantToRead} read = {read}  />

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
