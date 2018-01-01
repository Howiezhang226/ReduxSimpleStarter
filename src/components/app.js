import React, { Component } from 'react';
import BookList from '../components/book-list'
import BookDetail from '../components/book_detial'
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
