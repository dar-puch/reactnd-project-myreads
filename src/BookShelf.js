import React, { Component } from 'react';
import Books from './Books';
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {

state = {
  books: [],

}
move(event, id) {
    const shelf = event.target.value;
    BooksAPI.update(id,shelf).then(console.log('updated', shelf))
    .catch(console.log('update failed', shelf));
};

componentDidMount() {
  BooksAPI.getAll().then(books => {
    this.setState({books: books})})
    .catch(() => console.log('getAll failed'));
}

render(){
  let currentlyReading = this.state.books.filter((element) => element.shelf === "currentlyReading");
  let wantToRead = this.state.books.filter((element) => element.shelf === "wantToRead");
  let read = this.state.books.filter((element) => element.shelf === "read");
  return (
    <div>
<div className="bookshelf">
  <h2 className="bookshelf-title">Currently Reading</h2>
  <div className="bookshelf-books">

        <Books books = {currentlyReading } move = {this.move}/>

  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Want to read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {wantToRead} move = {this.move} />
    </ol>
  </div>
</div>

<div className="bookshelf">
  <h2 className="bookshelf-title">Read</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        <Books books = {read} move = {this.move}/>
    </ol>
  </div>
</div>
</div>
)}}//end component

export default BookShelf;
