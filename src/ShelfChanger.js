import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {
state = {shelf: ''};
move(event) {
  this.setState({shelf: event.target.value}, function () {
    const shelf = this.state.shelf;
    console.log('shelf', {shelf});
    const id = this.props.id;
    BooksAPI.update({id},{shelf}).then(console.log('updated', {shelf}));
});


}

render() {
return (
<div className="book-shelf-changer">
  <select onChange={e => this.move(e)}>
    <option value="move" disabled>Move to... shelf: {this.state.shelf}, id: {this.props.id};</option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
</div>
)
}
}

export default ShelfChanger;
