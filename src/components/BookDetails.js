import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookDetails(props) {
    console.log(props.book)
    const { title, author, id } = props.book
    console.log( title, author, id) 

    // const { removeBook } = useContext(BookContext)
    const { dispatch } = useContext(BookContext)

    return (
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id})}>
            <div className="title">{ title }</div>
            <div className="author">{ author }</div>
        </li>
    )
}

export default BookDetails
 