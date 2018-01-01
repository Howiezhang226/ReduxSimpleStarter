import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {

  render () {
    if (!this.props.book) {
      return <div>select a book !</div>
    }
    return (
      <li>
        {this.props.book.title}
      </li>
    )
  }
}

function mapStateToProps(state) {
  return (
  {
    book:state.activeBook
  }
  );
}

export default connect(mapStateToProps) (BookDetail)
