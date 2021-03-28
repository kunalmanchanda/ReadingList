import React, {  createContext, useEffect, useReducer, /*useState*/ } from 'react'
import { bookReducer } from './BookReducer';

export const BookContext = createContext();

const BookContextProvider= (props) => {

    // const [books, setBooks ] = useState([
    //     {title: 'name of the wind', author: 'patrick ruthfose', id: 1},
    //     {title: 'the final empire', author: 'brandon anderson', id: 2}
    // ])

    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id: books.length+1}])
    // };

    // const removeBook = (id) => {
    //     setBooks(books.filter(b => b.id !== id))
    // }

    const initialState = [
        {title: 'name of the wind', author: 'patrick ruthfose', id: 1},
        {title: 'the final empire', author: 'brandon anderson', id: 2}
    ]

    // localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : localStorage.setItem('books', JSON.stringify(initialState)) 

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : initialState;
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        // <BookContext.Provider value={{books, addBook, removeBook}}>
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;


// reducers centralizes all of our methods for changing states into a single func
// Reducer Function interacts with state/data, all of the state manipulation logic
// Action object type of change inside reducer function {type: "ADD BOOk", payload}
// dispatch func sends the action to reducer  
// dispatch({type: 'ADD_BOOK', book: {}})
// export default ageReducer = (state, action) => { 
// switch(action.type){
//      case "ADD_ONE":
//             return state + 1}}
// const [age, dispatch] = useReducer(ageReducer,intial_state)

