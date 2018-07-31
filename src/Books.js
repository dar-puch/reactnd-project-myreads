import React, { Component } from 'react';


class Books extends Component {

  render() {
    return(
      <div>
    from getAll: <ul>
    {this.props.allBooks.map((book) => (
      <li>
      {book.title}
      </li>
    ))}
    </ul>
    </div>
  )}
}

export default Books;
