import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Books from './Books';


class Search extends Component {
  state = {
      searchBook: [],
      renderBooks: false
    }


      updateQuery = (query) => {

       BooksAPI.search(query, 20).then((books) => {
          if(books && books instanceof Array && (books.length !== 0)) {
        this.setState({searchBook: books, renderBooks: true })
      }
      else {
        this.setState({ searchBook:[], renderBooks: false})
      }
    }).catch(console.log('search error'))



  }


render() {
  return(  <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" value={this.state.query}
onChange={(event) => this.updateQuery(event.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">
      {(this.state.renderBooks === true) ? (<Books books = {this.state.searchBook} move = {this.props.move}/>) : <p> </p>
    }


      </div>
    </div>)
}

}

export default Search
