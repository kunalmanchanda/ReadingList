import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'


function BookForm() {
    // const { addBook } = useContext(BookContext)
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                // addBook(title, author)
                dispatch({type: 'ADD_BOOK', book : {
                    title, author
                }})
                setTitle('')
                setAuthor('')
            }}>
               
                <label htmlFor="">title</label>
                <input type="text" 
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
                
                <label htmlFor="">author</label>
                <input type="text" 
                placeholder="Enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                />
                {/* <button>Submit</button> */}
                <input type="submit" value="add book"/>
            </form>
        </div>
    )
}

export default BookForm
