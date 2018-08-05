import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Books from './Books';


class Search extends Component {
  state = {
    searchBook: [],
    renderBooks: false,
    toUpdateShelf: [],
    query: ''
  }

  isInArray(element, array) {
    let newArray = array.filter((piece) => piece.id === element.id);
    if (newArray.length > 0) return true;
    else return false
  }



  updateQuery = (query) => {
    this.setState({
      query: query
    })
    BooksAPI.search(query, 20).then((booksFound) => {
      if (booksFound && booksFound instanceof Array && (booksFound.length !== 0)) {
        booksFound.map((bookM) => {
          bookM.shelf = 'none';
          this.props.shelvedBooks.filter((bookS) => {
            if (bookS.id === bookM.id) {
              bookM.shelf = bookS.shelf;
              if (!this.isInArray(bookM, this.state.toUpdateShelf)) {
                this.setState({
                  toUpdateShelf: [...this.state.toUpdateShelf, bookM]
                });
              }
            }

          }); //end filter

        });

        this.setState({
          searchBook: booksFound,
          renderBooks: true
        })
      } else {
        this.setState({
          searchBook: [],
          renderBooks: false
        });
      }
    })

  }

  render() {

      return ( < div className = "search-books" >
        <div className = "search-books-bar" >
        <Link to = '/'
        className = "close-search" > Close < /Link> <
        div className = "search-books-input-wrapper" > {

        } <input type = "text"
        placeholder = "Search by title or author"
        value = {
          this.state.query
        }
        onChange = {
          (event) => this.updateQuery(event.target.value)
        }/>

        </div> </div>
        <div className = "search-books-results" > {
          (this.state.renderBooks === true) ? ( < Books books = {
              this.state.searchBook
            }
            move = {
              this.props.move
            } />) : <p> </p >
          }


          </div> </div>)
        }

      }

      export default Search
