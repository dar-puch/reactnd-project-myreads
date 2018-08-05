import React, { Component } from 'react';


class Book extends Component {


render(){
  const book = this.props.book;
  return(
<li key={book.id}>
<div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: book.imageLinks ? 'url(' + book.imageLinks.thumbnail + ')' : 'none'}}></div>
    <div className="book-shelf-changer">
      <select onChange={e => this.props.move(e.target.value, book)}>
        <option value="move" disabled selected>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{book.title}</div>

  <div className="book-authors">{book.authors? book.authors.join(', ') : ''}</div>
</div>
</li>
)
}
}
export default Book;
