import React, { useState, useContext } from 'react';
import { AddNewBook } from '../actions/bookListActions';
import { BookContext } from '../contexts/BookContextProvider';

const BookForm = (props) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const { dispatch } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddNewBook(title, author))
        setTitle("")
        setAuthor("")
    }

    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="book author" value={author} onChange={e => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default BookForm;